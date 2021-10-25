import { memo, VFC } from "react";
import { useHistory } from "react-router-dom";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
} from "@chakra-ui/react";

type Props = {
    title: string;
    body: string;
};

export const Alert404: VFC<Props> = memo((props) => {
    const { title, body } = props;
    const history = useHistory();
    const onClickPageBack = () => {
        history.goBack();
    };

    return (
        <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            height="200px"
            pt="40px"
        >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
                {title}
            </AlertTitle>
            <AlertDescription maxWidth="sm">{body}</AlertDescription>
        </Alert>
    );
});
