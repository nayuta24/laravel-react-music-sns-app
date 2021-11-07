import { Avatar, Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useGetUser } from "../../hooks/api/useGetUser";
import { homeState } from "../../store/homeState";
import { meState } from "../../store/meState";

import { gradationGreen } from "../atoms/color/gradationGreen";
import { Form } from "../molecules/Form";
import { LoadingPageSpinner } from "../organisms/LoadingPageSpinner";

type Param = {
    id: string;
};

export const Profile = () => {
    const { id } = useParams<Param>();
    const setTopic = useSetRecoilState(homeState);
    setTopic({ topic: "profile" });
    const me = useRecoilValue(meState);

    const [name, setName] = useState<string | undefined>();
    const [job, setJob] = useState<string | undefined>();
    const [body, setBody] = useState<string | undefined>();

    const { getUser, user, loading } = useGetUser();

    // 自分のprofileを表示する場合は、recoilから参照
    // 他人の場合は、apiから取得する
    useEffect(() => {
        if (id === "me") {
            setName(me.name);
            setJob(me.job);
            setBody(me.body);

            setReadOnly(false);
            setCanFollow("none");
        } else {
            getUser(id);
            setReadOnly(true);
            setCanFollow("inline");
        }
    }, []);

    // 自分以外のprofileのレスポンスが返り次第、stateの変更を行う
    useEffect(() => {
        if (user) {
            setName(user.name);
            setJob(user.job);
            setBody(user.body);
        }
    }, [user]);

    // フォローボタンの表示、フォームの書き換え、更新ボタンの表示を管理
    const [readOnly, setReadOnly] = useState<boolean>();
    const [canFollow, setCanFollow] = useState<"none" | "inline">("inline");
    const [update, setUpdate] = useState<"none" | "inline">("none");

    // 書き換え処理（どれか一つでも書き換えられたら、更新ボタンが表示される）
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setUpdate("inline");
    };
    const onChangeJob = (e: ChangeEvent<HTMLInputElement>) => {
        setJob(e.target.value);
        setUpdate("inline");
    };
    const onChangeBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value);
        setUpdate("inline");
    };

    return (
        <>
            {loading ? (
                <LoadingPageSpinner />
            ) : (
                <Box>
                    {/* アイコン + フォローボタン */}
                    <Flex
                        h="200px"
                        bgGradient={gradationGreen}
                        borderRadius="15px"
                        boxShadow="6px 6px 8px lightgray "
                    >
                        <Flex mx="auto" pr="10%">
                            <Box w="140px" my="auto">
                                <Avatar
                                    bg="gray.400"
                                    src=""
                                    mb="5px"
                                    h="120px"
                                    w="120px"
                                />
                                <Button
                                    size="sm"
                                    colorScheme="whiteAlpha"
                                    display={canFollow}
                                >
                                    フォローする
                                </Button>
                            </Box>
                            {/* フォロワー関係 */}
                            <Flex my="auto">
                                <Box ml="40px" mt="30px">
                                    <Text
                                        color="white"
                                        fontSize="30px"
                                        fontWeight="semibold"
                                    >
                                        999
                                    </Text>
                                    <Text
                                        color="white"
                                        fontSize="25px"
                                        fontWeight="semibold"
                                    >
                                        follows
                                    </Text>
                                </Box>
                                <Box ml="60px" mt="30px">
                                    <Text
                                        color="white"
                                        fontSize="30px"
                                        fontWeight="semibold"
                                    >
                                        999
                                    </Text>
                                    <Text
                                        color="white"
                                        fontSize="25px"
                                        fontWeight="semibold"
                                    >
                                        follower
                                    </Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Box mt="20px">
                        <Box h="10px" />
                        <Form
                            value={name}
                            fontWeight="semibold"
                            onChange={onChangeName}
                            readOnly={readOnly}
                        >
                            名前
                        </Form>
                        <Box h="20px" />
                        <Form
                            value={job}
                            fontWeight="semibold"
                            onChange={onChangeJob}
                            readOnly={readOnly}
                        >
                            職業・肩書
                        </Form>
                        <Box h="20px" />
                        <Box>
                            <Flex>
                                <Text
                                    fontSize="sm"
                                    h="auto"
                                    fontWeight="semibold"
                                    color="gray.700"
                                    mb={1}
                                    ml={1}
                                >
                                    プロフィール
                                </Text>
                            </Flex>
                            <Textarea
                                type="text"
                                w="100%"
                                h="150px"
                                resize="none"
                                onChange={onChangeBody}
                                value={body}
                                readOnly={readOnly}
                            />
                        </Box>
                    </Box>
                    <Flex>
                        <Button
                            ml="auto"
                            mt="10px"
                            bg="orange.400"
                            color="white"
                            onClick={() => {}}
                            display={update}
                        >
                            更新する
                        </Button>
                    </Flex>
                </Box>
            )}
        </>
    );
};
