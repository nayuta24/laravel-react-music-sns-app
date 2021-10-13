import { memo, VFC } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { CardMusicBox } from "../../../molecules/post_card/CardMusicBox";
import { CardComment } from "../../../molecules/post_card/CardComment";
import { Rating } from "../../../atoms/button/Rating";
import { CardReactionButtons } from "../../../molecules/post_card/CardReactionButtons";
import { UserInfoBox } from "../../../molecules/UserInfoBox";
import { CardFrame } from "../../../atoms/frame/CardFrame";
import { useHistory } from "react-router";
import { PostsDataType } from "../../../../type/api/PostsDataType";

type Props = {
  post: PostsDataType;
};

export const PostCard: VFC<Props> = memo((props) => {
  const { post } = props;
  const { user, track, review, reaction, id } = post;
  const history = useHistory();
  const onClickCard = () => {
    history.push(`/home/post/${id}`);
  };

  return (
    <CardFrame mb="1.5%" onClick={onClickCard}>
      {/* 曲情報 */}
      <CardMusicBox img={track.img} title={track.title} artist={track.artist} />
      <Flex
        w="70%"
        h="100%"
        mr="auto"
        flexFlow="column"
        textAlign="left"
        ml="5%"
      >
        {/* コメント */}
        <CardComment title={review.title} body={review.body} />
        <Flex mt="auto">
          <Box w="50%">
            {/* 評価 */}
            <Rating />
            {/* 投稿へのコメント、いいねなど */}
            <CardReactionButtons
              comment_val={reaction.comment_val}
              like_val={reaction.like_val}
            />
          </Box>
          {/* コメントしたユーザー */}
          <UserInfoBox
            img={user.img}
            name={user.name}
            user_title={user.job}
            pl="8%"
          />
        </Flex>
      </Flex>
    </CardFrame>
  );
});
