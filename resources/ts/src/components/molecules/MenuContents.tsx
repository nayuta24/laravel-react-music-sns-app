import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { memo } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/login/useLogout";
import { MenuButton } from "../atoms/button/MenuButton";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { UserInfoBox } from "./UserInfoBox";

export const MenuContents = memo(() => {
    const history = useHistory();
    const { logout } = useLogout();
    const onRecent = () => {
        history.push("/");
    };
    const onFollowPost = () => {
        history.push("/follow_post");
    };
    const onPopular = () => {
        history.push("/popular");
    };

    const onClickLogout = () => {
        logout();
    };
    return (
        <Flex flexFlow="column" ml="20px" alignItems="start" pr="80px">
            <Link to="/">
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
            <MenuButton w="100%" onClick={onFollowPost} disabled={true}>
                フォロー
            </MenuButton>
            <MenuButton w="100%" onClick={onPopular} disabled={true}>
                人気の投稿
            </MenuButton>
            <Flex mt="25vh" ml="30px">
                <PrimaryButton w="130px">投稿</PrimaryButton>
            </Flex>

            <Box mt="25vh" w="100%" onClick={onClickLogout}>
                <UserInfoBox
                    img="https://source.unsplash.com/brFsZ7qszSY"
                    name="中村 優太"
                    user_title="学生"
                    pl="30px"
                />
                <Button
                    fontSize={5}
                    w="80px"
                    h="25px"
                    colorScheme="red"
                    mt="15px"
                >
                    ログアウト
                </Button>
            </Box>
        </Flex>
    );
});
