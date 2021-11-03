import { memo, VFC } from "react";
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
} from "@chakra-ui/react";

import { MenuContents } from "../../molecules/MenuContents";

type Props = {
    onClose: () => void;
    isOpen: boolean;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
    const { onClose, isOpen } = props;
    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody pl="20px" bg="gray.100">
                        <MenuContents onClose={onClose} />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
});
