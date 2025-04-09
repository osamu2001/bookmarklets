# Tech Context

## Technologies Used
- TypeScript 5.8.x
- uglify-js（グローバルインストール不要、npx経由で使用）
- GNU Make
- Node.js（npx利用のため）
- **YouTube字幕コピーBookmarkletはfetch APIとClipboard APIを利用**

## Development Setup
- `npm install` でTypeScript依存をインストール
- `make` コマンドでビルド
- `make clean` でビルド成果物削除

## Technical Constraints
- 生成物はES5互換
- 依存は最小限
- ブラウザで即実行可能なコード生成
- **YouTubeの仕様変更により動作しなくなる可能性あり**

## Dependencies
- `typescript` (devDependency)
- `uglify-js` (npx経由で利用、package.jsonには未記載)

## Tool Usage Patterns
- TypeScriptで型安全に開発
- Makefileでビルド自動化
- npxでツールを都度呼び出し、グローバルインストール不要
- **async/awaitは使わずPromiseチェーンで非同期処理**
- **Clipboard APIで字幕をコピー**
