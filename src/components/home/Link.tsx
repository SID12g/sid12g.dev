import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import Image from "next/image";
import PostIcon from "@/../public/icons/post.svg";
import LinkedinIcon from "@/../public/icons/linkedin.svg";
import HyperLink from "@/components/HyperLink";
import ContentFrame from "../ContentFrame";

export default function Link() {
  return (
    <ContentFrame title="Link">
      <Box flex_grow={1}>
        <HyperLink href="https://post.sid12g.dev">
          <Box width="fit-content" display="flex" align_items="center">
            <Image src={PostIcon} alt="Post Icon" />
            <Gap width="4px" />
            <Text font_size="14px" letter_spacing="-0.14px">
              https://post.sid12g.dev
            </Text>
          </Box>
        </HyperLink>
        <Gap height="8px" />
        <HyperLink href="https://www.linkedin.com/in">
          <Box display="flex" align_items="center">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
            <Gap width="4px" />
            <Text font_size="14px" letter_spacing="-0.14px">
              https://www.linkedin.com/in
            </Text>
          </Box>
        </HyperLink>
      </Box>
    </ContentFrame>
  );
}
