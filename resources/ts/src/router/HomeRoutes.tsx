import { Recent } from "../components/pages/home/Recent";
import { FollowPosts } from "../components/pages/home/FollowPosts";
import { Popular } from "../components/pages/home/Popular";
import { Detail404 } from "../components/pages/home/detail/Detail404";
import { PostDetail } from "../components/pages/home/detail/PostDetail";
import { Create } from "../components/pages/Create";

export const homeRoutes = [
    {
        path: "",
        exact: true,
        children: <Recent />,
    },
    {
        path: "follow_post",
        exact: false,
        // children: <FollowPosts />,
        children: <Recent />,
    },
    {
        path: "popular",
        exact: false,
        // children: <Popular />,
        children: <Recent />,
    },
    {
        path: "post/:id",
        exact: false,
        children: <PostDetail />,
    },
    {
        path: "create_post",
        exact: false,
        children: <Create />,
    },
    {
        path: "page404",
        exact: false,
        children: <Detail404 />,
    },
    {
        path: "*",
        exact: false,
        children: <Recent />,
    },
];
