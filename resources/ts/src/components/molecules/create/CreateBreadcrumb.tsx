import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { memo, useEffect, useState, VFC } from "react";

type Props = {
    step: "track" | "rate" | "check";
    goTrackInfo: () => void;
    goRate: () => void;
    goCheck: () => void;
    blockTrack: boolean;
    blockRates: boolean;
};

type Weight = "normal" | "bold";
type Color = "black" | "gray.500";

export const CreateBreadcrumb: VFC<Props> = memo((props) => {
    const { step, goTrackInfo, goRate, goCheck, blockTrack, blockRates } =
        props;

    const [trackColor, setTrackColor] = useState<Color>("gray.500");
    const [rateColor, setRateColor] = useState<Color>("gray.500");
    const [checkColor, setCheckColor] = useState<Color>("gray.500");
    const [trackWeight, setTrackWeight] = useState<Weight>("normal");
    const [rateWeight, setRateWeight] = useState<Weight>("normal");
    const [checkWeight, setCheckWeight] = useState<Weight>("normal");

    useEffect(() => {
        // 一旦初期化して変化部分のみ値を指定する
        setTrackWeight("normal");
        setTrackColor("gray.500");
        setRateWeight("normal");
        setRateColor("gray.500");
        setCheckWeight("normal");
        setCheckColor("gray.500");
        if (step === "track") {
            setTrackWeight("bold");
            setTrackColor("black");
        } else if (step === "rate") {
            setRateWeight("bold");
            setRateColor("black");
        } else {
            setCheckWeight("bold");
            setCheckColor("black");
        }
    }, [step]);

    // 楽曲情報が入力されていなければ評価画面に行けない
    // 評価が入力されていなければ内容確認画面に行けない
    var canMoveRate: "auto" | "none" = blockTrack ? "none" : "auto";
    var canMoveCheck: "auto" | "none" =
        blockTrack || blockRates ? "none" : "auto";

    useEffect(() => {
        blockTrack ? (canMoveRate = "none") : (canMoveRate = "auto");
    }, [blockTrack]);

    useEffect(() => {
        blockTrack && blockRates
            ? (canMoveCheck = "none")
            : (canMoveCheck = "auto");
    }, [blockTrack]);

    return (
        <Breadcrumb
            spacing="20px"
            ml="0px"
            separator={<ChevronRightIcon color="gray.500" fontSize="30px" />}
            textAlign="left"
            mb="30px"
        >
            <BreadcrumbItem isCurrentPage={step === "track"}>
                <BreadcrumbLink
                    fontSize="20px"
                    color={trackColor}
                    fontWeight={trackWeight}
                    onClick={goTrackInfo}
                >
                    楽曲情報
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
                isCurrentPage={step === "rate"}
                pointerEvents={canMoveRate}
            >
                <BreadcrumbLink
                    fontSize="20px"
                    color={rateColor}
                    fontWeight={rateWeight}
                    onClick={goRate}
                >
                    評価
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
                isCurrentPage={step === "check"}
                pointerEvents={canMoveCheck}
            >
                <BreadcrumbLink
                    fontSize="20px"
                    color={checkColor}
                    fontWeight={checkWeight}
                    onClick={goCheck}
                >
                    内容確認
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
});
