import { VFC } from "react";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { GoHeart } from "react-icons/go";

type Props = {
  value: number;
};

export const LikeButton: VFC<Props> = (props) => {
  const { value } = props;
  return (
    <Flex>
      <IconButton
        aria-label="like"
        icon={<GoHeart size="27px" />}
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
