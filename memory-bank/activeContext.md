# Active Context

## Current Focus
YouTube字幕コピーBookmarkletの開発・ビルド・動作検証完了。  
メモリバンクの最新化。

## Recent Changes
- `src/youtube-caption-copy.ts` を新規作成
- async/awaitを使わずPromiseチェーンに書き換え
- `make` でビルド成功
- ユーザーによる動作確認で**正常動作を確認済み**
- メモリバンクの全ファイルを更新

## Next Steps
- 必要に応じて字幕コピーBookmarkletのUI改善や多言語対応
- 他のブックマークレットの追加・改善
- プロジェクトの拡張

## Active Decisions & Considerations
- async/awaitは使わずES5互換を優先
- 依存は最小限に抑える
- YouTubeの仕様変更に備え柔軟に対応できる設計

## Important Patterns & Preferences
- TypeScript + Makefileでシンプルなビルド
- fetchとClipboard APIを活用
- Promiseチェーンで非同期処理

## Learnings & Insights
- YouTubeの字幕はJSONで取得可能
- async/awaitはES5ターゲットでは使えないため注意
- Bookmarkletは即時関数で完結させるのが安全
- **ユーザーによる実機検証で正常動作を確認できた**
