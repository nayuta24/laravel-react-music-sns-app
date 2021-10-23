import { Recent } from "../components/pages/home/Recent";
import { FollowPosts } from "../components/pages/home/FollowPosts";
import { Popular } from "../components/pages/home/Popular";
import { PostDetail } from "../components/pages/home/detail/PostDetail";
import { HomePage404 } from "../components/pages/home/Home404";
import { Detail404 } from "../components/pages/home/detail/Detail404";
import { Login } from "../components/pages/Login";

export const homeRoutes = [
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
