import { useCallback, useState } from "react";
import { PostsDataType } from "../../type/api/PostsDataType";
import failed from "../../test_json/failedDetail.json";
import apiClient from "../../client/apiClient";
import { useHistory } from "react-router";

export const useGetDetail = ( id: string ) =>
{
    const [ api_postDetail, setApiPostDetail ] = useState<PostsDataType>( failed );
    const [ loading, setLoading ] = useState( false )
    const history = useHistory()
    const getPostDetail = useCallback(() =>
    {
        setLoading( true );

        apiClient
        .get<PostsDataType>( `/api/posts/${ id }` )
        .then( ( res ) => setApiPostDetail( res.data ) )
        .catch( () =>
        {
            history.push("/page404")
        }
        ).finally( () => setLoading( false ) );
    },[])

    return { getPostDetail, api_postDetail, loading };
};
