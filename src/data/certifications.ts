export interface CertificationItem {
  name: string;
  issuer: string;
  href: string;
  date: string;
}

export const certifications: CertificationItem[] = [
  {
    name: "프로그래밍기능사",
    issuer: "한국산업인력공단",
    href: "https://www.hrdkorea.or.kr",
    date: "2026.04",
  },
  {
    name: "리눅스마스터 2급",
    issuer: "한국정보통신진흥협회",
    href: "https://www.kait.or.kr",
    date: "2023.10",
  },
];
