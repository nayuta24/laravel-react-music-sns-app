import { memo, VFC } from "react";
import { Flex, Avatar, useDisclosure } from "@chakra-ui/react";

import { ShortText } from "../atoms/typography/ShortText";
import { UserData } from "../../type/api/UserDataType";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { meState } from "../../store/meState";

type Props = {
    user: UserData;
    m?: string;
};

export const UserInfoBox: VFC<Props> = memo((props) => {
    const { user, m } = props;
    const { id, name, image, job } = user;
    const me = useRecoilValue(meState);

    const history = useHistory();

    const onClick = () => {
        id === me.id
            ? history.push("/profile/me")
            : history.push(`/profile/${id}`);
    };

    return (
        <Flex
            h={{ sm: "40px", base: "30px" }}
            mt="auto"
            ml="auto"
            m={m}
            onClick={onClick}
            cursor="pointer"
            _hover={{ bg: "gray.200" }}
        >
            <Avatar
                bg="gray.400"
                size="sm"
                mr="10px"
                my="auto"
                src={image}
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
                    {job}
                </ShortText>
            </Flex>
        </Flex>
    );
});
