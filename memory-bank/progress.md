# Progress

## What Works
- TypeScript製の複数ブックマークレットのビルドが可能
- Makefileで一括ビルド・圧縮・難読化が自動化済み
- メモリバンクの整備完了

## What's Left to Build
- 新規ブックマークレットの追加
- 既存コードの改善
- ビルド・配布フローのさらなる最適化

## Current Status
- メモリバンクは最新状態
- ビルド環境は整備済み
- 新規開発・改善フェーズに移行可能

## Known Issues
- uglify-jsはpackage.jsonに未記載（npx経由で問題なし）
- ブックマークレットの数が少ない（今後追加予定）

## Evolution of Project Decisions
- TypeScript採用により保守性向上
- Makefileによるビルド自動化
- 依存は最小限に抑える方針を継続
