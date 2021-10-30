import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useEffect, useState, VFC } from "react";

import { gradationGreen } from "../../atoms/color/gradationGreen";
import { MusicDetailBox } from "../MusicDetailBox";
import { CreateTransButton } from "../../atoms/button/CreateTransButton";
import { useGetTrack } from "../../../hooks/api/useGetTrack";
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
    isTrackNull: boolean;
};

export const CreateTrackInfo: VFC<Props> = (props) => {
    const {
        goRate,
        onChangeTrackURL,
        trackUrl,
        trackId,
        setTrackId,
        isTrackNull,
        trackData,
        saveTrackData,
    } = props;
    const { getTrack } = useGetTrack();
    const { validateTrackURL } = useValidateTrackURL();
    const { showMessage } = useMessage();

    // checkTrackとuseEffect内の楽曲登録作業の橋渡しをするstateを準備したい
    // 一旦、このページ内の状態で楽曲データを預かるためのstate
    // これを使って楽曲有無の確認をするapiを叩き、確認できたら正式にcreateグローバルstateに登録
    const [onceTrack, setOnceTrack] = useState<TrackDataType>();
    const saveOnceTrackData = (val: TrackDataType) => {
        setOnceTrack(val);
    };

    const checkTrack = () => {
        const validatedTrackId = validateTrackURL(trackUrl);
        // バリデーションを行う
        if (validatedTrackId === undefined) {
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

    // APIで楽曲情報が確認できたタイミングで保存
    // ちゃんと取得できていたら、一旦保存しておいた楽曲情報を正式にグローバルで保存
    useEffect(() => {
        if (onceTrack !== undefined) {
            setTrackId(onceTrack.id);
            saveTrackData(onceTrack);
        }
    }, [onceTrack]);

    return (
        <Box>
            {/* 入力された共有URIから楽曲が取得できていたら表示 */}
            {trackId !== undefined && (
                <MusicDetailBox
                    id={trackData?.id}
                    title={trackData?.title}
                    album={trackData?.album}
                    artist={trackData?.artist}
                    release={trackData?.release}
                />
            )}
            <Flex flexDirection="column" mt="30px">
                <Box>
                    <Text
                        ml={1}
                        mb={2}
                        fontSize={{ sm: "lg", base: "13px" }}
                        fontWeight="semibold"
                        color="gray.700"
                    >
                        Spotifyの楽曲シェア用URLを入力してください
                    </Text>
                    <Flex>
                        <Input onChange={onChangeTrackURL} value={trackUrl} />
                        <Button
                            ml="2%"
                            bgGradient={gradationGreen}
                            color="white"
                            fontSize={{ sm: "lg", base: "sm" }}
                            mt="auto"
                            onClick={checkTrack}
                        >
                            確認
                        </Button>
                    </Flex>
                </Box>
                <CreateTransButton
                    onClick={goRate}
                    mt={{ sm: "30px", base: "20px" }}
                    isDisabled={isTrackNull}
                    text="次へ"
                />
            </Flex>
        </Box>
    );
};
