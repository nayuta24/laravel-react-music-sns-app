import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import { VFC } from "react";
import { gradationGreen } from "../atoms/color/gradationGreen";
import { BsQuestionCircle } from "react-icons/bs";

type Props = {
    id: string | undefined;
    title: string | undefined;
    album: string | undefined;
    artist: string | undefined;
    release: string | undefined;
};

export const MusicDetailBox: VFC<Props> = (props) => {
    const {
        id = undefined,
        title = undefined,
        album = undefined,
        artist = undefined,
        release = undefined,
    } = props;
    return (
        <Flex>
            <AspectRatio ratio={1 / 1} boxSize="40%">
                {id === undefined ? (
                    <Box bgGradient={gradationGreen}>
                        <BsQuestionCircle color="gray" fontSize="13vh" />
                    </Box>
                ) : (
                    <iframe
                        src={`https://open.spotify.com/embed/track/${id}`}
                        frameBorder="0"
                        allow="encrypted-media"
                    />
                )}
            </AspectRatio>
            <Flex alignItems="start" flexFlow="column" ml={5} mt="auto" mb="2%">
                <Text fontWeight="bold" fontSize="40px" mb="2%">
                    {title === undefined
                        ? "楽曲情報が取得できていません"
                        : title}
                </Text>
                <Text fontSize="sm">
                    収録アルバム： {album === undefined ? "???" : album}
                </Text>
                <Text fontSize="sm">
                    アーティスト：
                    {artist === undefined ? "???" : artist}
                </Text>
                <Text fontSize="sm">
                    リリース： {release === undefined ? "???" : release}
                </Text>
            </Flex>
        </Flex>
    );
};
