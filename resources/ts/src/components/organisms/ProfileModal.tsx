import { ChangeEvent, useEffect, useState, VFC } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Flex,
    Avatar,
    Text,
    Box,
    Textarea,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { meState } from "../../store/meState";
import { useGetUser } from "../../hooks/api/useGetUser";
import { UserData } from "../../type/api/UserDataType";
import { gradationGreen } from "../atoms/color/gradationGreen";
import { Form } from "../molecules/Form";

// 親コンポーネントからはidのみを受け取り、modalコンポーネント内でuser情報をリクエストする
type Props = {
    isOpen: boolean;
    onClose: () => void;
    id: string | undefined;
};

export const ProfileModal: VFC<Props> = (props) => {
    const { isOpen, onClose, id } = props;
    const me = useRecoilValue(meState);

    // オブジェクトとしてuser情報を受け止めるためのstate
    const [profile, setProfile] = useState<UserData>({
        id: undefined,
        name: undefined,
        email: undefined,
        title: undefined,
        image: undefined,
        body: undefined,
    });

    // ログインしているユーザー自身以外の情報を取得するためのhooks
    const { getUser } = useGetUser();

    // profileオブジェクトから、stateに割り振り、書き換えを可能とする（imageに関しては、一旦直接使用）
    const [name, setName] = useState<string | undefined>();
    const [job, setJob] = useState<string | undefined>();
    const [body, setBody] = useState<string | undefined>();

    // フォローボタンの表示、フォームの書き換え、更新ボタンの表示を管理
    const [readOnly, setReadOnly] = useState<boolean>(true);
    const [canFollow, setCanFollow] = useState<"none" | "inline">("inline");
    const [update, setUpdate] = useState<"none" | "inline">("none");

    // もし、親コンポーネントから受け取ったidがログインしているユーザーのidと同じ場合は、
    // リクエストを行わずにグローバルstateから参照する
    // また、プロフィールの編集を許可する
    useEffect(() => {
        {
            if (me.id === id) {
                // グローバル変数のmeを展開
                setProfile(Object.assign({}, me));
                // 書き換え可、フォローボタン非表示、更新ボタン表示
                setReadOnly(false);
                setCanFollow("none");
                setUpdate("inline");
            } else {
                // getUser(id)による戻り値を展開
                setProfile(Object.assign({}, getUser(id)));
                // 書き換え不可、フォローボタン表示、更新ボタン非表示
                setReadOnly(true);
                setCanFollow("inline");
                setUpdate("none");
            }
            // 各専用stateに格納
            setName(profile.name);
            setJob(profile.title);
            setBody(profile.body);
        }
    }, []);

    // 書き換え処理
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value);
    const onChangeJob = (e: ChangeEvent<HTMLInputElement>) =>
        setJob(e.target.value);
    const onChangeBody = (e: ChangeEvent<HTMLTextAreaElement>) =>
        setBody(e.target.value);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent h="600px" borderRadius="20px">
                <ModalHeader
                    mx="auto"
                    textAlign="center"
                    w="100%"
                    bgGradient={gradationGreen}
                    py="15px"
                    borderRadius="20px 20px 0 0"
                    boxShadow="xs"
                >
                    <Flex h="130px">
                        {/* ユーザーアイコン＋フォローボタン */}
                        <Box w="140px" my="auto">
                            <Avatar
                                bg="gray.400"
                                size="xl"
                                src={profile.image}
                                mb="5px"
                            />
                            <Button
                                size="xs"
                                colorScheme="whiteAlpha"
                                display={canFollow}
                            >
                                フォローする
                            </Button>
                        </Box>
                        {/* フォロー関係の値表示部分 */}
                        <Flex my="auto">
                            <Box ml="30px" mt="10px">
                                <Text color="white" fontSize="25px">
                                    999
                                </Text>
                                <Text color="white" fontSize="20px">
                                    follows
                                </Text>
                            </Box>
                            <Box ml="60px" mt="10px">
                                <Text color="white" fontSize="25px">
                                    999
                                </Text>
                                <Text color="white" fontSize="20px">
                                    follower
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </ModalHeader>
                {/* 各プロフィール情報 */}
                <ModalBody>
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
                </ModalBody>
                <ModalFooter>
                    {/* 更新、閉じるボタン */}
                    <Flex>
                        <Button
                            colorScheme="orange"
                            onClick={() => {}}
                            mr="20px"
                            display={update}
                        >
                            更新する
                        </Button>
                        <Button
                            bgGradient={gradationGreen}
                            color="white"
                            onClick={onClose}
                        >
                            Close
                        </Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
