import { Flex } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { LikeButton } from "../../atoms/button/LikeButton";
import { ShareButton } from "../../atoms/button/ShareButton";
import { CommentButton } from "../../atoms/button/CommentButton";

type Props = {
  comment_val: number;
  like_val: number;
};

export const CardReactionButtons: VFC<Props> = memo((props) => {
  const { comment_val, like_val } = props;

  return (
    <Flex mt="2%">
      <Flex w="30%" mr="auto">
        <CommentButton value={comment_val} />
      </Flex>
      <Flex w="30%" mr="auto">
        <LikeButton value={like_val} />
      </Flex>
      <Flex w="30%" ml="auto">
        <ShareButton />
      </Flex>
    </Flex>
  );
});
