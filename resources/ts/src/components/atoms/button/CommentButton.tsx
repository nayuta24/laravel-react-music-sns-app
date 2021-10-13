import { VFC } from "react";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

type Props = {
  value: number;
};

export const CommentButton: VFC<Props> = (props) => {
  const { value } = props;
  return (
    <Flex>
      <IconButton
        aria-label="comment"
        icon={<ChatIcon />}
        size="0px"
        color="gray"
        bg="none"
      />
      <Text fontSize="15px" color="gray" ml="5px">
        {value}
      </Text>
    </Flex>
  );
};
