import { Box, Flex, Text } from "@chakra-ui/react";
import { VFC } from "react";
import { Rating } from "../../atoms/button/Rating";
import { ReactionButtons } from "../../molecules/post_detail/ReactionButtons";
import { UserInfoBox } from "../../molecules/UserInfoBox";

type Props = {
    userName: string;
    userTitle: string;
    userImg: string;
    rating?: number;
    title: string;
    body: string;
    commentVal?: number;
    likeVal?: number;
};

export const DetailBox: VFC<Props> = (props) => {
    const {
        userName = "",
        userTitle = "",
        userImg = "",
        rating,
        title = "",
        body = "",
        commentVal,
        likeVal,
    } = props;
    return (
        <Box>
            <Flex textAlign="left">
                <Box mr={2}>
                    <UserInfoBox
                        name={userName}
                        user_title={userTitle}
                        img={userImg}
                    />
                </Box>
                {/* コメントのときは評価の星を表示しない */}
                {rating === undefined ? <div /> : <Rating rating={rating} />}
            </Flex>
            <Box mt={5} textAlign="left">
                <Text fontSize="lg" fontWeight="bold">
                    {title}
                </Text>
                <Text fontSize="sm" pr={{ sm: "10px", base: "none" }} mt={2}>
                    {body}
                </Text>
            </Box>
            {/* コメントのときは、「コメント」、「いいね」、「シェア」を表示しない */}
            {commentVal === undefined || likeVal === undefined ? (
                <div />
            ) : (
                <ReactionButtons comment_val={commentVal} like_val={likeVal} />
            )}
        </Box>
    );
};
