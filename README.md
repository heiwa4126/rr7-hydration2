# rr7-hydration2

毎回異なる値を返す API を使って
hydration の練習をしてみる。

hydration というか

- データローディングの練習
- 初期 HTML になるべくプリレンダリングされるようにする

する練習。

SSR は時々変更してるので
[react-router.config.ts](react-router.config.ts)
を確認すること

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
