import { useEffect, VFC } from "react";
import { useParams } from "react-router";
import { AspectRatio, Flex, Text, Box, Divider } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

import { UserInfoBox } from "../../../molecules/UserInfoBox";
import { Rating } from "../../../atoms/button/Rating";
import { homeState } from "../../../../store/homeState";
import { ReactionButtons } from "../../../molecules/post_detail/ReactionButtons";
import { useApiPostDetail } from "../../../../hooks/api/useApiPostDetail";
import json_postDetail from "../../../../test_json/postDetail.json";
import { LoadingCard } from "../../../organisms/Home/post/LoadingCard";
import { LoadingPageSpinner } from "../../../organisms/LoadingPageSpinner";

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
    const { getPostDetail, api_postDetail, loading } = useApiPostDetail(id);
    useEffect(getPostDetail, [getPostDetail]);

    /* ローカルでのテスト用*/
    // const api_postDetail = json_postDetail;

    return (
        /* ↓本番環境用 */
        <>
            {loading ? (
                <LoadingPageSpinner />
            ) : (
                <Box mx={5}>
                    <Flex>
                        <AspectRatio ratio={1 / 1} w="300px">
                            <iframe
                                src={`https://open.spotify.com/embed/track/${api_postDetail.track.id}`}
                                frameBorder="0"
                                allow="encrypted-media"
                            />
                        </AspectRatio>
                        <Flex
                            alignItems="start"
                            flexFlow="column"
                            ml={5}
                            mt="auto"
                        >
                            <Text fontWeight="bold" fontSize="md">
                                {api_postDetail.track.title}
                            </Text>
                            <Text fontSize="sm">
                                収録アルバム：{api_postDetail.track.album}
                            </Text>
                            <Text fontSize="sm">
                                アーティスト：{api_postDetail.track.artist}
                            </Text>
                            <Text fontSize="sm">
                                リリース：{api_postDetail.track.release}
                            </Text>
                        </Flex>
                    </Flex>
                    <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
                    <Flex textAlign="left">
                        <Box mr={2}>
                            <UserInfoBox
                                name={api_postDetail.user.name}
                                user_title={api_postDetail.user.job}
                                img={api_postDetail.user.img}
                            />
                        </Box>
                        <Rating rating={api_postDetail.review.star} />
                    </Flex>
                    <Box mt={5} textAlign="left">
                        <Text fontSize="lg" fontWeight="bold">
                            {api_postDetail.review.title}
                        </Text>
                        <Text fontSize="sm" pr={10} mt={2}>
                            {api_postDetail.review.body}
                        </Text>
                    </Box>
                    <ReactionButtons
                        comment_val={api_postDetail.reaction.comment_val}
                        like_val={api_postDetail.reaction.like_val}
                    />
                    <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
                </Box>
            )}
        </>

        /* ローカルでのテスト用*/
        // <Box mx={5}>
        //     <Flex>
        //         <AspectRatio ratio={1 / 1} w="300px">
        //             <iframe
        //                 src={`https://open.spotify.com/embed/track/${api_postDetail.track.id}`}
        //                 frameBorder="0"
        //                 allow="encrypted-media"
        //             />
        //         </AspectRatio>
        //         <Flex alignItems="start" flexFlow="column" ml={5} mt="auto">
        //             <Text fontWeight="bold" fontSize="md">
        //                 {api_postDetail.track.title}
        //             </Text>
        //             <Text fontSize="sm">
        //                 収録アルバム：{api_postDetail.track.album}
        //             </Text>
        //             <Text fontSize="sm">
        //                 アーティスト：{api_postDetail.track.artist}
        //             </Text>
        //             <Text fontSize="sm">
        //                 リリース：{api_postDetail.track.release}
        //             </Text>
        //         </Flex>
        //     </Flex>
        //     <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
        //     <Flex textAlign="left">
        //         <Box mr={2}>
        //             <UserInfoBox
        //                 name={api_postDetail.user.name}
        //                 user_title={api_postDetail.user.job}
        //                 img={api_postDetail.user.img}
        //             />
        //         </Box>
        //         <Rating rating={api_postDetail.review.star} />
        //     </Flex>
        //     <Box mt={5} textAlign="left">
        //         <Text fontSize="lg" fontWeight="bold">
        //             {api_postDetail.review.title}
        //         </Text>
        //         <Text fontSize="sm" pr={10} mt={2}>
        //             {api_postDetail.review.body}
        //         </Text>
        //     </Box>
        //     <ReactionButtons
        //         comment_val={api_postDetail.reaction.comment_val}
        //         like_val={api_postDetail.reaction.like_val}
        //     />
        //     <Divider orientation="horizontal" w="100%" mt={5} mb="5" />
        // </Box>
    );
};
