import Box from "@/components/Box";
import Gap from "@/components/Gap";
import Text from "@/components/Text";

export default function Footer() {
  const date = new Date();

  return (
    <>
      <Gap height="40px" />
      <Box display="flex" justify_content="center">
        <Text font_size="16px">
          Copyright ⓒ {date.getFullYear()} sid12g All rights reserved.
        </Text>
      </Box>
      <Gap height="16px" />
    </>
  );
}
