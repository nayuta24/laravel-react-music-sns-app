import axios from "axios";
import { useState } from "react";
import { PostsDataType } from "../../type/api/PostsDataType";

export const useApiPosts = () => {
  const [api_posts, setApiPosts] = useState<Array<PostsDataType>>([]);
  axios
    .get<Array<PostsDataType>>("/api/posts")
    .then((res) => setApiPosts(res.data));
  return { api_posts };
};
