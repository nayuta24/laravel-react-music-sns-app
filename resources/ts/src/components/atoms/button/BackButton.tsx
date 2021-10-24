import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { VFC } from "react";

type Props = {
    onClick: () => void;
    mt?: string;
};

export const BackButton: VFC<Props> = (props) => {
    const { onClick, mt = "none" } = props;
    return (
        <Button
            mt={mt}
            w="50px"
            h="30px"
            ml="auto"
            bg="orange.300"
            color="white"
            onClick={onClick}
            fontSize="15px"
        >
            戻る
        </Button>
    );
};
