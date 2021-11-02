import { Flex, Image, Box } from "@chakra-ui/react";
import { VFC } from "react";
import { ShortText } from "../../atoms/typography/ShortText";

type Props = {
    img: string;
    title: string;
    artist: string;
};

export const CardMusicBox: VFC<Props> = (props) => {
    const { img, title, artist } = props;

    return (
        <Flex
            flexFlow="column"
            w={{ sm: "28%", base: "100%" }}
            h={{ sm: "100%", base: "42%" }}
        >
            <Box
                boxSize={{ sm: "85%", base: "25vh" }}
                my="auto"
                mx={{ sm: "none", base: "auto" }}
                mt={{ sm: "20%", base: "none" }}
            >
                <Image src={img} mt="15%" shadow="5px 5px #EEE" />
                <Box mt="5%">
                    <ShortText fontSize="lg" fontWeight="bold">
                        {title}
                    </ShortText>
                    <ShortText fontSize="sm">{artist}</ShortText>
                </Box>
            </Box>
        </Flex>
    );
};
