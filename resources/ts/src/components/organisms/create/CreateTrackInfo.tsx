import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState, VFC } from "react";
import { gradationGreen } from "../../atoms/color/gradationGreen";
import { MusicDetailBox } from "../MusicDetailBox";
import { GoButton } from "../../atoms/button/GoButton";
import { Form } from "../../molecules/Form";
import { useTrack } from "../../../hooks/api/useApiTrack";
import { useValidateTrackURL } from "../../../hooks/useValidateTrackURL";
import { useMessage } from "../../../hooks/message/useMessage";
import { TrackDataType } from "../../../type/api/TrackDataType";

type Props = {
    goRate: () => void;
    onChangeTrackURL: (event: React.ChangeEvent<HTMLInputElement>) => void;
    trackUrl: string;
    trackId: string;
    setTrackId: (id: string) => void;
    trackData: TrackDataType;
    saveTrackData: (obj: TrackDataType) => void;
    blockTrack: boolean;
};

const NullTrack = {
    id: "",
    img: "",
    title: "",
    album: "",
    release: "",
};

export const CreateTrackInfo: VFC<Props> = (props) => {
    const {
        goRate,
        onChangeTrackURL,
        trackUrl,
        setTrackId,
        blockTrack,
        trackData,
        saveTrackData,
    } = props;
    const [isExist, setIsExist] = useState<boolean>(false);
    const { getTrack } = useTrack();
    const { validateTrackURL } = useValidateTrackURL();
    const { showMessage } = useMessage();

    const checkTrack = () => {
        const trackId = validateTrackURL(trackUrl);
        // バリデーションを行う
        if (trackId === undefined) {
            setIsExist(false);
            showMessage({
                title: "正しいURLを入力してください",
                status: "error",
            });
            setTrackId("");
        }
        // バリデーションをクリアしたidで実際に楽曲を取得できるか判定
        else {
            const track: TrackDataType = getTrack(trackId);
            if (track === undefined) {
                setIsExist(false);
                showMessage({
                    title: "楽曲を取得できませんでした",
                    status: "error",
                });
                setTrackId("");
            } else {
                setIsExist(true);
                setTrackId(trackId);
                saveTrackData(track);
            }
        }
    };

    return (
        <Box>
            {/* 入力された共有URIから楽曲が取得できたらその情報を表示 */}
            {isExist && (
                <MusicDetailBox
                    id={trackData?.id}
                    title={trackData?.title}
                    album={trackData?.album}
                    artist={trackData?.artist}
                    release={trackData?.release}
                />
            )}
            <Flex flexDirection="column" mt="30px">
                <Flex mt="10px">
                    <Form
                        onChange={onChangeTrackURL}
                        value={trackUrl}
                        fontSize="lg"
                        fontWeight="semibold"
                    >
                        Spotifyの楽曲シェア用URLを入力してください
                    </Form>
                    <Button
                        ml="2%"
                        w="20%"
                        bgGradient={gradationGreen}
                        color="white"
                        fontSize="lg"
                        mt="auto"
                        onClick={checkTrack}
                    >
                        確認
                    </Button>
                </Flex>
                <GoButton onClick={goRate} mt="30px" isDisabled={blockTrack} />
            </Flex>
        </Box>
    );
};
