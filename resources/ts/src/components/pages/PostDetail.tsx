import { useEffect, VFC } from "react";
import { useParams } from "react-router";
import { Box, Divider } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

import { homeState } from "../../store/homeState";
import { useGetDetail } from "../../hooks/api/useGetDetail";
import json_postDetail from "../../test_json/postDetail.json";
import { LoadingCard } from "../organisms/home/post/LoadingCard";
import { LoadingPageSpinner } from "../organisms/LoadingPageSpinner";
import { MusicDetailBox } from "../organisms/MusicDetailBox";
import { DetailBox } from "../organisms/detail/DetailBox";

type Param = {
    id: string;
};

type Props = {};

export const PostDetail: VFC<Props> = (props) => {
    const {} = props;
    const setTopic = useSetRecoilState(homeState);
    setTopic({ topic: "detail" });
    const { id } = useParams<Param>();
    /* ↓本番環境用 */
    // const { getPostDetail, api_postDetail, loading } = useGetDetail(id);
    // useEffect(() => getPostDetail(), []);

    /* ローカルでのテスト用*/
    const api_postDetail = json_postDetail;

    return (
        /* ↓本番環境用 */
        // <>
        //     {loading ? (
        //         <LoadingPageSpinner />
        //     ) : (
        //         <Box>
        //             <MusicDetailBox
        //                 id={api_postDetail.track.id}
        //                 title={api_postDetail.track.title}
        //                 album={api_postDetail.track.album}
        //                 artist={api_postDetail.track.artist}
        //                 release={api_postDetail.track.release}
        //             />
        //             <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
        //             <DetailBox
        //                 userName={api_postDetail.user.name}
        //                 userTitle={api_postDetail.user.job}
        //                 userImg={api_postDetail.user.img}
        //                 rating={api_postDetail.review.star}
        //                 title={api_postDetail.review.title}
        //                 body={api_postDetail.review.body}
        //                 commentVal={api_postDetail.reaction.comment_val}
        //                 likeVal={api_postDetail.reaction.like_val}
        //             />
        //             <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
        //         </Box>
        //     )}
        // </>

        /* ローカルでのテスト用*/
        <Box mx={5}>
            <MusicDetailBox
                id={`https://open.spotify.com/embed/track/${api_postDetail.track.id}`}
                title={api_postDetail.track.title}
                album={api_postDetail.track.album}
                artist={api_postDetail.track.artist}
                release={api_postDetail.track.release}
            />
            <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
            <DetailBox
                userName={api_postDetail.user.name}
                userTitle={api_postDetail.user.job}
                userImg={api_postDetail.user.img}
                rating={api_postDetail.review.star}
                title={api_postDetail.review.title}
                body={api_postDetail.review.body}
                commentVal={api_postDetail.reaction.comment_val}
                likeVal={api_postDetail.reaction.like_val}
            />
            <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
        </Box>
    );
};
