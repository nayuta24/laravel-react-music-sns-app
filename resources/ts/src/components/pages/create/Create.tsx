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

export const Create = memo(() => {
    const [step, setStep] = useState<"track" | "rate" | "check">("track");
    const onTrackInfo = () => {
        setStep("track");
    };
    const onRate = () => {
        setStep("rate");
    };
    const onCheck = () => {
        setStep("check");
    };

    return (
        <Box>
            <CreateBreadcrumb
                step={step}
                onTrackInfo={onTrackInfo}
                onRate={onRate}
                onCheck={onCheck}
            />
            {step === "track" ? (
                <CreateTrackInfo />
            ) : step === "rate" ? (
                <CreateRate />
            ) : (
                <CreateCheck />
            )}
        </Box>
    );
});
