import { Box, Divider, Flex } from "@chakra-ui/react";
import { VFC } from "react";
import { usePostCreate } from "../../../hooks/api/usePostCreate";
import { TrackDataType } from "../../../type/api/TrackDataType";
import { CreateTransButton } from "../../atoms/button/CreateTransButton";
import { DetailBox } from "../detail/DetailBox";
import { MusicDetailBox } from "../MusicDetailBox";

type Props = {
    trackData: TrackDataType;
    rate: number;
    title: string;
    body: string;
    trackId: string | undefined;
    goRate: () => void;
    setTransAlert: (bool: boolean) => void;
};

export const CreateCheck: VFC<Props> = (props) => {
    const { trackData, rate, title, body, goRate, trackId, setTransAlert } =
        props;

    // 現在の内容で確定して投稿する
    const { postCreate } = usePostCreate();
    const onConfirm = () => {
        postCreate(title, body, rate, trackId, setTransAlert);
    };

    return (
        <Flex flexDirection="column" mt="30px">
            <MusicDetailBox
                id={trackData?.id}
                title={trackData?.title}
                album={trackData?.album}
                artist={trackData?.artist}
                release={trackData?.release}
            />
            <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
            <DetailBox
                userName=""
                userTitle=""
                userImg=""
                rating={rate}
                title={title}
                body={body}
            />
            <Divider orientation="horizontal" w="100%" mt={5} />
            <Flex ml="auto">
                <Box>
                    <CreateTransButton onClick={goRate} mt="30px" text="戻る" />
                </Box>

                <Box w="30px" />
                <Box>
                    <CreateTransButton
                        onClick={onConfirm}
                        mt="30px"
                        text="この内容で投稿する"
                    />
                </Box>
            </Flex>
        </Flex>
    );
};
