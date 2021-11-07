import { useCallback } from "react";
import { useHistory } from "react-router-dom";

import apiClient from "../../client/apiClient";
import { useMessage } from "../message/useMessage";
import { useGetMe } from "./useGetMe";

export const usePostUpdateProfile = () => {
    const history = useHistory();
    const { showMessage } = useMessage();
    const { getMe } = useGetMe();

    const postUpdateProfile = useCallback(
        (
            name: string | undefined,
            job: string | undefined,
            body: string | undefined
        ) => {
            const data = {
                name: name,
                job: job,
                body: body,
            };

            if (name && job && body) {
                if (name.length > 10) {
                    showMessage({
                        title: "名前は10文字以下にしてください",
                        status: "error",
                    });
                } else if (job.length > 10) {
                    showMessage({
                        title: "職業名は10文字以下にしてください",
                        status: "error",
                    });
                } else if (body.length > 150) {
                    showMessage({
                        title: "プロフィール文は150文字以下にしてください",
                        status: "error",
                    });
                } else {
                    apiClient
                        .post(`/api/user/me/update`, data)
                        .then((res) => {
                            showMessage({
                                title: "プロフィールを更新しました",
                                status: "success",
                            });
                            getMe();
                            history.push("/");
                        })
                        .catch(() => {
                            showMessage({
                                title: "プロフィールの更新に失敗しました",
                                status: "error",
                            });
                        });
                }
            } else {
                showMessage({
                    title: "プロフィールの更新に失敗しました",
                    status: "error",
                });
            }
        },
        []
    );

    return { postUpdateProfile };
};
