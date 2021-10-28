import { Box, Flex, Text } from "@chakra-ui/react";
import { VFC } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

type Props = {
    rating: number;
};

export const Rating: VFC<Props> = (props) => {
    const { rating } = props;
    const starSize = "25px";
    const gap = "1px";
    // 小数点第一位をつける
    const fixedRating = rating.toFixed(1);

    return (
        <Flex>
            {[1, 2, 3, 4, 5].map((value) =>
                rating >= value ? (
                    <Box mx={gap}>
                        <BsStarFill fontSize={starSize} color="orange" />
                    </Box>
                ) : rating >= value - 0.5 ? (
                    <Box mx={gap}>
                        <BsStarHalf fontSize={starSize} color="orange" />
                    </Box>
                ) : (
                    <Box mx={gap}>
                        <BsStar fontSize={starSize} color="orange" />
                    </Box>
                )
            )}
            <Text ml="10px" pt="2px" fontWeight="semibold" color="gray.600">
                {fixedRating}
            </Text>
        </Flex>
    );
};
