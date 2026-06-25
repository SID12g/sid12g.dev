export interface ActivityItem {
  role: string;
  organization: string;
  href: string;
  period: string;
  current?: boolean;
}

export const activities: ActivityItem[] = [
  {
    role: "Frontend Developer",
    organization: "Fingoo",
    href: "https://fingoo.vercel.app",
    period: "2026.05 ~",
    current: true,
  },
  {
    role: "Supporter",
    organization: "서울시립대학교 빅데이터혁신융합대학사업단",
    href: "https://bigdatahub.ac.kr",
    period: "2026.04 ~",
    current: true,
  },
];
