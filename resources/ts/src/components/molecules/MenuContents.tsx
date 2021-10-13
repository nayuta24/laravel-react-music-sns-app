import { Box, Flex, Text } from "@chakra-ui/react";
import { memo } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { MenuButton } from "../atoms/button/MenuButton";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { UserInfoBox } from "./UserInfoBox";

export const MenuContents = memo(() => {
  const history = useHistory();
  const onRecent = () => {
    history.push("/home");
  };
  const onFollowPost = () => {
    history.push("/home/follow_post");
  };
  const onPopular = () => {
    history.push("/home/popular");
  };
  return (
    <Flex flexFlow="column" ml="20px" alignItems="start" pr="80px">
      <Link to="/home">
        <Text
          as="h1"
          fontSize="40px"
          bgGradient="linear(to-tl, green, #c4de71)"
          bgClip="text"
          fontWeight="bold"
          my="20px"
          ml="10px"
        >
          Bebop!
        </Text>
      </Link>

      <MenuButton w="100%" onClick={onRecent}>
        最新の投稿
      </MenuButton>
      <MenuButton w="100%" onClick={onFollowPost}>
        フォロー
      </MenuButton>
      <MenuButton w="100%" onClick={onPopular}>
        人気の投稿
      </MenuButton>
      <Flex mt="300px" ml="30px">
        <PrimaryButton w="130px">投稿</PrimaryButton>
      </Flex>

      <Box mt="100%" w="100%">
        <UserInfoBox
          img="https://source.unsplash.com/brFsZ7qszSY"
          name="中村 優太"
          user_title="学生"
          pl="30px"
        />
      </Box>
    </Flex>
  );
});
