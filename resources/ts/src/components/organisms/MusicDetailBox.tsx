import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import { VFC } from "react";
import { gradationGreen } from "../atoms/color/gradationGreen";
import { BsQuestionCircle } from "react-icons/bs";
import { ShortText } from "../atoms/typography/ShortText";

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
        <Flex flexDirection={{ sm: "row", base: "column" }}>
            <AspectRatio
                ratio={1 / 1}
                w={{ sm: "50%", base: "100%" }}
                h={{ sm: "50%", base: "40vh" }}
                mx={{ sm: "0", base: "auto" }}
            >
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
            <Flex
                alignItems="start"
                flexFlow="column"
                ml={5}
                mt={{ sm: "auto", base: "3vh" }}
                mb="2%"
                overflow="hidden"
                w={{ sm: "65%", base: "100%" }}
            >
                <ShortText
                    fontWeight="bold"
                    fontSize={{ sm: "25px", base: "lg" }}
                    mb="1vh"
                >
                    {title === undefined ? "楽曲情報が取得できません" : title}
                </ShortText>
                <ShortText fontSize="sm">
                    収録アルバム： {album === undefined ? "???" : album}
                </ShortText>
                <ShortText fontSize="sm">
                    アーティスト：
                    {artist === undefined ? "???" : artist}
                </ShortText>
                <ShortText fontSize="sm">
                    リリース： {release === undefined ? "???" : release}
                </ShortText>
            </Flex>
        </Flex>
    );
};
