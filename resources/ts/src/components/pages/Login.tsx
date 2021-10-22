import {
    Button,
    Input,
    Tabs,
    Text,
    Box,
    Flex,
    Divider,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react";
import { useHistory } from "react-router";
import { ChangeEvent, useState } from "react";

import { useLogin } from "../../hooks/login/useLogin";
import { Link } from "react-router-dom";
import { LoginForm } from "../molecules/LoginForm";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useRegister } from "../../hooks/login/useRegister";

export const Login = () => {
    const [mailAddress, setMailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirm, setPasswordConfirm] = useState("");
    const [name, setName] = useState("");

    const onChangeMailAddress = (e: ChangeEvent<HTMLInputElement>) =>
        setMailAddress(e.target.value);

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value);
    const onChangePasswordConfirm = (e: ChangeEvent<HTMLInputElement>) =>
        setPasswordConfirm(e.target.value);

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value);

    const { register } = useRegister();
    const onClickRegister = () => {
        register(name, mailAddress, password);
    };

    const { login } = useLogin();
    const onClickLogin = () => {
        login(mailAddress, password);
    };

    return (
        <Box
            w="100%"
            h="100vh"
            textAlign="center"
            pt={{ base: "none", sm: "10vh" }}
        >
            {/* 画面サイズが大きいときはカードの外に「Bebop！を表示」 */}
            <Text
                display={{ base: "none", sm: "inline" }}
                as="h1"
                fontSize="60px"
                bgGradient="linear(to-tl, green, #c4de71)"
                bgClip="text"
                fontWeight="bold"
            >
                Bebop!
            </Text>
            {/* 以下、カード内 */}
            <Flex
                bg="white"
                borderRadius={{ base: "none", sm: "10px" }}
                p="20px"
                shadow={{ base: "none", sm: "md" }}
                w={{ base: "100%", sm: "400px" }}
                h={{ base: "100%", sm: "500px" }}
                textAlign="center"
                flexDirection="column"
                mx="auto"
                mt={{ base: "none", sm: "2vh" }}
            >
                <Text
                    display={{ base: "inline", sm: "none" }}
                    as="h1"
                    fontSize="40px"
                    bgGradient="linear(to-tl, green, #c4de71)"
                    bgClip="text"
                    fontWeight="bold"
                    mb="20px"
                >
                    Bebop!
                </Text>
                {/* タブを作成 */}
                <Tabs isFitted variant="enclosed">
                    <TabList mb="1em">
                        <Tab
                            _selected={{ color: "white", bg: "green.400" }}
                            _focus={{ outline: "none" }}
                            fontWeight="bold"
                        >
                            ログイン
                        </Tab>
                        <Tab
                            _selected={{ color: "white", bg: "green.400" }}
                            _focus={{ outline: "none" }}
                            fontWeight="bold"
                        >
                            新規登録
                        </Tab>
                    </TabList>

                    {/* タブの中身を記述 */}
                    <TabPanels>
                        {/* ログイン用タブパネル */}
                        <TabPanel>
                            <Flex flexDirection="column" w="100%" h="100%">
                                <LoginForm
                                    onChange={onChangeMailAddress}
                                    value={mailAddress}
                                    inputType="email"
                                >
                                    メールアドレス
                                </LoginForm>
                                <LoginForm
                                    onChange={onChangePassword}
                                    value={password}
                                    inputType="password"
                                >
                                    パスワード
                                </LoginForm>
                                <PrimaryButton
                                    onClick={onClickLogin}
                                    disabled={
                                        mailAddress === "" || password === ""
                                    }
                                    mt="15px"
                                >
                                    ログイン
                                </PrimaryButton>
                            </Flex>
                        </TabPanel>
                        {/* 新規登録用タブパネル */}
                        <TabPanel>
                            <Flex flexDirection="column" w="100%" h="100%">
                                <LoginForm onChange={onChangeName} value={name}>
                                    ユーザー名
                                </LoginForm>
                                <LoginForm
                                    onChange={onChangeMailAddress}
                                    value={mailAddress}
                                    inputType="email"
                                >
                                    メールアドレス
                                </LoginForm>
                                <LoginForm
                                    onChange={onChangePassword}
                                    value={password}
                                    inputType="password"
                                >
                                    パスワード
                                </LoginForm>
                                <LoginForm
                                    onChange={onChangePasswordConfirm}
                                    value={password_confirm}
                                    inputType="password"
                                >
                                    パスワード（再入力）
                                </LoginForm>
                                <PrimaryButton
                                    onClick={onClickRegister}
                                    disabled={
                                        mailAddress === "" ||
                                        password === "" ||
                                        password_confirm === "" ||
                                        password !== password_confirm ||
                                        name === ""
                                    }
                                    mt="15px"
                                >
                                    新規登録
                                </PrimaryButton>
                            </Flex>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </Box>
    );
};
