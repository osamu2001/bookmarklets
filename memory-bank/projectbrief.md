# Project Brief

## Overview
便利なブラウザ用ブックマークレットをTypeScriptで開発・管理し、ビルドして配布するコレクション。

## Core Requirements
- 複数のブックマークレットをTypeScriptで記述
- `make` コマンドで一括ビルド可能
- 生成物は圧縮済みの `javascript:` 付きコード
- シンプルな依存関係（TypeScript, uglify-js）

## Goals
- 再利用性の高いブックマークレットの蓄積
- コードの保守性向上
- 簡単なビルドと配布

## Scope
- ブックマークレットの作成とビルド
- TypeScriptの利用
- 圧縮・難読化処理
- 配布用ファイルの生成

## Constraints
- 外部依存は最小限（TypeScript, uglify-js）
- ブラウザの互換性確保（ES5ターゲット）
