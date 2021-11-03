import { Box, useDisclosure } from "@chakra-ui/react";
import { memo, ReactNode, useEffect, VFC } from "react";
import { useGetMe } from "../../hooks/api/useGetMe";

import { HomePostBox } from "../organisms/base/HomePostBox";
import { MenuBar } from "../organisms/base/MenuBar";

type Props = {
    children: ReactNode;
};

export const HomeLayout: VFC<Props> = memo((props) => {
    const { children } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    // ログインしたユーザーの情報を取得してグローバルStateで保持
    const { getMe } = useGetMe();
    useEffect(() => getMe(), [getMe]);

    return (
        <Box w="100%">
            <MenuBar isOpen={isOpen} onClose={onClose}>
                <HomePostBox onOpen={onOpen}>{children}</HomePostBox>
            </MenuBar>
        </Box>
    );
});
