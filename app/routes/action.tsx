import { Form } from "react-router";
// route("dataloader", "routes/dataloader.tsx")
import { projectName } from "~/consts";
import type { Route } from "./+types/action";

const title = "アクションの練習";

export function meta({}: Route.MetaArgs) {
	return [{ title: `${title} - ${projectName}` }, { name: "description", content: title }];
}

export async function clientAction({ request }: Route.ClientActionArgs) {
	const formData = await request.formData();
	// console.log({ data: formData.getAll("title") });
	return { title: formData.getAll("title")[0] as string };
}

export default function Page({ actionData }: Route.ComponentProps) {
	return (
		<main>
			<h1>{title}</h1>
			<p>クライアント側だけで更新</p>
			<Form method="post">
				<input type="text" name="title" />
				<button type="submit">送信</button>
			</Form>
			<p>{actionData ? <>{actionData.title} に更新されました。</> : null}</p>
			{/* <div>
				<p>ローダーデータ: {JSON.stringify(loaderData)}</p>
				<p>アクションデータ: {JSON.stringify(actionData)}</p>
				<p>ルートパラメータ: {JSON.stringify(params)}</p>
				<p>一致したルート: {JSON.stringify(matches)}</p>
			</div> */}
		</main>
	);
}
