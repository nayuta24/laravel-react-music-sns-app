import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { memo, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useGetMe } from "../../hooks/api/useGetMe";
import { useLogout } from "../../hooks/login/useLogout";
import { MenuButton } from "../atoms/button/MenuButton";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { UserInfoBox } from "./UserInfoBox";

export const MenuContents = memo(() => {
    const history = useHistory();
    // ユーザーの情報を取得
    const { getMe, apiMe } = useGetMe();
    const { logout } = useLogout();

    useEffect(() => getMe(), [getMe]);

    const onRecent = () => {
        history.push("/");
    };
    const onFollowPost = () => {
        history.push("/follow_post");
    };
    const onPopular = () => {
        history.push("/popular");
    };

    const onCreate = () => {
        history.push("/create_post");
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
                <PrimaryButton w="130px" onClick={onCreate}>
                    投稿
                </PrimaryButton>
            </Flex>

            <Box mt="25vh" w="100%">
                <UserInfoBox
                    img="https://source.unsplash.com/brFsZ7qszSY"
                    name={apiMe.name}
                    user_title=""
                    pl="30px"
                />
                <Button
                    fontSize={5}
                    w="80px"
                    h="25px"
                    colorScheme="red"
                    mt="15px"
                    _focus={{ outline: "none" }}
                    onClick={onClickLogout}
                >
                    ログアウト
                </Button>
            </Box>
        </Flex>
    );
});
