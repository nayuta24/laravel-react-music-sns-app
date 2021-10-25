import { Box, Divider } from "@chakra-ui/react";
import { VFC } from "react";
import { TrackDataType } from "../../../type/api/TrackDataType";
import { DetailBox } from "../detail/DetailBox";
import { MusicDetailBox } from "../MusicDetailBox";

type Props = {
    trackData: TrackDataType;
    rate: number;
    title: string;
    body: string;
};

export const CreateCheck: VFC<Props> = (props) => {
    const { trackData, rate, title, body } = props;
    return (
        <Box>
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
            <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
        </Box>
    );
};
