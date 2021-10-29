import { Box, Flex, Text } from "@chakra-ui/react";
import { VFC } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

type Props = {
    rating: number;
};

export const SmRating: VFC<Props> = (props) => {
    const { rating } = props;
    const starSize = "22px";
    const gap = "1px";

    let fixedRating = rating.toString();
    if (fixedRating.length === 1) {
        fixedRating = fixedRating + ".0";
    }

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
        </Flex>
    );
};
