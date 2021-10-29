import {
    Tabs,
    Text,
    Box,
    Flex,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react";
import { useHistory } from "react-router";
import { ChangeEvent, useState } from "react";

import { useLogin } from "../../hooks/login/useLogin";
import { Form } from "../molecules/Form";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useRegister } from "../../hooks/login/useRegister";

export const Login = () => {
    // ログインフォーム用state
    const [loginMailAddress, setLoginMailAddress] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    // 新規登録フォーム用state
    const [regMailAddress, setRegMailAddress] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [regPasswordConfirm, setRegPasswordConfirm] = useState("");
    const [regName, setRegName] = useState("");

    // ログインフォーム入力関数
    const onChangeLoginMailAddress = (e: ChangeEvent<HTMLInputElement>) =>
        setLoginMailAddress(e.target.value);

    const onChangeLoginPassword = (e: ChangeEvent<HTMLInputElement>) =>
        setLoginPassword(e.target.value);

    // ログインフォーム入力関数
    const onChangeRegMailAddress = (e: ChangeEvent<HTMLInputElement>) =>
        setRegMailAddress(e.target.value);

    const onChangeRegPassword = (e: ChangeEvent<HTMLInputElement>) =>
        setRegPassword(e.target.value);

    const onChangeRegPasswordConfirm = (e: ChangeEvent<HTMLInputElement>) =>
        setRegPasswordConfirm(e.target.value);

    const onChangeRegName = (e: ChangeEvent<HTMLInputElement>) =>
        setRegName(e.target.value);

    const { register } = useRegister();
    const onClickRegister = () => {
        register(regName, regMailAddress, regPassword);
    };

    const { login } = useLogin();
    const onClickLogin = () => {
        login(loginMailAddress, loginPassword);
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
                                <Form
                                    onChange={onChangeLoginMailAddress}
                                    value={loginMailAddress}
                                    inputType="email"
                                >
                                    メールアドレス
                                </Form>
                                <Box h="10px" />
                                <Form
                                    onChange={onChangeLoginPassword}
                                    value={loginPassword}
                                    inputType="password"
                                >
                                    パスワード
                                </Form>
                                <Box h="10px" />
                                <PrimaryButton
                                    onClick={onClickLogin}
                                    disabled={
                                        loginMailAddress === "" ||
                                        loginPassword === ""
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
                                <Form
                                    onChange={onChangeRegName}
                                    value={regName}
                                >
                                    ユーザー名（10字以内）
                                </Form>
                                <Box h="10px" />
                                <Form
                                    onChange={onChangeRegMailAddress}
                                    value={regMailAddress}
                                    inputType="email"
                                >
                                    メールアドレス
                                </Form>
                                <Box h="10px" />
                                <Form
                                    onChange={onChangeRegPassword}
                                    value={regPassword}
                                    inputType="password"
                                >
                                    パスワード（6~10字）
                                </Form>
                                <Box h="10px" />
                                <Form
                                    onChange={onChangeRegPasswordConfirm}
                                    value={regPasswordConfirm}
                                    inputType="password"
                                >
                                    パスワード（再入力）
                                </Form>
                                <Box h="10px" />
                                <PrimaryButton
                                    onClick={onClickRegister}
                                    disabled={
                                        regMailAddress === "" ||
                                        regPassword === "" ||
                                        regPasswordConfirm === "" ||
                                        regPassword !== regPasswordConfirm ||
                                        regName === ""
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
