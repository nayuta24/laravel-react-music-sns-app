import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

import { HomePostBox } from "../organisms/Home/HomePostBox";
import { MenuBar } from "../organisms/Home/MenuBar";

type Props = {
  children: ReactNode;
};

export const HomeLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Box mx="auto">
        <MenuBar isOpen={isOpen} onClose={onClose}>
          <HomePostBox onOpen={onOpen}>{children}</HomePostBox>
        </MenuBar>
      </Box>
    </Flex>
  );
});
