import { Flex } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
    mb: string;
    onClick?: () => void;
};

export const CardFrame: VFC<Props> = memo((props) => {
    const { children, mb, onClick } = props;

    return (
        <Flex
            w="98%"
            h={{ sm: "33vh", base: "90vh" }}
            bg="white"
            borderRadius="10px"
            px={{ sm: "30px", base: "25px" }}
            py={{ sm: "15px", base: "5px" }}
            shadow="md"
            mb={mb}
            _hover={{ cursor: "pointer", opacity: 0.8 }}
            onClick={onClick}
            flexDirection={{ sm: "row", base: "column" }}
        >
            {children}
        </Flex>
    );
});
