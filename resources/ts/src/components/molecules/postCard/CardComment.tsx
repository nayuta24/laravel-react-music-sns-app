import { memo, VFC } from "react";
import { Box, Text } from "@chakra-ui/react";
import { ShortText } from "../../atoms/typography/ShortText";

type Props = {
    title: string;
    body: string;
};

export const CardComment: VFC<Props> = memo((props) => {
    const { title, body } = props;

    return (
        <Box
            h={{ sm: "19vh", base: "32vh" }}
            w="100%"
            py="1%"
            pl="4%"
            my="auto"
            overflow="hidden"
        >
            <ShortText
                fontSize={{ sm: "20px", base: "18px" }}
                fontWeight="bold"
            >
                {title}
            </ShortText>
            <Text fontSize={{ sm: "md", base: "15px" }} mt="2%">
                {body}
            </Text>
        </Box>
    );
});
