"use client";

import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import ColorHighlight from "@/components/ColorHighlight";
import React from "react";
import styled from "styled-components";
import ResponsiveGap from "../ResponsiveGap";

export default function Education() {
  return (
    <>
      <ResponsiveOuterSubject
        font_size="20px"
        font_weight="500"
        line_height="24px"
        letter_spacing="-0.4px"
        style={{ whiteSpace: "nowrap" }}
      >
        Education
      </ResponsiveOuterSubject>
      <Gap height="12px" />
      <Box width="100%" height="2px" background_color="#000000" />
      <ResponsiveGap height="32px" r_height="20px" />
      <Box display="flex">
        <ResponsiveInnerSubject>
          <Text
            font_size="20px"
            font_weight="500"
            line_height="24px"
            letter_spacing="-0.4px"
            style={{ whiteSpace: "nowrap" }}
          >
            Education
          </Text>
        </ResponsiveInnerSubject>
        <ResponsiveGap width="20px" r_width="0" />
        <Box flex_grow={1}>
          <EducationPropertyChildren
            title="Korea Digital Media High School"
            date={
              <Text font_size="16px" letter_spacing="-0.32px">
                2021.01 ~{" "}
                <ColorHighlight color="#007BFF">재직 중</ColorHighlight>
              </Text>
            }
            status="Principal"
          />
          <ResponsiveGap height="32px" r_height="20px" />
          <Box width="100%" height="1px" background_color="#000000" />
          <ResponsiveGap height="32px" r_height="20px" />
          <EducationPropertyChildren
            title="Another Experience"
            date={
              <Text font_size="16px" letter_spacing="-0.32px">
                2021.01 ~{" "}
                <ColorHighlight color="#007BFF">재직 중</ColorHighlight>
              </Text>
            }
            status="Developer"
          />
        </Box>
      </Box>
    </>
  );
}

const ResponsiveOuterSubject = styled(Text)`
  @media (min-width: 800px) {
    display: none;
  }
`;

const ResponsiveInnerSubject = styled.div`
  width: 200px;
  display: flex;

  @media (max-width: 800px) {
    display: none;
  }
`;

const PointWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }
`;

function EducationPropertyChildren({
  title,
  date,
  status,
}: {
  title: string;
  date: React.ReactNode;
  status: string;
}) {
  return (
    <Box>
      <PointWrapper>
        <Text
          font_size="20px"
          font_weight="500"
          line_height="24px"
          letter_spacing="-0.4px"
        >
          {title}
        </Text>
        {date}
      </PointWrapper>
      <Gap height="4px" />
      <Text font_size="18px" line_height="22px" letter_spacing="-0.36px">
        {status}
      </Text>
    </Box>
  );
}

// "use client";

// import styled, { keyframes } from "styled-components";
// import Wrapper from "@/components/Wrapper";
// import Gap from "@/components/Gap";
// import Text from "@/components/Text";
// import Box from "@/components/Box";
// import ColorHighlight from "../ColorHighlight";

// export default function Education() {
//   return (
//     <>
//       <Box display="flex">
//         <Box width="200px">
//           <Text
//             font_size="20px"
//             font_weight="500"
//             line_height="24px"
//             letter_spacing="-0.4px"
//             style={{ whiteSpace: "nowrap" }}
//           >
//             Education
//           </Text>
//         </Box>
//         <Gap width="20px" />
//         <Box flex_grow={1}>
//           <EducationPropertyChildren />
//           <Gap height="16px" />
//           <Box width="100%" height="1px" background_color="#000000" />
//           <Gap height="16px" />
//           <EducationPropertyChildren />
//         </Box>
//       </Box>
//       <Gap height="32px" />
//     </>
//   );
// }

// function EducationPropertyChildren() {
//   return (
//     <Box>
//       <Box display="flex" justify_content="space-between" align_items="center">
//         <Text
//           font_size="20px"
//           font_weight="500"
//           line_height="24px"
//           letter_spacing="-0.4px"
//         >
//           Korea Digital Media High School
//         </Text>
//         <Text font_size="16px" letter_spacing="-0.32px">
//           2021.01 ~ <ColorHighlight color="#007BFF">재직 중</ColorHighlight>
//         </Text>
//       </Box>
//       <Gap height="8px" />
//       <Text font_size="16px" line_height="20px" letter_spacing="-0.32px">
//         웹프로그래밍과
//       </Text>
//     </Box>
//   );
// }
