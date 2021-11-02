import { memo } from "react";
import { useSetRecoilState } from "recoil";
import { Box } from "@chakra-ui/react";

import { homeState } from "../../../store/homeState";
import { LoadingPageSpinner } from "../../organisms/LoadingPageSpinner";

export const Popular = memo(() => {
    const setTopic = useSetRecoilState(homeState);
    setTopic({ topic: "popular" });
    return (
        <Box>
            <LoadingPageSpinner />
        </Box>
    );
});
