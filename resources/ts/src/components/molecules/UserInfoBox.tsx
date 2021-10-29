import { memo, VFC } from "react";
import { Flex, Avatar, Text } from "@chakra-ui/react";
import { ShortText } from "../atoms/typography/ShortText";

type Props = {
    img: string;
    name: string;
    user_title: string;
    pl?: string;
    m?: string;
};

export const UserInfoBox: VFC<Props> = memo((props) => {
    const { img, name, user_title, pl = "0", m } = props;
    return (
        <Flex h="70%" mt="auto" ml="auto" m={m}>
            <Avatar
                bg="gray.400"
                size="sm"
                mr="10px"
                my="auto"
                src={img}
            ></Avatar>
            <Flex
                flexDirection="column"
                my="auto"
                w="100px"
                alignItems="start"
                overflow="hidden"
                textAlign="left"
            >
                <ShortText fontSize="sm" w="100px">
                    {name}
                </ShortText>
                <ShortText fontSize="13px" color="gray">
                    {user_title}
                </ShortText>
            </Flex>
        </Flex>
    );
});
