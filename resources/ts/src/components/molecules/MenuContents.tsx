import { memo, useEffect, VFC } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useHistory } from "react-router";

import { useGetMe } from "../../hooks/api/useGetMe";
import { useLogout } from "../../hooks/login/useLogout";
import { MenuButton } from "../atoms/button/MenuButton";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { UserInfoBox } from "./UserInfoBox";

type Props = {
    onClose?: () => void | undefined;
};

export const MenuContents: VFC<Props> = memo((props) => {
    const { onClose } = props;

    const history = useHistory();
    // ユーザーの情報を取得
    const { getMe, apiMe } = useGetMe();
    const { logout } = useLogout();

    useEffect(() => getMe(), [getMe]);

    // 画面遷移(＋Drawerが開いてたら閉める)
    const transTo = (
        path: "/" | "/follow_post" | "/popular" | "/create_post"
    ) => {
        history.push(path);
        onClose !== undefined && onClose();
    };

    const onRecent = () => {
        transTo("/");
    };
    const onFollowPost = () => {
        transTo("/follow_post");
    };
    const onPopular = () => {
        transTo("/popular");
    };
    const onCreate = () => {
        transTo("/create_post");
    };

    const onClickLogout = () => {
        logout();
    };

    return (
        <Flex h="100vh" textAlign="right" flexDirection="column">
            <Box mr="auto" my="20px">
                <Text
                    as="h1"
                    fontSize="40px"
                    bgGradient="linear(to-tl, green, #c4de71)"
                    bgClip="text"
                    fontWeight="bold"
                    onClick={onRecent}
                    cursor="pointer"
                >
                    Bebop!
                </Text>
            </Box>
            <Flex flexFlow="column" alignItems="start">
                <MenuButton onClick={onRecent}>最新の投稿</MenuButton>
                <MenuButton onClick={onFollowPost} disabled={true}>
                    フォロー(準備中)
                </MenuButton>
                <MenuButton onClick={onPopular} disabled={true}>
                    人気の投稿(準備中)
                </MenuButton>
            </Flex>
            <Box mt="auto" mx="auto">
                <PrimaryButton w="130px" onClick={onCreate}>
                    投稿
                </PrimaryButton>
            </Box>
            <Box mt="auto" mb="15%" textAlign="left">
                {/* <UserInfoBox img="" name={apiMe.name} user_title="" pl="30px" /> */}
                <UserInfoBox img="" name={"ビルド前に直せ"} user_title="" />
                <Button
                    fontSize={5}
                    w="70px"
                    h="25px"
                    colorScheme="red"
                    mt="5px"
                    _focus={{ outline: "none" }}
                    onClick={onClickLogout}
                >
                    ログアウト
                </Button>
            </Box>
        </Flex>
    );
});
