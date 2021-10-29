import { Text, Flex, IconButton } from "@chakra-ui/react";
import { HiShare } from "react-icons/hi";

export const ShareButton = () => {
    return (
        <Flex>
            <IconButton
                aria-label="like"
                icon={<HiShare size="23px" />}
                size="0px"
                color="gray"
                bg="none"
                _focus={{ outline: "none" }}
            />
            <Text fontSize="15px" mr="5px"></Text>
        </Flex>
    );
};
