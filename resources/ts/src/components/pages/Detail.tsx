import { useEffect, VFC } from "react";
import { useParams } from "react-router";
import { Box, Divider } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

import { homeState } from "../../store/homeState";
import { useGetDetail } from "../../hooks/api/useGetDetail";
import json_postDetail from "../../test_json/postDetail.json";
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
    const { getPostDetail, detail, loading } = useGetDetail(id);
    useEffect(() => getPostDetail(), []);

    /* ローカルでのテスト用*/
    // const detail = json_postDetail;

    return (
        /* ↓本番環境用 */
        <>
            {loading ? (
                <LoadingPageSpinner />
            ) : (
                <Box>
                    <MusicDetailBox
                        id={detail.track.id}
                        title={detail.track.title}
                        album={detail.track.album}
                        artist={detail.track.artist}
                        release={detail.track.release}
                    />
                    <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
                    <DetailBox
                        userName={detail.user.name}
                        userTitle={detail.user.job}
                        userImg={detail.user.img}
                        userId={detail.user.id}
                        rating={detail.review.star}
                        title={detail.review.title}
                        body={detail.review.body}
                        commentVal={detail.reaction.comment_val}
                        likeVal={detail.reaction.like_val}
                    />
                    <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
                </Box>
            )}
        </>

        /* ローカルでのテスト用*/
        // <Box mx={5}>
        //     <MusicDetailBox
        //         id={`https://open.spotify.com/embed/track/${detail.track.id}`}
        //         title={detail.track.title}
        //         album={detail.track.album}
        //         artist={detail.track.artist}
        //         release={detail.track.release}
        //     />
        //     <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
        //     <DetailBox
        //         userName={detail.user.name}
        //         userTitle={detail.user.job}
        //         userImg={detail.user.img}
        //         userId={detail.user.id}
        //         rating={detail.review.star}
        //         title={detail.review.title}
        //         body={detail.review.body}
        //         commentVal={detail.reaction.comment_val}
        //         likeVal={detail.reaction.like_val}
        //     />
        //     <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
        // </Box>
    );
};
