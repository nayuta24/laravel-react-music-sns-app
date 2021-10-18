import axios from "axios";
import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { PostsDataType } from "../../type/api/PostsDataType";
import { useMessage } from "../message/useMessage";

type Sort = "recent" | "follow" | "popular";

export const useApiPosts = (sort: Sort) => {
    const [api_posts, setApiPosts] = useState<Array<PostsDataType>>([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { showMessage } = useMessage();

    const getPosts = useCallback(() => {
        setLoading(true);
        axios
            .get<Array<PostsDataType>>(`/api/posts/recent`)
            .then((res) => setApiPosts(res.data))
            .catch(() => {
                showMessage({
                    title: "データの読み込みに失敗しました",
                    status: "error",
                });
            })
            .finally(() => setLoading(false));
    }, []);

    return { getPosts, api_posts, loading };
};
