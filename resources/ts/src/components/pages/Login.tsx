import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router";

export const Login = () => {
  const history = useHistory();
  const onLogin = () => {
    history.push("/home");
  };
  return (
    <>
      <h1>ログインページ</h1>
      <Button onClick={onLogin}>ログイン</Button>
    </>
  );
};
