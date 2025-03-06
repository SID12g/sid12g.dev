import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import Image from "next/image";
import HyperLink from "@/components/HyperLink";
import ContentFrame from "@/components/ContentFrame";

export default function Contribute() {
  return (
    <ContentFrame title="Contribute">
      <Box flex_grow={1}>
        <ContributeChildren
          href="https://github.com/toss/suspensive/pull/1168"
          image="https://avatars.githubusercontent.com/u/25682207?s=128&v=4"
          content="docs(suspensive.org): add punctuation marks to a document #1168 (24.08.01)"
        />
        <Gap height="8px" />
        <ContributeChildren
          href="https://github.com/toss/suspensive/pull/1179"
          image="https://avatars.githubusercontent.com/u/25682207?s=128&v=4"
          content="docs(suspensive.org): modify punctuation marks and spaces in the document #1179 (24.08.03)"
        />
        <Gap height="8px" />
        <ContributeChildren
          href="https://github.com/shuding/nextra/pull/3214"
          image="https://avatars.githubusercontent.com/u/3676859?s=128&v=4"
          content="docs: fix meta tag theme color #3214 (24.09.09)"
        />
      </Box>
    </ContentFrame>
  );
}

function ContributeChildren({
  href,
  image,
  content,
}: {
  href: string;
  image: string;
  content: string;
}) {
  return (
    <HyperLink href={href}>
      <Box width="fit-content" display="flex" align_items="center">
        <Box width="24px" height="24px" border_radius="100px">
          <Image
            src={image}
            alt="Contribute Icon"
            width={128}
            height={128}
            style={{ width: "24px", height: "24px" }}
            objectFit="cover"
          />
        </Box>
        <Gap width="4px" />
        <Text font_size="14px" letter_spacing="-0.14px">
          {content}
        </Text>
      </Box>
    </HyperLink>
  );
}
