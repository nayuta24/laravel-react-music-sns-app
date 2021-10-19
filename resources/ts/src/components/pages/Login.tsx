import { Button, Input } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { Text, Box, Flex, Divider } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

import { useAuth } from "../../hooks/login/useAuth";

export const Login = () => {
    const [mailAddress, setMailAddress] = useState("");
    const [password, setPassword] = useState("");

    const onChangeMailAddress = (e: ChangeEvent<HTMLInputElement>) =>
        setMailAddress(e.target.value);

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value);

    const { login } = useAuth();
    const onClickLogin = () => {
        login(mailAddress, password);
    };

    return (
        <Flex
            bg="white"
            borderRadius={{ base: "none", sm: "10px" }}
            px="30px"
            py="15px"
            shadow={{ base: "none", sm: "md" }}
            w={{ base: "100%", sm: "400px" }}
            h={{ base: "100vh", sm: "500px" }}
            mt={{ base: "none", sm: "10%" }}
            mx="auto"
            textAlign="center"
            flexDirection="column"
        >
            <Text
                as="h1"
                fontSize={{ base: "40px", sm: "60px" }}
                bgGradient="linear(to-tl, green, #c4de71)"
                bgClip="text"
                fontWeight="bold"
                my="20px"
                ml="10px"
            >
                Bebop!
            </Text>
            <Divider orientation="horizontal" mt={5} mb={5} />
            <Flex flexDirection="column" w="100%" h="100%">
                <Box my="auto" mt="10px">
                    <Box textAlign="start">
                        <Text ml={1} mb={1} fontSize="sm">
                            メールアドレス
                        </Text>
                        <Input
                            type="email"
                            onChange={onChangeMailAddress}
                            value={mailAddress}
                            mb={5}
                        />
                    </Box>
                    <Box textAlign="start" mt="12px">
                        <Text ml={1} mb={1} fontSize="sm">
                            パスワード
                        </Text>
                        <Input
                            type="password"
                            onChange={onChangePassword}
                            value={password}
                        />
                    </Box>
                </Box>

                <Button
                    onClick={onClickLogin}
                    mt="auto"
                    mb="30px"
                    bgGradient="linear(to-tl, green, #c4de71)"
                    color="white"
                    disabled={mailAddress === "" || password === ""}
                >
                    ログイン
                </Button>
            </Flex>
        </Flex>
    );
};
