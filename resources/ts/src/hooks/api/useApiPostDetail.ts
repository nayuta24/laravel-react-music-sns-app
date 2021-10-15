import axios from "axios";
import { useState } from "react";
import { PostsDataType } from "../../type/api/PostsDataType";
import  failed  from "../../test_json/postDetail.json";

export const useApiPostDetail = (id: string) => {
    const [ api_postDetail, setApiPostDetail ] = useState<PostsDataType>( failed );

    axios
        .get<PostsDataType>(`/api/posts/${id}`)
        .then((res) => setApiPostDetail(res.data));

    return { api_postDetail };
};
