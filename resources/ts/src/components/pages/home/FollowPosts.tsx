import { memo } from "react";
import { useSetRecoilState } from "recoil";
import { homeState } from "../../../store/homeState";

export const FollowPosts = memo(() => {
  const setTopic = useSetRecoilState(homeState);
  setTopic({ topic: "follow_post" });

  return <div></div>;
});
