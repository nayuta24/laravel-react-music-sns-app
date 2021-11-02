import { Recent } from "../components/pages/posts/Recent";
import { FollowPosts } from "../components/pages/posts/FollowPosts";
import { Popular } from "../components/pages/posts/Popular";
import { PostDetail } from "../components/pages/Detail";
import { Create } from "../components/pages/Create";
import { Page404 } from "../components/pages/Page404";

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
        children: <Page404 />,
    },
    {
        path: "*",
        exact: false,
        children: <Recent />,
    },
];
