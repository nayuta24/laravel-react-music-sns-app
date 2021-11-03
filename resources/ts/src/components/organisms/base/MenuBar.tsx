import { Box, Flex } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
import { MenuContents } from "../../molecules/MenuContents";
import { MenuDrawer } from "./MenuDrawer";

type Props = {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
};

export const MenuBar: VFC<Props> = memo((props) => {
    const { children, isOpen, onClose } = props;

    return (
        <Box>
            {/* メニューバー */}
            <Flex mx="auto" w="100%" justifyContent="center">
                <Box h="100vh" pr="3%" display={{ base: "none", md: "inline" }}>
                    <MenuContents />
                </Box>
                {children}
            </Flex>
            <MenuDrawer isOpen={isOpen} onClose={onClose} />
        </Box>
    );
});
