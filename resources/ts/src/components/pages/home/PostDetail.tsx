import { VFC } from "react";
import { useParams } from "react-router";
import { AspectRatio, Flex, Text, Box, Divider } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

import { UserInfoBox } from "../../molecules/UserInfoBox";
import { Rating } from "../../atoms/button/Rating";
import { homeState } from "../../../store/homeState";
import { ReactionButtons } from "../../molecules/post_detail/ReactionButtons";

type Param = {
  id: string;
};

type Props = {};

export const PostDetail: VFC<Props> = (props) => {
  const {} = props;
  const setTopic = useSetRecoilState(homeState);
  setTopic({ topic: "detail" });
  const { id } = useParams<Param>();

  return (
    <Box mx={5}>
      <Flex>
        <AspectRatio ratio={1 / 1} w="300px">
          <iframe
            src="https://open.spotify.com/embed/track/4X6jKZPHkKLbrcEZu13VXK"
            frameBorder="0"
            allow="encrypted-media"
          />
        </AspectRatio>
        <Flex alignItems="start" flexFlow="column" ml={5} mt="auto">
          <Text fontWeight="bold" fontSize="md">
            時間がない
          </Text>
          <Text fontSize="sm">収録アルバム：愛があるだけ、すべて</Text>
          <Text fontSize="sm">アーティスト：キリンジ</Text>
          <Text fontSize="sm">リリース：2019/10/18</Text>
        </Flex>
      </Flex>
      <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
      <Flex textAlign="left">
        <Box mr={2}>
          <UserInfoBox name="中村 優太" user_title="学生" img="none" />
        </Box>
        <Rating />
      </Flex>
      <Box mt={5} textAlign="left">
        <Text fontSize="lg" fontWeight="bold">
          キリンジ最高！
        </Text>
        <Text fontSize="sm" pr={10} mt={2}>
          「愛をあるだけ、すべて」の中でも一番好きな曲です！
          弓木さんのファンキーなカッティングと高樹さんのコーラスがたまりません！！
          つい何度もリピートして聞いてしまいます。
        </Text>
      </Box>
      <ReactionButtons comment_val={3} like_val={11} />
      <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
    </Box>
  );
};
