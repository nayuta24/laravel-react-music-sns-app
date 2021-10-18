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
            {/* 要素を横並びに */}
            <Flex spacing="none">
                {/* メニューバー */}
                <Flex mx="auto" w="100%">
                    <Box
                        w="15%"
                        h="100vh"
                        display={{ base: "none", md: "inline" }}
                        pr="auto"
                        ml="18%"
                    >
                        <MenuContents />
                    </Box>
                    {children}
                </Flex>
            </Flex>
            <MenuDrawer isOpen={isOpen} onClose={onClose} />
        </Box>
    );
});
