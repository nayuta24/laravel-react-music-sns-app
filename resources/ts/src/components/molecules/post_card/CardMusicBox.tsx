import { Flex, Image, Box, Text } from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  img: string;
  title: string;
  artist: string;
};

export const CardMusicBox: VFC<Props> = (props) => {
  const { img, title, artist } = props;

  return (
    <Flex w="30%" p="auto">
      <Box m="auto">
        <Image src={img} boxSize="150" mt="15%" shadow="5px 5px #EEE" />
        <Box mt="5%">
          <Text fontSize="md" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="xs">{artist}</Text>
        </Box>
      </Box>
    </Flex>
  );
};
