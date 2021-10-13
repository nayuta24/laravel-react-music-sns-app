import { memo } from "react";
import { useSetRecoilState } from "recoil";
import { homeState } from "../../../store/homeState";

export const Popular = memo(() => {
  const setTopic = useSetRecoilState(homeState);
  setTopic({ topic: "popular" });
  return <div></div>;
});
