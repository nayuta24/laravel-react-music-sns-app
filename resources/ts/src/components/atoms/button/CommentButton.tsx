import { VFC } from "react";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { HiOutlineChat } from "react-icons/hi";

type Props = {
    value: number;
};

export const CommentButton: VFC<Props> = (props) => {
    const { value } = props;
    return (
        <Flex>
            <HiOutlineChat size="24px" color="gray" />
            <Text fontSize="15px" color="gray" ml="5px" pt="1.5px">
                {value}
            </Text>
        </Flex>
    );
};
