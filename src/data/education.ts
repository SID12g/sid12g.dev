export interface EducationItem {
  school: string;
  href: string;
  major: string;
  period: string;
  current?: boolean;
}

export const education: EducationItem[] = [
  {
    school: "서울시립대학교",
    href: "https://www.uos.ac.kr",
    major: "통계학과",
    period: "2026.03 ~",
    current: true,
  },
  {
    school: "한국디지털미디어고등학교",
    href: "https://dimigo-h.goeas.kr",
    major: "웹프로그래밍과",
    period: "2023.03 ~ 2026.01",
  },
];
