import { memo, useEffect, VFC } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useHistory } from "react-router";

import { useLogout } from "../../hooks/login/useLogout";
import { MenuButton } from "../atoms/button/MenuButton";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { UserInfoBox } from "./UserInfoBox";
import { useRecoilValue } from "recoil";
import { meState } from "../../store/meState";

type Props = {
    onClose?: () => void | undefined;
};

export const MenuContents: VFC<Props> = memo((props) => {
    const { onClose } = props;

    const history = useHistory();
    // ユーザーの情報を取得
    const me = useRecoilValue(meState);
    const { logout } = useLogout();

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
                <UserInfoBox img="" name={me.name} user_title="" pl="30px" />
                <Button
                    fontSize={{ sm: "10px", base: "5px" }}
                    w="auto"
                    h="40%"
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
