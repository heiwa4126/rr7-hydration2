import type { Config } from "@react-router/dev/config";

const pages = ["/", "/dataloader", "/action"];

export default {
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`

	// パターン 0 : `pnpm build && pnpm start`
	// ssr: true,

	// パターン 1 : `pnpm build && pnpm start`
	// ssr: true,
	// async prerender() {
	// 	return pages;
	// },

	// パターン 2 : `pnpm build && pnpm preview`
	ssr: false,
	async prerender() {
		return pages;
	},
} satisfies Config;
