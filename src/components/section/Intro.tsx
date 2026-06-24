import Separator from "@/components/Separator";
import Link from "next/link";

export default function Intro() {
  const textStyle = `font-medium`;
  return (
    <div>
      <Separator title="INTRO" />
      <div className="flex flex-col gap-4">
        <p className={textStyle}>
          저는 한국디지털미디어고등학교 웹프로그래밍과를 졸업하고 서울시립대학교
          통계학과에서 학업과 개발을 병행하며 꾸준히 성장하고 있는 주니어
          개발자입니다.
        </p>
        <p className={textStyle}>
          개발과 경제 · 금융 분야에 큰 관심을 가지고 있어 해당 분야와 관련된
          책과 기사를 많이 접하며, 주변 분들과 이야기를 나누는 것을 좋아합니다.
          최근에는 투자 및 자산관리에 대해 관심을 가지고 있어, 많은 분들께 제가
          가지고 있는 경제 · 금융 분야에 대한 접근법에 대해 이야기하며, 생각을
          넓혀나가고 있습니다.
        </p>
        <p className={textStyle}>
          개발 프레임워크로는 Next.js와 React Native를 자주 사용합니다. 고등학생
          시절 웹프로그래밍을 처음 접하며 전문적인 전공 수업을 통해 React를
          익혔고, 더 나아가 Next.js와 React Native도 학습하였습니다. 프론트엔드
          뿐 아니라 개발 및 IT 전반에 관심을 가지고 있으며, Nest.js와 Spring
          Boot 등 백엔드 프레임워크에도 관심을 가지고 있습니다.
        </p>
        <p className={textStyle}>
          고등학생 시절부터 여러 프로젝트를 진행하며 협업 능력을 길러왔습니다.
          프로덕트에 대해 개발 뿐 아니라 기획, 디자인 등 전반에 대해 다루어왔고,
          덕분에 프로덕트를 바라볼 때 더욱 성숙한 시선으로 바라볼 수 있게
          되었습니다.
        </p>
        <p className={textStyle}>
          특히 Figma를 통한 UI/UX 디자인에 큰 관심을 가지고 있으며, 개발자로서
          좋은 UX를 위한 디자인을 이해하고 실행할 수 있어야 한다고 생각하여
          Figma 또한 고등학생 당시부터 학습해 왔으며, 대학교에서도 웹디자인
          수업을 수강하며 이러한 시각을 더욱 넓혀가고 있습니다. 고등학생 때
          피그마를 사용하여 책을 만든 경험도 가지고 있습니다.{" "}
          <Link
            className="text-muted"
            href="https://blog.sid12g.dev/figma-book"
            target="_blank"
            rel="noopener noreferrer"
          >
            (자세히 보기)
          </Link>
        </p>
        <p className={textStyle}>
          그리고 현재, 통계학과에 재학하며 통계학을 학습하며, 개발과 통계학이
          어떻게 잘 조화를 이룰 수 있을지 고민하고, 새로운 학습을 바탕으로
          새로운 프로덕트를 개발해나가고 있습니다.
        </p>
      </div>
    </div>
  );
}
