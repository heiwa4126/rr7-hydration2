export type UUIDs = string[];

export async function fetchUUIDs(): Promise<UUIDs> {
	const res = await fetch("https://www.uuidtools.com/api/generate/v4/count/1");
	const data = (await res.json()) as UUIDs;
	return data;
}
