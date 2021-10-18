import { memo } from "react";
import { useSetRecoilState } from "recoil";

import { homeState } from "../../../store/homeState";
import { LoadingPageSpinner } from "../../organisms/LoadingPageSpinner";
import { HomePage404 } from "./Home404";

export const FollowPosts = memo(() => {
    const setTopic = useSetRecoilState(homeState);
    setTopic({ topic: "follow" });

    return <LoadingPageSpinner />;
});
