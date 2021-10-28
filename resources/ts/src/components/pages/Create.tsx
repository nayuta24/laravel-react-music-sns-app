import { ChangeEvent, memo, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Prompt } from "react-router";
import { useSetRecoilState } from "recoil";

import { CreateBreadcrumb } from "../molecules/create/CreateBreadcrumb";
import { CreateTrackInfo } from "../organisms/create/CreateTrackInfo";
import { CreateRate } from "../organisms/create/CreateRate";
import { CreateCheck } from "../organisms/create/CreateCheck";
import { homeState } from "../../store/homeState";
import { TrackDataType } from "../../type/api/TrackDataType";

export const Create = memo(() => {
    const setTopic = useSetRecoilState(homeState);
    setTopic({ topic: "create" });

    // 画面遷移のためのState
    const [step, setStep] = useState<"track" | "rate" | "check">("track");
    const goTrackInfo = () => {
        setStep("track");
    };
    const goRate = () => {
        setStep("rate");
    };
    const goCheck = () => {
        setStep("check");
    };

    // 各種投稿内容を保存しておくためのState
    const [trackUrl, setTrackUrl] = useState<string>("");
    const [trackId, setTrackId] = useState<string | undefined>(undefined);
    const [rate, setRate] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    const onChangeTrackURL = (e: ChangeEvent<HTMLInputElement>) =>
        setTrackUrl(e.target.value);

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) =>
        setTitle(e.target.value);

    const onChangeBody = (e: ChangeEvent<HTMLTextAreaElement>) =>
        setBody(e.target.value);

    const onChangeRate = (val: number) => {
        setRate(val);
    };

    const ChangeTrackId = (id: string | undefined) => {
        setTrackId(id);
    };

    // TrackIdが空の場合はほかの画面への遷移をブロックする
    const [blockTrack, setBlockTrack] = useState<boolean>(true);
    useEffect(() => {
        trackId === undefined ? setBlockTrack(false) : setBlockTrack(true);
    }, [trackId]);

    // 評価が書かれていなければ確認画面への遷移をブロックする
    const [blockRates, setBlockRates] = useState<boolean>(true);
    useEffect(() => {
        rate === 0.0 || title === "" || body === ""
            ? setBlockRates(true)
            : setBlockRates(false);
    }, [rate, title, body]);

    // 取得に成功した楽曲データを保持する
    const [trackData, setTrackData] = useState<TrackDataType>();
    const saveTrackData = (obj: TrackDataType) => {
        setTrackData(obj);
    };

    // 楽曲情報入力画面で、MusicDetailを表示するかの状態を保持
    const [isExist, setIsExist] = useState<boolean>(false);
    const saveIsExist = (bool: boolean) => {
        setIsExist(bool);
    };

    return (
        <Box textAlign="left">
            {/* react-routeの「Priompt」によって、ページを離れようとしたときに警告 */}
            <Prompt message="ページを離れると入力した内容が失われます" />
            <CreateBreadcrumb
                step={step}
                goTrackInfo={goTrackInfo}
                goRate={goRate}
                goCheck={goCheck}
                blockTrack={blockTrack}
                blockRates={blockRates}
            />

            {step === "track" ? (
                <CreateTrackInfo
                    goRate={goRate}
                    onChangeTrackURL={onChangeTrackURL}
                    trackUrl={trackUrl}
                    trackId={trackId}
                    setTrackId={ChangeTrackId}
                    blockTrack={blockTrack}
                    trackData={trackData}
                    saveTrackData={saveTrackData}
                    isExist={isExist}
                    setIsExist={saveIsExist}
                />
            ) : step === "rate" ? (
                <CreateRate
                    goCheck={goCheck}
                    goTrackInfo={goTrackInfo}
                    onChangeRate={onChangeRate}
                    rate={rate}
                    onChangeTitle={onChangeTitle}
                    title={title}
                    onChangeBody={onChangeBody}
                    body={body}
                    blockRates={blockRates}
                />
            ) : (
                <CreateCheck
                    rate={rate}
                    title={title}
                    body={body}
                    trackData={trackData}
                />
            )}
        </Box>
    );
});
