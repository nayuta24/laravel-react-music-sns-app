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
    // trackIdは楽曲情報表示や「次へ」ボタンが押せるかなどの判定に使われる
    const [trackUrl, setTrackUrl] = useState<string>("");
    const [trackId, setTrackId] = useState<string | undefined>(undefined);
    // const [trackId, setTrackId] = useState<string | undefined>("");
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

    const changeTrackId = (id: string | undefined) => {
        setTrackId(id);
    };

    // TrackIdが空の場合はほかの画面への遷移をブロックする
    const [isTrackNull, setIsTrackNull] = useState<boolean>(true);
    useEffect(() => {
        trackId === undefined ? setIsTrackNull(true) : setIsTrackNull(false);
    }, [trackId]);

    // 評価が書かれていないor字数制限よりも多い場合は確認画面への遷移をブロックする
    const [isRatesNull, setIsRatesNull] = useState<boolean>(true);
    useEffect(() => {
        rate === 0.0 ||
        title === "" ||
        title.length >= 30 ||
        body === "" ||
        body.length >= 500
            ? setIsRatesNull(true)
            : setIsRatesNull(false);
    }, [rate, title, body]);

    // 取得に成功した楽曲データを保持する
    const [trackData, setTrackData] = useState<TrackDataType>();
    const saveTrackData = (obj: TrackDataType) => {
        setTrackData(obj);
    };

    const [transAlert, setTransAlert] = useState<boolean>(true);
    const passTransAlert = (bool: boolean) => {
        setTransAlert(bool);
    };

    return (
        <Box textAlign="left">
            {/* react-routeの「Prompt」によって、ページを離れようとしたときに警告
            (投稿確定時のリダイレクトでは無効) */}
            {transAlert && (
                <Prompt message="ページを離れると入力した内容が失われます" />
            )}
            <CreateBreadcrumb
                step={step}
                goTrackInfo={goTrackInfo}
                goRate={goRate}
                goCheck={goCheck}
                isTrackNull={isTrackNull}
                isRatesNull={isRatesNull}
            />

            {step === "track" ? (
                <CreateTrackInfo
                    goRate={goRate}
                    onChangeTrackURL={onChangeTrackURL}
                    trackUrl={trackUrl}
                    trackId={trackId}
                    setTrackId={changeTrackId}
                    isTrackNull={isTrackNull}
                    trackData={trackData}
                    saveTrackData={saveTrackData}
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
                    isRatesNull={isRatesNull}
                />
            ) : (
                <CreateCheck
                    rate={rate}
                    title={title}
                    body={body}
                    trackData={trackData}
                    trackId={trackId}
                    goRate={goRate}
                    setTransAlert={passTransAlert}
                />
            )}
        </Box>
    );
});
