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
                overflow="hidden"
                w={{ sm: "65%", base: "100%" }}
                h="100%"
                position="relative"
                textAlign="left"
            >
                <Text
                    fontSize={{ sm: "25px", base: "lg" }}
                    fontWeight="bold"
                    mb="1vh"
                >
                    {title === undefined ? "楽曲情報が取得できません" : title}
                </Text>
                <MusicDetailTopics title="収録アルバム" content={album} />
                <MusicDetailTopics title="アーティスト" content={artist} />
                <MusicDetailTopics title="リリース" content={release} />
            </Flex>
        </Flex>
    );
};

// 内部的に使用するコンポーネント
// 曲の各詳細情報をコンポーネント化
type MusicDetailTopicsType = {
    title: string;
    content: string | undefined;
};

const MusicDetailTopics: VFC<MusicDetailTopicsType> = (props) => {
    const { title, content } = props;

    return (
        <>
            <Text
                fontSize={{ sm: "md", base: "xs" }}
                fontWeight="bold"
                color="gray.600"
            >
                {title}
            </Text>
            <Text
                fontSize={{ sm: "sm", base: "12px" }}
                mb="1vh"
                color="gray.600"
            >
                {content === undefined ? "???" : content}
            </Text>
        </>
    );
};
