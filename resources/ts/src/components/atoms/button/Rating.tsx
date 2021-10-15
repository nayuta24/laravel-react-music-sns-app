import { Text } from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
    rating: number;
};
let rating_stars: string;

export const Rating: VFC<Props> = (props) => {
    const { rating } = props;
    rating_stars = "";

    for (let i = 0; i < 5; i++) {
        {
            i < rating ? (rating_stars += "★") : (rating_stars += "☆");
        }
    }

    return (
        <Text fontSize="30px" color="orange">
            {rating_stars}
        </Text>
    );
};
