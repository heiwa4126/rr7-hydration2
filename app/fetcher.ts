export type UUIDs = string[];

export async function fetchUUIDs(): Promise<UUIDs> {
	const res = await fetch("https://www.uuidtools.com/api/generate/v4/count/1");
	const data = (await res.json()) as UUIDs;
	return data;
}

export type TestData = {
	message: string;
};

export async function fetchTestData(): Promise<TestData> {
	const res = await fetch("https://dev-func.cfp-test2.pages.dev/api/greeting");
	const data = (await res.json()) as TestData;
	return data;
}
