import axios from "axios";
import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { PostsDataType } from "../../type/api/PostsDataType";

type Sort = "recent" | "follow" | "popular";

export const useApiPosts = (sort: Sort) => {
    const [api_posts, setApiPosts] = useState<Array<PostsDataType>>([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const getPosts = useCallback(() => {
        setLoading(true);
        axios
            .get<Array<PostsDataType>>(`/api/posts/recent`)
            .then((res) => setApiPosts(res.data))
            .catch(() => {
                history.push("/home/page404");
            })
            .finally(() => setLoading(false));
    }, []);

    return { getPosts, api_posts, loading };
};
