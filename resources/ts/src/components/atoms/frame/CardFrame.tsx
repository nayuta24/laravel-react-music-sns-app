import { Flex } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  mb: string;
  onClick: () => void;
};

export const CardFrame: VFC<Props> = memo((props) => {
  const { children, mb, onClick } = props;

  return (
    <Flex
      w="90%"
      h="33vh"
      bg="white"
      borderRadius="10px"
      px="30px"
      py="15px"
      shadow="md"
      mb={mb}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Flex>
  );
});
