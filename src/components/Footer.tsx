import Box from "./Box";
import Gap from "./Gap";
import Text from "./Text";

export default function Footer() {
  return (
    <>
      <Gap height="40px" />
      <Box display="flex" justify_content="center">
        <Text font_size="16px">
          Copyright ⓒ 2025 sid12g All rights reserved.
        </Text>
      </Box>
      <Gap height="16px" />
    </>
  );
}
