import { memo, useState } from "react";
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { CreateBreadcrumb } from "../../molecules/create/CreateBreadcrumb";
import { CreateTrackInfo } from "../../organisms/create/CreateTrackInfo";
import { CreateRate } from "../../organisms/create/CreateRate";
import { CreateCheck } from "../../organisms/create/CreateCheck";
import { useSetRecoilState } from "recoil";
import { homeState } from "../../../store/homeState";
import { Prompt } from "react-router";

export const Create = memo(() => {
    const setTopic = useSetRecoilState(homeState);
    setTopic({ topic: "create" });

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

    return (
        <Box textAlign="left">
            {/* react-routeの「Priompt」によって、ページを離れようとしたときに警告 */}
            <Prompt message="ページを離れると入力した内容が失われます" />
            <CreateBreadcrumb
                step={step}
                goTrackInfo={goTrackInfo}
                goRate={goRate}
                goCheck={goCheck}
            />
            {step === "track" ? (
                <CreateTrackInfo goRate={goRate} />
            ) : step === "rate" ? (
                <CreateRate goCheck={goCheck} goTrackInfo={goTrackInfo} />
            ) : (
                <CreateCheck />
            )}
        </Box>
    );
});
