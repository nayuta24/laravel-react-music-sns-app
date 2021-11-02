import { memo } from "react";
import { useSetRecoilState } from "recoil";

import { homeState } from "../../../store/homeState";
import { LoadingPageSpinner } from "../../organisms/LoadingPageSpinner";
import { Page404 } from "../Page404";

export const FollowPosts = memo(() => {
    const setTopic = useSetRecoilState(homeState);
    setTopic({ topic: "follow" });

    return <LoadingPageSpinner />;
});
