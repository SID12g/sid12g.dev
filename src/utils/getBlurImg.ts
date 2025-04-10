import { getPlaiceholder } from "plaiceholder";
import fs from "fs";
import path from "path";

const getBlurImg = async (imgSrc: string) => {
  try {
    if (imgSrc.startsWith("/")) {
      const publicDir = path.join(process.cwd(), "public");
      const filePath = path.join(publicDir, imgSrc);

      if (!fs.existsSync(filePath)) {
        console.error(`이미지 파일이 존재하지 않습니다: ${filePath}`);
        return "";
      }

      const buffer = fs.readFileSync(filePath);
      const { base64 } = await getPlaiceholder(buffer, { size: 10 });
      return base64;
    } else {
      const buffer = await fetch(imgSrc).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      );
      const { base64 } = await getPlaiceholder(buffer, { size: 10 });
      return base64;
    }
  } catch (e) {
    console.error("Blur 이미지 생성 오류:", e);
    return "";
  }
};

export default getBlurImg;
