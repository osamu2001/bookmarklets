# Makefile

# ディレクトリ
SRC_DIR=src
DIST_DIR=dist

# ソースとターゲットの定義
TS_FILES=$(wildcard $(SRC_DIR)/*.ts)
BOOKMARKLETS=$(patsubst $(SRC_DIR)/%.ts,$(DIST_DIR)/%.bookmarklet.js,$(TS_FILES))

# タスク
all: $(DIST_DIR) $(BOOKMARKLETS)

# distディレクトリがなければ作成
$(DIST_DIR):
	mkdir -p $(DIST_DIR)

# パターンルール: すべてのTypeScriptファイルをブックマークレットに変換
$(DIST_DIR)/%.bookmarklet.js: $(SRC_DIR)/%.ts
	npx tsc $< --outFile /dev/stdout --target ES5 | npx uglify-js --compress --mangle | tr -d '\n' | sed 's/^/javascript:/' > $@

clean:
	rm -rf $(DIST_DIR)

.PHONY: all clean
