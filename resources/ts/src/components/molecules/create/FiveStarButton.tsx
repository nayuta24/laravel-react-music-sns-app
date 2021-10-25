import { useState, VFC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { StarButton } from "../../atoms/button/StarButton";

type Props = {
    rate: number;
    setRate: (val: number) => void;
};

export const FiveStarButton: VFC<Props> = (props) => {
    const { rate, setRate } = props;
    return (
        <Flex flexDirection="column" alignItems="center">
            <Flex mt="10px" mb="50px">
                {[1, 2, 3, 4, 5].map((value) => (
                    <StarButton num={value} rate={rate} setRate={setRate} />
                ))}
            </Flex>
            <Text
                mt="5px"
                mx="auto"
                pr="10px"
                w="30%"
                fontWeight="bold"
                fontSize="25px"
                color="gray.600"
            >
                {rate.toFixed(1)}
            </Text>
        </Flex>
    );
};
