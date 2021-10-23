import { useState, useCallback } from "react";
import { useHistory } from "react-router";
import apiClient from "../../client/apiClient";

import { PostsDataType } from "../../type/api/PostsDataType";
import { useMessage } from "../message/useMessage";
import { useErrorMessage } from "../useErrorMessage";

type Sort = "recent" | "follow" | "popular";

export const useApiPosts = (sort: Sort) => {
    const [api_posts, setApiPosts] = useState<Array<PostsDataType>>([]);
    const [loading, setLoading] = useState(false);

    const getPosts = useCallback(() => {
        setLoading(true);
        apiClient
            .get<Array<PostsDataType>>(`/api/posts/recent`)
            .then((res) => setApiPosts(res.data))
            .catch( () =>
            {
            })
            .finally(() => setLoading(false));
    }, []);

    return { getPosts, api_posts, loading };
};
