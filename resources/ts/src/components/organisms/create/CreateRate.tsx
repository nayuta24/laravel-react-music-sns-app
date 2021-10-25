import { Box, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { VFC } from "react";
import { GoButton } from "../../atoms/button/GoButton";
import { BackButton } from "../../atoms/button/BackButton";
import { FiveStarButton } from "../../molecules/create/FiveStarButton";

type Props = {
    goTrackInfo: () => void;
    goCheck: () => void;
    onChangeRate: (val: number) => void;
    onChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeBody: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rate: number;
    title: string;
    body: string;
    blockRates: boolean;
};

export const CreateRate: VFC<Props> = (props) => {
    const {
        goTrackInfo,
        goCheck,
        onChangeRate,
        onChangeTitle,
        onChangeBody,
        rate,
        title,
        body,
        blockRates,
    } = props;

    return (
        <Flex flexDirection="column" mt="30px">
            <Flex flexDirection="column">
                <Text
                    fontSize="lg"
                    ml="10px"
                    fontWeight="semibold"
                    color="gray.700"
                >
                    ① 評価
                </Text>
                <Box textAlign="center">
                    <FiveStarButton rate={rate} setRate={onChangeRate} />
                </Box>
            </Flex>
            <Box mt="30px">
                <Text
                    fontSize="lg"
                    ml="10px"
                    fontWeight="semibold"
                    color="gray.700"
                >
                    ① タイトル（30字以内）
                </Text>
                <Input
                    type="text"
                    w="100%"
                    mt="10px"
                    onChange={onChangeTitle}
                    value={title}
                />
            </Box>
            <Box mt="30px">
                <Text
                    fontSize="lg"
                    ml="10px"
                    h="auto"
                    fontWeight="semibold"
                    color="gray.700"
                >
                    ① 本文（500字以内）
                </Text>
                <Textarea
                    type="text"
                    w="100%"
                    h="100px"
                    mt="10px"
                    onChange={onChangeBody}
                    value={body}
                />
            </Box>
            <Flex ml="auto">
                <Box>
                    <BackButton onClick={goTrackInfo} mt="30px" />
                </Box>
                <Box w="30px" />
                <Box>
                    <GoButton
                        onClick={goCheck}
                        mt="30px"
                        isDisabled={blockRates}
                    />
                </Box>
            </Flex>
        </Flex>
    );
};