import {type RouteConfig, index} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    {
        path: "/profile",
        file: "routes/profile/index.tsx"
    },
    {
        path: "/todos",
        file: "routes/todos/index.tsx"
    }

] satisfies RouteConfig;
