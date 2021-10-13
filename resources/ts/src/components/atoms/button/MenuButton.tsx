import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  w?: string;
  onClick: () => void;
};

export const MenuButton: VFC<Props> = memo((props) => {
  const { children, w = "md", onClick } = props;
  return (
    <Button
      colorScheme="gray"
      variant="ghost"
      solid="none"
      w="w"
      _hover={{ cursor: "pointer" }}
      _focus={{ boxShadow: "none" }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
