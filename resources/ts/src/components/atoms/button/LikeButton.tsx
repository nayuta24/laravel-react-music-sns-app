import { VFC } from "react";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { HiHeart } from "react-icons/hi";

type Props = {
    value: number;
};

export const LikeButton: VFC<Props> = (props) => {
    const { value } = props;
    return (
        <Flex>
            <IconButton
                aria-label="like"
                icon={<HiHeart size="25px" />}
                size="0px"
                color="gray"
                bg="none"
                _focus={{ outline: "none" }}
            />
            <Text fontSize="15px" color="gray" ml="5px" pt="1.5px">
                {value}
            </Text>
        </Flex>
    );
};
