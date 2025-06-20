import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import Image from "next/image";
import PostIcon from "@/../public/icons/post.svg";
import LinkedinIcon from "@/../public/icons/linkedin.svg";
import HyperLink from "@/components/HyperLink";
import ContentFrame from "@/components/ContentFrame";

export default function Link() {
  return (
    <ContentFrame title="Link">
      <Box $flex_grow={1}>
        <LinkChildren href="https://post.sid12g.dev" image={PostIcon} />
        <Gap $height="8px" />
        <LinkChildren
          href="https://www.linkedin.com/in/sid12g"
          image={LinkedinIcon}
        />
      </Box>
    </ContentFrame>
  );
}

function LinkChildren({ href, image }: { href: string; image: string }) {
  return (
    <HyperLink href={href}>
      <Box $width="fit-content" $display="flex" $align_items="center">
        <Image src={image} alt="Post Icon" />
        <Gap $width="8px" />
        <Box $width="fit-content">
          <Text $font_size="14px" $letter_spacing="-0.14px">
            {href}
          </Text>
        </Box>
      </Box>
    </HyperLink>
  );
}
