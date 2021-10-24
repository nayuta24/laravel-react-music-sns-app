import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState, VFC } from "react";
import { gradationGreen } from "../../atoms/color/gradationGreen";
import { MusicDetailBox } from "../MusicDetailBox";
import { GoButton } from "../../atoms/button/GoButton";

type Props = {
    goRate: () => void;
};

export const CreateTrackInfo: VFC<Props> = (props) => {
    const { goRate } = props;
    const [isExist, setIsExist] = useState<boolean>(false);

    return (
        <Box>
            {/* 入力された共有URIから楽曲が取得できたらその情報を表示 */}
            {isExist || (
                <MusicDetailBox
                    id={undefined}
                    title="???"
                    album={undefined}
                    artist={undefined}
                    release={undefined}
                />
            )}
            <Flex flexDirection="column" mt="30px">
                <Text fontSize="lg" ml="10px">
                    Spotifyの楽曲用シェアURLを入力してください
                </Text>
                <Flex mt="10px">
                    <Input w="80%" />
                    <Button
                        ml="2%"
                        w="20%"
                        bgGradient={gradationGreen}
                        color="white"
                        fontSize="lg"
                    >
                        確認
                    </Button>
                </Flex>
                <GoButton onClick={goRate} mt="30px" />
            </Flex>
        </Box>
    );
};
