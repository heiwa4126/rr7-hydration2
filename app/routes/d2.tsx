// route("dataloader", "routes/dataloader.tsx")
import { useState } from "react";
import { projectName } from "~/consts";
import { type TestData, fetchTestData } from "~/fetcher";
import type { Route } from "./+types/d2";

const title = "データローディングの練習2";

export function meta({}: Route.MetaArgs) {
	return [{ title: `${title} - ${projectName}` }, { name: "description", content: title }];
}

export async function loader({}: Route.LoaderArgs) {
	const testdata = await fetchTestData();
	// const testdata = {
	// 	message: "Hello, world!",
	// };
	return { testdata };
}

function TestDataButton() {
	const [td, setTestData] = useState<TestData>();
	return (
		<button
			type="button"
			onClick={() => {
				fetchTestData().then((data) => {
					setTestData(data);
				});
			}}
		>{`message:${td?.message}`}</button>
	);
}

export default function Page({ loaderData, actionData, params, matches }: Route.ComponentProps) {
	return (
		<main>
			<h1>{title}</h1>
			<p>
				押すたびにTestDataを取得するボタン(デバッグ用): <TestDataButton />
				<br />
				とはいうものの、固定データなので、1回押したら変わらない。
			</p>
			<p>TestData: {JSON.stringify(loaderData?.testdata)}</p>
		</main>
	);
}
