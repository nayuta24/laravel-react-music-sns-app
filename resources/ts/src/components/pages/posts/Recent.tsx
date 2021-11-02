import { memo, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Box } from "@chakra-ui/react";
import axios from "axios";

import { homeState } from "../../../store/homeState";
import { LgPostCard } from "../../organisms/home/post/LgPostCard";
import { PostsDataType } from "../../../type/api/PostsDataType";
import Posts from "../../../test_json/allPosts.json";
import { useGetPosts } from "../../../hooks/api/useGetPosts";
import { LoadingPageSpinner } from "../../organisms/LoadingPageSpinner";
import { SmPostCard } from "../../organisms/home/post/SmPostCard";

export const Recent = memo(() => {
    // グローバルStateを変更、それをもとにヘッダーを変更とapiリクエストをする
    const setTopic = useSetRecoilState(homeState);
    setTopic({ topic: "recent" });
    /* ↓本番環境用 */
    const { getPosts, api_posts, loading } = useGetPosts("recent");
    useEffect(() => getPosts(), [getPosts]);

    /* ↓ローカル環境でのテスト用（test_jsonを使用） */
    // const api_posts: Array<PostsDataType> = Posts;

    return (
        /* 本番環境用 */
        <>
            {loading ? (
                <LoadingPageSpinner />
            ) : (
                <Box>
                    {/* apiからjsonを引っ張り、map関数でカードを繰り返し描画 */}
                    {api_posts.map((obj) => (
                        <Box key={obj.id}>
                            {/* Object.assign(オブジェクト)で、オブジェクトのスプレッドを実現 */}
                            <LgPostCard post={Object.assign(obj)} />
                            <SmPostCard post={Object.assign(obj)} />
                        </Box>
                    ))}
                </Box>
            )}
        </>

        /* ↓ローカル開発用 */
        // <Box>
        //     {/* jsonを引っ張り、map関数でカードを繰り返し描画 */}
        //     {api_posts.map((obj) => (
        //         <Box key={obj.id}>
        //             {/* Object.assign(オブジェクト)で、オブジェクトのスプレッドを実現 */}
        //             <LgPostCard post={Object.assign(obj)} />
        //             <SmPostCard post={Object.assign(obj)} />
        //         </Box>
        //     ))}
        // </Box>
    );
});
