import { Box, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useState, VFC } from "react";
import { GoButton } from "../../atoms/button/GoButton";
import { BackButton } from "../../atoms/button/BackButton";

type Props = {
    goTrackInfo: () => void;
    goCheck: () => void;
};

export const CreateRate: VFC<Props> = (props) => {
    const { goTrackInfo, goCheck } = props;

    return (
        <Flex flexDirection="column" mt="30px">
            <Flex flexDirection="column">
                <Text fontSize="lg" ml="10px">
                    ① 評価
                </Text>
                <Text
                    fontSize="50px"
                    ml="10px"
                    mx="auto"
                    fontWeight="light"
                    color="gray.400"
                >
                    ☆☆☆☆☆
                </Text>
            </Flex>
            <Box mt="30px">
                <Text fontSize="lg" ml="10px">
                    ① タイトル
                </Text>
                <Input type="text" w="100%" mt="10px" />
            </Box>
            <Box mt="30px">
                <Text fontSize="lg" ml="10px" h="auto">
                    ① 本文
                </Text>
                <Textarea type="text" w="100%" h="100px" mt="10px" />
            </Box>
            <Flex ml="auto">
                <Box>
                    <BackButton onClick={goTrackInfo} mt="30px" />
                </Box>
                <Box w="30px" />
                <Box>
                    <GoButton onClick={goCheck} mt="30px" />
                </Box>
            </Flex>
        </Flex>
    );
};
