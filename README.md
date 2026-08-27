# rr7-hydration2

毎回異なる値を返す API を使って
hydration の練習をしてみる。

hydration というか

- データローディングの練習
- 初期 HTML になるべくプリレンダリングされるようにする

する練習。

SSR は時々変更してるので
[react-router.config.ts](react-router.config.ts)
を確認すること。

あと d2 で Cloudflare 呼んでるので、対象の Workers は消さないこと。
参照: [app/fetcher.ts](./app/fetcher.ts)

## 開発時の型チェック

```bash
pnpm run typecheck
```

`typecheck` は React Router のルート型を生成してから TypeScript の型チェックを実行します。
次のタイミングで実行してください。

- ルートを追加・削除したとき
- `loader()`、`clientLoader()`、`action()`、`clientAction()`、`meta()`、コンポーネントの引数を変更したとき
- 依存パッケージやルート設定を更新したとき
- コミットや Pull Request を作成する前

ルート型を更新せずに TypeScript のチェックだけを素早く実行したい場合は、`pnpm run lint-tsc` を使います。

## 参考

- [データローディング - React Router v7 ドキュメント 日本語版](https://react-router-docs-ja.techtalk.jp/start/framework/data-loading)
- [アクション - React Router v7 ドキュメント 日本語版](https://react-router-docs-ja.techtalk.jp/start/framework/actions)
- [クライアントデータ - React Router v7 ドキュメント 日本語版](https://react-router-docs-ja.techtalk.jp/how-to/client-data)

## メモ

loader()/clientLoader()は
routes.ts に記述されているもの
(ルートモジュール; Route Modules)
のみ

```typescript
// 型安全性/推論を提供します
import type { Route } from "./+types/...";
```

が使える。

[Address Book](https://reactrouter.com/tutorials/address-book)
では sidebar は layout() に入ってる。
