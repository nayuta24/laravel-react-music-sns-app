import { Button } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
    w?: string;
    disabled?: boolean;
    onClick?: () => void;
    mt?: string;
};

export const PrimaryButton: VFC<Props> = (props) => {
    const { children, w = "100%", onClick, disabled, mt = "none" } = props;
    return (
        <Button
            onClick={onClick}
            color="white"
            bgGradient="linear(to-tl, green, #c4de71)"
            _focus={{ outline: "none" }}
            _hover={{ opacity: 0.8, cursor: "pointer" }}
            disabled={disabled}
            w={w}
            mt={mt}
        >
            {children}
        </Button>
    );
};
