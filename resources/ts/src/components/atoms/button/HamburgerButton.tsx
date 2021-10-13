import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { memo, VFC } from "react";

type Props = {
  display?: {};
  onClick: () => void;
  size?: string;
  ml?: string;
  my?: string;
};

export const HamburgerButton: VFC<Props> = memo((props) => {
  const { display, onClick, ml = "none", my = "none", size = "md" } = props;
  return (
    <IconButton
      bgGradient="linear(to-tl, green, #c4de71)"
      color="white"
      aria-label="Open menu"
      icon={<HamburgerIcon />}
      size={size}
      ml={ml}
      my={my}
      display={display}
      onClick={onClick}
    />
  );
});
