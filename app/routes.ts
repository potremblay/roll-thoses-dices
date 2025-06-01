import { type RouteConfig, index, route } from "@react-router/dev/routes";

const basename = import.meta.env.VITE_BASE_PATH || "/";

export default [
  route(basename, "./components/mainLayout.tsx", [index("routes/home.tsx")]),
] satisfies RouteConfig;
