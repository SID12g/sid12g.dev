import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";

export default function Intro() {
  return (
    <Box $display="flex" $flex_direction="column">
      <Text $font_weight="500" $font_size="24px" $line_height="32px">
        안녕하세요 😀
        <br />
        개발자 조성민입니다.
      </Text>
      <Gap $height="16px" />
      <Text $font_size="16px" $line_height="24px" $letter_spacing="-0.32px">
        저는 서울시립대학교에 재학 중이며, 학업과 개발을 병행하며 다양한 분야에
        관심을 가지고 있습니다. 특히 개발, 경제, 금융에 큰 흥미를 두고 있으며,
        이에 대한 저의 생각을 블로그에서 공유하고 있습니다.
      </Text>
    </Box>
  );
}
