import { Text } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const HomePostTitle: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <Text
      as="h1"
      color="gray.500"
      mr="auto"
      mt="8px"
      fontSize={{ base: "18px", md: " 23px" }}
    >
      {children}
    </Text>
  );
};
