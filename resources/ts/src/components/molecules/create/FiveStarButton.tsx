import { VFC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { StarButton } from "../../atoms/button/StarButton";

type Props = {
    rate: number;
    setRate: (val: number) => void;
};

export const FiveStarButton: VFC<Props> = (props) => {
    const { rate, setRate } = props;
    return (
        <Flex flexDirection="column" alignItems="center">
            <Flex mt="10px" mb={{ sm: "50px", base: "45px" }}>
                {[1, 2, 3, 4, 5].map((value) => (
                    <StarButton num={value} rate={rate} setRate={setRate} />
                ))}
            </Flex>
            <Text
                mt={{ sm: "5px", base: "0" }}
                mx="auto"
                pr={{ sm: "10px", base: "0" }}
                pl={{ sm: "0", base: "5px" }}
                w="30%"
                fontWeight="bold"
                fontSize={{ sm: "25px", base: "20px" }}
                color="gray.600"
            >
                {rate.toFixed(1)}
            </Text>
        </Flex>
    );
};
