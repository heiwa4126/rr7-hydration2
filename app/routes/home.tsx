import { projectName } from "~/consts";

const title = "ハイドレーションの練習";

export function meta() {
	return [{ title: `${title} - ${projectName}` }, { name: "description", content: title }];
}

export default function Home() {
	return (
		<main>
			<h1>{title}</h1>
		</main>
	);
}
