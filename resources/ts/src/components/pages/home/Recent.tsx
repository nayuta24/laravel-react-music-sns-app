import { memo, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Box } from "@chakra-ui/react";
import axios from "axios";

import { homeState } from "../../../store/homeState";
import { PostCard } from "../../organisms/Home/post/PostCard";
import { PostsDataType } from "../../../type/api/PostsDataType";
import Posts from "../../../test_json/postsData.json";
import { useApiPosts } from "../../../hooks/api/useApiPosts";

export const Recent = memo(() => {
  const setTopic = useSetRecoilState(homeState);
  const { api_posts } = useApiPosts();

  console.log(api_posts);

  setTopic({ topic: "recent" });
  return (
    <Box>
      {/* jsonを引っ張り、map関数でカードを繰り返し描画 */}
      {Posts.map((obj) => (
        <PostCard post={Object.assign(obj)} /> // Object.assign(オブジェクト)で、オブジェクトのスプレッドを実現
      ))}
    </Box>
  );
});
