import { memo } from "react";
import { Spinner } from "@chakra-ui/react";

import { CardFrame } from "../../../atoms/frame/CardFrame";

export const LoadingCard = memo(() => {
    return (
        <CardFrame mb="1.5%">
            <Spinner
                thickness="4px"
                speed="0.8s"
                emptyColor="gray.200"
                color="#c4de71"
                size="xl"
                m="auto"
            />
        </CardFrame>
    );
});
