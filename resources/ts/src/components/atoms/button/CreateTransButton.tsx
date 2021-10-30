import { Button } from "@chakra-ui/button";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { VFC } from "react";

type Props = {
    onClick: () => void;
    mt?: string | { md?: string; sm?: string; base?: string };
    isDisabled?: boolean;
    text: string;
};

export const CreateTransButton: VFC<Props> = (props) => {
    const { onClick, mt = "none", isDisabled = false, text } = props;
    return (
        <Button
            mt={mt}
            w="auto"
            h={{ sm: "30px", base: "25px" }}
            ml="auto"
            bg="orange.300"
            color="white"
            onClick={onClick}
            fontSize={{ sm: "15px", base: "12px" }}
            _focus={{ outline: "none" }}
            isDisabled={isDisabled}
        >
            {text}
        </Button>
    );
};
