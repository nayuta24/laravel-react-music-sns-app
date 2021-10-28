import { Box, Divider, Flex } from "@chakra-ui/react";
import { VFC } from "react";
import { TrackDataType } from "../../../type/api/TrackDataType";
import { CreateTransButton } from "../../atoms/button/CreateTransButton";
import { DetailBox } from "../detail/DetailBox";
import { MusicDetailBox } from "../MusicDetailBox";

type Props = {
    trackData: TrackDataType;
    rate: number;
    title: string;
    body: string;
    goRate: () => void;
};

export const CreateCheck: VFC<Props> = (props) => {
    const { trackData, rate, title, body, goRate } = props;

    // 現在の内容で確定して投稿する
    const onConfirm = () => {};

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
                userName="ゆうた"
                userTitle="学生"
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
