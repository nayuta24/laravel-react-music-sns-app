import { memo } from "react";
import { Spinner } from "@chakra-ui/react";

export const LoadingPageSpinner = memo(() => {
    return (
        <Spinner
            thickness="4px"
            speed="0.8s"
            emptyColor="gray.200"
            color="#c4de71"
            size="xl"
            m="auto"
            mt="50%"
        />
    );
});
