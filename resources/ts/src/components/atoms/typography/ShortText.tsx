import { ReactNode, VFC } from "react";
import { Text } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    fontSize?:
        | string
        | {
              sm?: string;
              md?: string;
              base?: string;
          };
    fontWeight?: "bold" | "normal";
    mb?: string;
    w?: string;
    color?: string;
};

export const ShortText: VFC<Props> = (props) => {
    const { children, fontSize, mb, fontWeight = "normal", w, color } = props;
    return (
        // 親要素をはみ出さない一行のテキスト
        <Text
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            fontSize={fontSize}
            fontWeight={fontWeight}
            mb={mb}
            w={w}
            color={color}
        >
            {children}
        </Text>
    );
};
