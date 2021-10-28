import { Button } from "@chakra-ui/button";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { VFC } from "react";

type Props = {
    onClick: () => void;
    mt?: string;
    isDisabled?: boolean;
    text: string;
};

export const CreateTransButton: VFC<Props> = (props) => {
    const { onClick, mt = "none", isDisabled = false, text } = props;
    return (
        <Button
            mt={mt}
            w="auto"
            h="30px"
            ml="auto"
            bg="orange.300"
            color="white"
            onClick={onClick}
            fontSize="15px"
            _focus={{ outline: "none" }}
            isDisabled={isDisabled}
        >
            {text}
        </Button>
    );
};
