import axios from "axios";
import { useState } from "react";
import { PostsDataType } from "../../type/api/PostsDataType";

type Sort = "recent" | "follow" | "popular";

export const useApiPosts = (sort: Sort) => {
    const [api_posts, setApiPosts] = useState<Array<PostsDataType>>([]);

    axios
        .get<Array<PostsDataType>>(`/api/posts/${sort}`)
        .then((res) => setApiPosts(res.data));

    return { api_posts };
};
