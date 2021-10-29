import { Box, useDisclosure } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

import { HomePostBox } from "../organisms/home/HomePostBox";
import { MenuBar } from "../organisms/home/MenuBar";

type Props = {
    children: ReactNode;
};

export const HomeLayout: VFC<Props> = memo((props) => {
    const { children } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box w="100%">
            <MenuBar isOpen={isOpen} onClose={onClose}>
                <HomePostBox onOpen={onOpen}>{children}</HomePostBox>
            </MenuBar>
        </Box>
    );
});
