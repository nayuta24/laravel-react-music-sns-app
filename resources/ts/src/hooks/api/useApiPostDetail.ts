import { useCallback, useState } from "react";
import { PostsDataType } from "../../type/api/PostsDataType";
import failed from "../../test_json/postDetail.json";
import { useMessage } from "../message/useMessage";
import apiClient from "../../client/apiClient";
import { useHistory } from "react-router";



export const useApiPostDetail = ( id: string ) =>
{
    const [ api_postDetail, setApiPostDetail ] = useState<PostsDataType>( failed );
    const [ loading, setLoading ] = useState( false )
    const { showMessage } = useMessage();

    const getPostDetail = useCallback(() =>
    {
        setLoading( true );

        apiClient
        .get<PostsDataType>( `/api/posts/${ id }` )
        .then( ( res ) => setApiPostDetail( res.data ) )
        .catch( () =>
        {
            showMessage( { title: "データの取得に失敗しました", status: "error" } );
        } ).finally( ()=>setLoading(false));
    },[])

    return { getPostDetail, api_postDetail, loading };
};
