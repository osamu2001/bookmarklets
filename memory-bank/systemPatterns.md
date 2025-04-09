# System Patterns

## Architecture Overview
- `src/` 配下にTypeScriptで記述した各種ブックマークレット
- `Makefile` により一括ビルド
- 出力は `dist/` 配下の `.bookmarklet.js` ファイル
- 生成物は圧縮・難読化済みの即実行可能なコード
- **YouTube字幕コピーBookmarkletはYouTubeページ上で字幕データをfetchし、クリップボードにコピー**

## Key Technical Decisions
- TypeScriptを採用し型安全性を確保
- Makefileでビルド工程を自動化
- uglify-jsで圧縮・難読化
- ES5ターゲットで幅広いブラウザ互換性を確保
- **async/awaitは使わずPromiseチェーンで非同期処理**

## Design Patterns
- シンプルなビルドパイプライン
- 各ブックマークレットは独立したTypeScriptファイルとして管理
- **YouTube字幕コピーは即時関数内で完結**

## Component Relationships
- `src/*.ts` → (tsc, uglify-js) → `dist/*.bookmarklet.js`
- `Makefile` が全体のビルドを統括
- **YouTube字幕コピーBookmarkletはYouTubeページのJSオブジェクトを利用**

## Critical Implementation Paths
- `make` 実行
- `npx tsc` でES5にトランスパイル
- `npx uglify-js` で圧縮・難読化
- `sed` で `javascript:` 付与
- `dist/` に保存
- **YouTubeページでBookmarklet実行 → 字幕URL抽出 → fetch → テキスト抽出 → クリップボードコピー**
