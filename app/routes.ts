import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("dataloader", "routes/dataloader.tsx"),
	route("action", "routes/action.tsx"),
] satisfies RouteConfig;
