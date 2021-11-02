import { memo, VFC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { CommentButton } from "../../atoms/button/CommentButton";
import { LikeButton } from "../../atoms/button/LikeButton";
import { ShareButton } from "../../atoms/button/ShareButton";

type Props = {
  comment_val: number;
  like_val: number;
};

export const ReactionButtons: VFC<Props> = memo((props) => {
  const { comment_val, like_val } = props;
  return (
    <Flex justifyContent="center" w="80%" mt={5}>
      <Box mr="auto">
        <CommentButton value={comment_val} />
      </Box>
      <Box mx="auto">
        <LikeButton value={like_val} />
      </Box>
      <Box ml="auto">
        <ShareButton />
      </Box>
    </Flex>
  );
});
