import { memo, VFC } from "react";
import { Flex, Avatar, Text } from "@chakra-ui/react";

type Props = {
  img: string;
  name: string;
  user_title: string;
  pl?: string;
};

export const UserInfoBox: VFC<Props> = memo((props) => {
  const { img, name, user_title, pl = "0" } = props;
  return (
    <Flex h="70%" mt="auto" ml="auto">
      <Avatar bg="gray.400" size="sm" mr="10px" my="auto" src={img}></Avatar>
      <Flex flexDirection="column" my="auto" w="100px" alignItems="start">
        <Text fontSize="sm" w="100px" textAlign="left">
          {name}
        </Text>
        <Text fontSize="13px" color="gray">
          {user_title}
        </Text>
      </Flex>
    </Flex>
  );
});
