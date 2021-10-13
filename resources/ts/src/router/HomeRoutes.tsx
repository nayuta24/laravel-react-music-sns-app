import { Recent } from "../components/pages/home/Recent";
import { FollowPosts } from "../components/pages/home/FollowPosts";
import { Popular } from "../components/pages/home/Popular";
import { PostDetail } from "../components/pages/home/PostDetail";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Recent />,
  },
  {
    path: "/follow_post",
    exact: false,
    children: <FollowPosts />,
  },
  {
    path: "/popular",
    exact: false,
    children: <Popular />,
  },
  {
    path: "/post/:id",
    exact: false,
    children: <PostDetail />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
