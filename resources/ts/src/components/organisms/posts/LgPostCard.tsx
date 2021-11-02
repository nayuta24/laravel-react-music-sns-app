import { memo, VFC } from "react";
import { useHistory } from "react-router";
import { Box, Flex } from "@chakra-ui/react";

import { CardMusicBox } from "../../molecules/postCard/CardMusicBox";
import { CardComment } from "../../molecules/postCard/CardComment";
import { Rating } from "../../atoms/button/Rating";
import { UserInfoBox } from "../../molecules/UserInfoBox";
import { CardFrame } from "../../atoms/frame/CardFrame";
import { PostsDataType } from "../../../type/api/PostsDataType";
import { CardReactionButtons } from "../../molecules/postCard/CardReactionButtons";

type Props = {
    post: PostsDataType;
};

export const LgPostCard: VFC<Props> = memo((props) => {
    const { post } = props;
    const { user, track, review, reaction, id } = post;
    const { comment_val, like_val } = reaction;
    const history = useHistory();
    const onClickCard = () => {
        history.push(`/post/${id}`);
    };

    return (
        <Box display={{ sm: "inline", base: "none" }}>
            <Flex position="relative" w="100%" h="100%">
                <CardFrame mb="2%" onClick={onClickCard}>
                    {/* 曲情報 */}
                    <CardMusicBox
                        img={track.img}
                        title={track.title}
                        artist={track.artist}
                    />
                    <Flex
                        w="70%"
                        h="30vh"
                        pb="8vh"
                        mr="auto"
                        flexFlow="column"
                        textAlign="left"
                    >
                        {/* コメント */}
                        <CardComment title={review.title} body={review.body} />
                    </Flex>
                </CardFrame>
                {/* 上からいいねボタン等を重ねる */}
                <Flex position="absolute" w="60%" ml="32%" mt="23.5vh">
                    <Flex flexDirection="column" w="100%">
                        {/* 評価 */}
                        <Rating rating={review.star} />
                        {/* 投稿へのコメント、いいねなど */}
                        <CardReactionButtons
                            comment_val={comment_val}
                            like_val={like_val}
                        />
                    </Flex>
                    {/* コメントしたユーザー */}
                    <Flex w="25%">
                        <UserInfoBox
                            img={user.img}
                            name={user.name}
                            user_title={user.job}
                            pl="8%"
                            m="auto"
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
});
