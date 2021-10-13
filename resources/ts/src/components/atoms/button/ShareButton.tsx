import { IconButton } from "@chakra-ui/react";
import { BsShareFill } from "react-icons/bs";

export const ShareButton = () => {
  return (
    <IconButton
      aria-label="like"
      icon={<BsShareFill />}
      size="0px"
      color="gray"
      bg="none"
    />
  );
};
