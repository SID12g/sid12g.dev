import Box from "@/components/Box";
import Text from "@/components/Text";
import Gap from "@/components/Gap";
import Image, { StaticImageData } from "next/image";

export default function Banner({
  background,
  title,
  description,
}: {
  background: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <Box
      $border_radius="20px"
      $display="flex"
      $justify_content="center"
      $align_items="center"
      $flex_direction="column"
      $position="relative"
    >
      <Image
        src={background}
        alt="background"
        width={3840}
        height={2160}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
        placeholder="blur"
      />
      <Box
        $position="absolute"
        $top="0"
        $left="0"
        $width="100%"
        $height="100%"
        $background_color="rgba(0, 0, 0, 0.5)"
        $z_index="1"
      />
      <Box
        $position="relative"
        $z_index="2"
        $display="flex"
        $flex_direction="column"
        $align_items="center"
      >
        <Gap $height="40px" />
        <Text
          $font_size="24px"
          $font_weight="500"
          $color="#ffffff"
          $line_height="32px"
        >
          {title}
        </Text>
        <Gap $height="4px" />
        <Text
          $font_size="14px"
          $font_weight="400"
          $color="#E0E0E0"
          $line_height="20px"
          $letter_spacing="-0.28px"
        >
          {description}
        </Text>
        <Gap $height="40px" />
      </Box>
    </Box>
  );
}
