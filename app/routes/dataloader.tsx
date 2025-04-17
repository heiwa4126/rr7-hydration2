// route("dataloader", "routes/dataloader.tsx")
import { useState } from "react";
import { projectName } from "~/consts";
import { type UUIDs, fetchUUIDs } from "~/fetcher";
import type { Route } from "./+types/dataloader";

export async function loader({}: Route.LoaderArgs) {
	// const uuids = await fetchUUIDs(); return { uuids };
	// return { uuids: ["00000000-0000-0000-0000-000000000000"] };
	return { uuids: ["(loading...)"] };
}

export async function clientLoader({}: Route.ClientLoaderArgs) {
	const uuids = await fetchUUIDs();
	return { uuids };
}

clientLoader.hydrate = true as const;

const title = "データローディングの練習";

export function meta({}: Route.MetaArgs) {
	return [{ title: `${title} - ${projectName}` }, { name: "description", content: title }];
}

function UUIDButton() {
	const [u1, setU1] = useState<UUIDs>();
	return (
		<button
			type="button"
			onClick={() => {
				fetchUUIDs().then((data) => {
					setU1(data);
				});
			}}
		>{`UUID:${u1?.[0]}`}</button>
	);
}

export default function Page({ loaderData, actionData, params, matches }: Route.ComponentProps) {
	return (
		<main>
			<h1>{title}</h1>
			<div>
				押すたびにUUIDを取得するボタン(デバッグ用): <UUIDButton />
			</div>
			<div>
				<p>UUID: {loaderData?.uuids[0]}</p>
			</div>
			<div>
				<p>ローダーデータ: {JSON.stringify(loaderData)}</p>
				<p>アクションデータ: {JSON.stringify(actionData)}</p>
				<p>ルートパラメータ: {JSON.stringify(params)}</p>
				<p>一致したルート: {JSON.stringify(matches)}</p>
			</div>
		</main>
	);
}
