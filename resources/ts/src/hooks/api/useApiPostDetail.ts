import axios from "axios";
import { useCallback, useState } from "react";
import { PostsDataType } from "../../type/api/PostsDataType";
import failed from "../../test_json/postDetail.json";
import { useHistory} from "react-router-dom" ;
import { useMessage } from "../message/useMessage";


export const useApiPostDetail = ( id: string ) =>
{
    const [ api_postDetail, setApiPostDetail ] = useState<PostsDataType>( failed );
    const [ loading, setLoading ] = useState( false )
    const history = useHistory();
    const {showMessage} = useMessage();

    const getPostDetail = useCallback(() =>
    {
        setLoading( true );

        axios
        .get<PostsDataType>( `/api/posts/${ id }` )
        .then( ( res ) => setApiPostDetail( res.data ) )
        .catch( () =>
        {
            showMessage( { title: "投稿が見つかりません", status: "error" } );
        } ).finally( ()=>setLoading(false));
    },[])

    return { getPostDetail, api_postDetail, loading };
};
