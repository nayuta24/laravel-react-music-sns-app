import { Box, Text, Input } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    inputType?: string;
    fontSize?: string;
    fontWeight?: string;
};

export const Form: VFC<Props> = (props) => {
    const {
        onChange,
        value,
        children,
        inputType = "text",
        fontSize = "sm",
        fontWeight = "normal",
    } = props;

    return (
        <Box textAlign="start" w="100%">
            <Text
                ml={1}
                mb={1}
                fontSize={fontSize}
                fontWeight={fontWeight}
                color="gray.700"
            >
                {children}
            </Text>
            <Input type={inputType} onChange={onChange} value={value} />
        </Box>
    );
};
