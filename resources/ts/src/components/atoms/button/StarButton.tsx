import { useState, VFC } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Box, Flex } from "@chakra-ui/react";

type Props = {
    num: number;
    rate: number;
    setRate: (val: number) => void;
};

export const StarButton: VFC<Props> = (props) => {
    const { num, rate, setRate } = props;

    const onClickHalf = () => {
        setRate(num - 0.5);
    };
    const onClickFill = () => {
        setRate(num);
    };

    const StarSize = "50px";
    const starGap = "60px";

    return (
        <Box>
            {/* 星のアイコンを表示、zIndexによってボタンと重ねる  */}
            <Flex
                boxSize="50px"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                zIndex="1"
            >
                {rate >= num ? (
                    <BsStarFill fontSize={StarSize} color="orange" />
                ) : rate >= num - 0.5 ? (
                    <BsStarHalf fontSize={StarSize} color="orange" />
                ) : (
                    <BsStar fontSize={StarSize} color="orange" />
                )}
            </Flex>
            {/* 星のアイコンの上に見えないボタンを設置 */}
            <Flex boxSize="50px" position="absolute" zIndex="2">
                {/* 左半分のボタン */}
                <button
                    onClick={onClickHalf}
                    style={{
                        borderRadius: "0",
                        height: "100%",
                        width: "50%",
                    }}
                ></button>
                {/* 右半分のボタン */}
                <button
                    onClick={onClickFill}
                    style={{
                        borderRadius: "0",
                        height: "100%",
                        width: "50%",
                    }}
                ></button>
            </Flex>
            <Box w={starGap} />
        </Box>
    );
};
