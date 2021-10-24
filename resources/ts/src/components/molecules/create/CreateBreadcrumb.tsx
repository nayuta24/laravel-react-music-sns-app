import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { memo, VFC } from "react";

type Props = {
    step: "track" | "rate" | "check";
    onTrackInfo: () => void;
    onRate: () => void;
    onCheck: () => void;
};

export const CreateBreadcrumb: VFC<Props> = memo((props) => {
    const { step, onTrackInfo, onRate, onCheck } = props;
    return (
        <Breadcrumb
            spacing="20px"
            ml="20px"
            separator={<ChevronRightIcon color="gray.500" fontSize="30px" />}
        >
            <BreadcrumbItem isCurrentPage={step === "track"}>
                <BreadcrumbLink fontSize="20px" onClick={onTrackInfo}>
                    楽曲情報
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage={step === "rate"}>
                <BreadcrumbLink fontSize="20px" onClick={onRate}>
                    評価
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage={step === "check"}>
                <BreadcrumbLink fontSize="20px" onClick={onCheck}>
                    確認
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
});
