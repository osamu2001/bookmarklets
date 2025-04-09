# Active Context

## Current Focus
メモリバンクの整備とドキュメントの最新化。  
TypeScript製ブックマークレットの開発・管理体制の確立。

## Recent Changes
- メモリバンクの初期化と全ファイルのテンプレート作成
- `projectbrief.md` 〜 `techContext.md` まで内容を最新化

## Next Steps
- 新規ブックマークレットの追加
- 既存コードの改善や整理
- ビルド・配布フローの改善があれば対応

## Active Decisions & Considerations
- 依存は最小限に抑える方針
- TypeScriptで型安全性を確保
- Makefileでシンプルなビルドを維持

## Important Patterns & Preferences
- 各ブックマークレットは独立したTypeScriptファイル
- 圧縮・難読化済みのコードを生成
- ES5ターゲットで幅広い互換性を確保

## Learnings & Insights
- Makefileとnpxの組み合わせで依存管理が容易
- TypeScriptにより保守性・安全性が向上
