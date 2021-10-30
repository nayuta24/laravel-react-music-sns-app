import { Box, Flex, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

type Props = {
    rating: number;
    isRateDisable?: boolean;
};

export const Rating: VFC<Props> = memo((props) => {
    const { rating, isRateDisable = false } = props;
    const starSize = "23px";
    const gap = "1px";

    let fixedRating = rating.toString();
    if (fixedRating.length === 1) {
        fixedRating = fixedRating + ".0";
    }

    return (
        <Flex>
            {[1, 2, 3, 4, 5].map((value) =>
                rating >= value ? (
                    <Box mx={gap} key={value}>
                        <BsStarFill fontSize={starSize} color="orange" />
                    </Box>
                ) : rating >= value - 0.5 ? (
                    <Box mx={gap} key={value}>
                        <BsStarHalf fontSize={starSize} color="orange" />
                    </Box>
                ) : (
                    <Box mx={gap} key={value}>
                        <BsStar fontSize={starSize} color="orange" />
                    </Box>
                )
            )}
            {isRateDisable || (
                <Text ml="10px" pt="2px" fontWeight="semibold" color="gray.600">
                    {fixedRating}
                </Text>
            )}
        </Flex>
    );
});
