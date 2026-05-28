---
name: png-to-webp
description: PNG 이미지를 WebP로 일괄 변환하는 스킬. public 디렉토리(또는 지정 디렉토리)의 모든 PNG 파일을 WebP로 압축 변환하고, 압축률 결과를 보고하며, 소스 코드 내 PNG 참조를 WebP로 자동 교체하고, 빌드 테스트까지 실행한다. 사용자가 "png를 webp로", "이미지 최적화", "png 압축", "webp 변환", "이미지 용량 줄이기" 등을 언급할 때 반드시 이 스킬을 사용하라. png 최적화나 빌드 성능 개선을 원할 때도 트리거하라.
---

# PNG → WebP 변환 스킬

PNG 이미지를 WebP로 일괄 변환하고, 코드 내 참조를 자동으로 업데이트한 뒤 빌드 테스트를 수행하는 스킬.

---

## 전체 워크플로우

1. **환경 확인** — 필수 도구 설치 확인 및 설치
2. **PNG 탐색** — 대상 디렉토리에서 PNG 파일 목록 수집
3. **WebP 변환** — 각 PNG를 WebP로 변환, 원본 유지
4. **압축 결과 보고** — 파일별 / 전체 압축률 표시
5. **코드 참조 교체** — 소스 파일 내 `.png` → `.webp` 경로 수정
6. **교체 결과 보고** — 수정된 파일 및 라인 목록 표시
7. **빌드 테스트** — 프로젝트 빌드 실행 및 결과 확인
8. **원본 PNG 정리** (선택) — 사용자 확인 후 원본 삭제

---

## Step 1: 환경 확인 및 도구 설치

```bash
# cwebp 설치 확인
if ! command -v cwebp &> /dev/null; then
  echo "cwebp 설치 중..."
  # Ubuntu/Debian
  sudo apt-get install -y webp 2>/dev/null || \
  # macOS
  brew install webp 2>/dev/null || \
  # npm fallback
  npm install -g cwebp-bin 2>/dev/null
fi

cwebp -version
```

**설치 실패 시**: Python `Pillow` 라이브러리를 대안으로 사용

```bash
pip install Pillow --break-system-packages
```

---

## Step 2: PNG 탐색

대상 디렉토리(기본: `public/`, `src/assets/`, `assets/`)에서 PNG 수집.

```bash
# 디렉토리 내 모든 PNG 파일 탐색
find ./public ./src/assets ./assets -name "*.png" 2>/dev/null | sort

# 특정 디렉토리만 탐색하려면
find <TARGET_DIR> -name "*.png" | sort
```

사용자가 디렉토리를 명시하지 않으면 위 기본 경로를 탐색한다.

---

## Step 3: WebP 변환

변환 스크립트: `scripts/convert.sh` 또는 아래를 직접 실행

```bash
# cwebp 사용 시 (품질 85 권장)
for png_file in $(find ./public -name "*.png"); do
  webp_file="${png_file%.png}.webp"
  cwebp -q 85 "$png_file" -o "$webp_file"
done

# Python Pillow 대안
python3 - << 'EOF'
from PIL import Image
from pathlib import Path

target_dir = Path("./public")
for png_path in target_dir.rglob("*.png"):
    webp_path = png_path.with_suffix(".webp")
    img = Image.open(png_path)
    img.save(webp_path, "WEBP", quality=85, method=6)
    print(f"변환 완료: {png_path} → {webp_path}")
EOF
```

**품질 설정 기준**:

- `85` — 기본값, 고품질 + 우수한 압축률
- `75` — 더 공격적인 압축 (아이콘, 배경 등)
- `90` — 고품질 유지 (포트폴리오, 상품 이미지)

---

## Step 4: 압축 결과 보고

변환 완료 후 반드시 아래 형식으로 결과를 출력한다.

```
📦 PNG → WebP 변환 결과
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
파일명                  PNG 크기   WebP 크기   압축률
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
hero.png              1,240 KB   → 312 KB   (-74.8%)
logo.png                 85 KB   →  22 KB   (-74.1%)
banner.png              520 KB   → 148 KB   (-71.5%)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
전체 합계             1,845 KB   → 482 KB   (-73.9%) 🎉
```

결과 계산 방법:

```bash
python3 - << 'EOF'
from pathlib import Path

total_png = 0
total_webp = 0
rows = []

for png in Path("./public").rglob("*.png"):
    webp = png.with_suffix(".webp")
    if webp.exists():
        ps, ws = png.stat().st_size, webp.stat().st_size
        ratio = (ps - ws) / ps * 100
        total_png += ps; total_webp += ws
        rows.append((png.name, ps, ws, ratio))

print(f"{'파일명':<30} {'PNG':>10} {'WebP':>10} {'압축률':>10}")
print("─" * 65)
for name, ps, ws, r in rows:
    print(f"{name:<30} {ps//1024:>8}KB {ws//1024:>8}KB ({-r:>+.1f}%)")
print("─" * 65)
tr = (total_png - total_webp) / total_png * 100
print(f"{'합계':<30} {total_png//1024:>8}KB {total_webp//1024:>8}KB ({-tr:>+.1f}%)")
EOF
```

---

## Step 5: 코드 내 PNG 참조 교체

소스 코드(`.js`, `.ts`, `.jsx`, `.tsx`, `.vue`, `.html`, `.css`, `.scss`, `.md`, `.json`) 내의 `.png` 경로를 `.webp`로 교체.

```bash
# 교체 전 영향받는 파일 미리 확인
grep -rl '\.png' ./src ./public --include="*.{js,ts,jsx,tsx,vue,html,css,scss,md,json}" 2>/dev/null

# 실제 교체 (sed 사용)
find ./src -type f \( -name "*.js" -o -name "*.ts" -o -name "*.jsx" \
  -o -name "*.tsx" -o -name "*.vue" -o -name "*.html" \
  -o -name "*.css" -o -name "*.scss" -o -name "*.md" \) \
  -exec sed -i 's/\.png"/\.webp"/g; s/\.png'"'"'/\.webp'"'"'/g; s/\.png`/\.webp`/g' {} +

# Next.js Image 컴포넌트, CSS url() 등 추가 패턴
find ./src -type f -exec sed -i \
  's|src={\(.*\)\.png}|src={\1.webp}|g' {} + 2>/dev/null
```

**중요**: 교체 전 git 상태를 확인하거나 백업을 권장한다.

---

## Step 6: 교체 결과 보고

교체 후 반드시 아래 형식으로 결과를 출력한다.

```
🔄 코드 참조 교체 결과
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
파일                              교체 건수
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/components/Hero.tsx               3건
src/pages/index.tsx                   1건
src/styles/global.css                 2건
public/index.html                     1건
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
총 4개 파일, 7건 교체 완료
```

교체 건수 집계:

```bash
# 각 파일별 교체 건수 확인
grep -rn '\.webp' ./src --include="*.{js,ts,tsx,jsx,vue,css}" | \
  awk -F: '{print $1}' | sort | uniq -c | sort -rn
```

---

## Step 7: 빌드 테스트

프로젝트 타입을 자동 감지하고 빌드를 실행한다.

```bash
# 패키지 매니저 및 빌드 명령 자동 감지
if [ -f "package.json" ]; then
  BUILD_CMD=$(node -e "const p=require('./package.json'); console.log(p.scripts?.build || 'build')")

  if [ -f "pnpm-lock.yaml" ]; then
    pnpm run build
  elif [ -f "yarn.lock" ]; then
    yarn build
  else
    npm run build
  fi
elif [ -f "Makefile" ]; then
  make build
elif [ -f "Cargo.toml" ]; then
  cargo build --release
fi
```

**빌드 성공 시**:

```
✅ 빌드 성공 — 에러 없음
   빌드 시간: 12.4s
   출력 디렉토리: ./dist (총 2.3MB)
```

**빌드 실패 시**: 에러 메시지를 분석하여 원인을 설명하고 수정 방안을 제시한다. 일반적인 원인:

- 일부 PNG가 변환되지 않음 → 해당 파일 재변환
- 동적 import 경로 (`require(\`./img/${name}.png\``)`) → 수동 수정 필요
- CSS `url()` 내 경로 미교체 → 별도 패턴으로 재처리

---

## Step 8: 원본 PNG 정리 (선택)

빌드 성공 확인 후 사용자에게 원본 PNG 삭제 여부를 묻는다.

```
❓ 원본 PNG 파일 삭제 여부
   변환된 PNG 파일 12개 (총 1,845KB)를 삭제하시겠습니까?
   (WebP 파일은 유지됩니다)
   [y/N]:
```

사용자 동의 시:

```bash
find ./public -name "*.png" -delete
echo "🗑️  원본 PNG 파일 삭제 완료"
```

---

## 최종 요약 출력 형식

모든 단계 완료 후 아래 형식으로 요약한다.

```
═══════════════════════════════════════════════
🎉 PNG → WebP 변환 완료 요약
═══════════════════════════════════════════════
📦 이미지 변환    12개 파일, 1,845KB → 482KB (-73.9%)
🔄 코드 교체      4개 파일, 7건 수정
✅ 빌드 테스트    성공 (12.4s)
🗑️  원본 정리     12개 PNG 삭제 완료 (선택 완료)
═══════════════════════════════════════════════
```

---

## 주의 사항 및 엣지 케이스

- **SVG / GIF / JPEG**: 변환 대상에서 제외 (PNG만 처리)
- **투명도(알파채널)**: WebP는 투명도를 완벽 지원하므로 PNG 투명 이미지도 안전하게 변환됨
- **파비콘(favicon.png)**: 브라우저 호환성을 위해 변환 목록에서 제외하는 것을 권장
  ```bash
  find ./public -name "*.png" ! -name "favicon*" ! -name "apple-touch-icon*"
  ```
- **동적 경로**: `require(\`./img/${name}.png\``)` 같은 동적 참조는 자동 교체 불가 → 사용자에게 위치를 알려주고 수동 수정 안내
- **브라우저 호환성**: WebP는 모든 모던 브라우저에서 지원됨 (IE 제외). IE 지원이 필요하면 `<picture>` 태그 사용 권장
- **git 백업**: 교체 전 `git stash` 또는 커밋 상태 확인을 권장
