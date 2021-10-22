import { Box, Text, Input } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    inputType?: string;
};

export const LoginForm: VFC<Props> = (props) => {
    const { onChange, value, children, inputType = "text" } = props;

    return (
        <Box textAlign="start" h="80px">
            <Text ml={1} mb={1} fontSize="sm">
                {children}
            </Text>
            <Input type={inputType} onChange={onChange} value={value} />
        </Box>
    );
};
