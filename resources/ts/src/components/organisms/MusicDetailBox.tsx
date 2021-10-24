import { AspectRatio, Flex, Text } from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
    id: string;
    title: string;
    album: string;
    artist: string;
    release: string;
};

export const MusicDetailBox: VFC<Props> = (props) => {
    const { id, title = "", album = "", artist = "", release = "" } = props;
    return (
        <Flex>
            <AspectRatio ratio={1 / 1} w="300px">
                <iframe src={id} frameBorder="0" allow="encrypted-media" />
            </AspectRatio>
            <Flex alignItems="start" flexFlow="column" ml={5} mt="auto">
                <Text fontWeight="bold" fontSize="md">
                    {title}
                </Text>
                <Text fontSize="sm">収録アルバム：{album}</Text>
                <Text fontSize="sm">アーティスト：{artist}</Text>
                <Text fontSize="sm">リリース：{release}</Text>
            </Flex>
        </Flex>
    );
};
