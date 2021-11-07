import { memo, VFC } from "react";
import { useHistory } from "react-router";
import { Box, Flex } from "@chakra-ui/react";

import { CardMusicBox } from "../../molecules/postCard/CardMusicBox";
import { CardComment } from "../../molecules/postCard/CardComment";
import { SmRating } from "../../atoms/button/SmRating";
import { UserInfoBox } from "../../molecules/UserInfoBox";
import { CardFrame } from "../../atoms/frame/CardFrame";
import { PostsDataType } from "../../../type/api/PostsDataType";
import { CardReactionButtons } from "../../molecules/postCard/CardReactionButtons";

type Props = {
    post: PostsDataType;
};

export const SmPostCard: VFC<Props> = memo((props) => {
    const { post } = props;
    const { user, track, review, reaction, id } = post;
    const { comment_val, like_val } = reaction;
    const history = useHistory();
    const onClickCard = () => {
        history.push(`/post/${id}`);
    };

    return (
        <Box display={{ sm: "none", base: "inline" }}>
            <Flex position="relative" w="100%" h="100%">
                <CardFrame mb="4%" onClick={onClickCard}>
                    {/* 曲情報 */}
                    <CardMusicBox
                        img={track.img}
                        title={track.title}
                        artist={track.artist}
                    />
                    <Box mx="auto">
                        {/* <SmRating rating={review.star} isRateDisable={true} /> */}
                        <SmRating rating={review.star} />
                    </Box>
                    <Flex
                        w="100%"
                        h="30vh"
                        mr="auto"
                        mb="1%"
                        mt="5%"
                        flexFlow="column"
                        textAlign="left"
                    >
                        {/* コメント */}
                        <CardComment title={review.title} body={review.body} />
                    </Flex>
                </CardFrame>
                {/* 上からいいねボタン等を重ねる */}
                <Flex
                    flexDirection="column"
                    position="absolute"
                    w="100%"
                    mt="75vh"
                >
                    {/* 投稿へのコメント、いいねなど */}
                    <Flex ml="auto">
                        <UserInfoBox
                            user={{
                                id: user.id,
                                name: user.name,
                                job: user.job,
                                image: user.img,
                            }}
                            m="auto"
                        />
                    </Flex>
                    <CardReactionButtons
                        comment_val={comment_val}
                        like_val={like_val}
                    />
                </Flex>
            </Flex>
        </Box>
    );
});
