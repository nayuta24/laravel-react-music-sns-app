import { memo, VFC } from "react";
import { Box, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  body: string;
};

export const CardComment: VFC<Props> = memo((props) => {
  const { title, body } = props;

  return (
    <Box h="60%" py="1%" my="auto">
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="sm" mt="2%">
        {body}
      </Text>
    </Box>
  );
});
