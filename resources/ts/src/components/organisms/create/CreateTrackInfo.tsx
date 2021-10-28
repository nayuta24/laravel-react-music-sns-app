import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState, VFC } from "react";

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
    trackId: string | undefined;
    setTrackId: (id: string | undefined) => void;
    trackData: TrackDataType;
    saveTrackData: (obj: TrackDataType) => void;
    blockTrack: boolean;
    isExist: boolean;
    setIsExist: (bool: boolean) => void;
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
        isExist,
        setIsExist,
    } = props;
    const { getTrack } = useTrack();
    const { validateTrackURL } = useValidateTrackURL();
    const { showMessage } = useMessage();

    // 一旦、このページ内の状態で楽曲データを預かる
    // データが取得でき次第、正式にcreateページのグローバルstateで保持させる
    const [onceTrack, setOnceTrack] = useState<TrackDataType>();
    const saveOnceTrackData = (val: TrackDataType) => {
        setOnceTrack(val);
    };

    const checkTrack = () => {
        const validatedTrackId = validateTrackURL(trackUrl);
        // バリデーションを行う
        if (validatedTrackId === undefined) {
            setIsExist(false);
            showMessage({
                title: "正しいURLを入力してください",
                status: "error",
            });
        }
        // バリデーションをクリアしたidで実際に楽曲を取得できるか判定
        else {
            getTrack(validatedTrackId, saveOnceTrackData);
        }
    };

    // APIで楽曲情報が確認できたタイミングで保存、表示
    // ちゃんと取得できていたら、一旦保存しておいた楽曲情報を正式にグローバルで保存
    useEffect(() => {
        if (onceTrack === undefined) {
            setIsExist(false);
            setTrackId(undefined);
        } else {
            setIsExist(true);
            setTrackId(onceTrack.id);
            saveTrackData(onceTrack);
        }
    }, [onceTrack]);

    return (
        <Box>
            {/* 入力された共有URIから楽曲が取得できたら表示 */}
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
                <Text>{}</Text>
                <GoButton onClick={goRate} mt="30px" isDisabled={blockTrack} />
            </Flex>
        </Box>
    );
};
