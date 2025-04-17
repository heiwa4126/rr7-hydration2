import { projectName } from "~/consts";
import type { Route } from "./+types/home";

const title = "ハイドレーションの練習";

export function meta({}: Route.MetaArgs) {
	return [{ title: `${title} - ${projectName}` }, { name: "description", content: title }];
}

export default function Home() {
	return (
		<main>
			<h1>{title}</h1>
		</main>
	);
}
