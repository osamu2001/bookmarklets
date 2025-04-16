# Makefile

# ディレクトリ
SRC_DIR=src
DIST_DIR=dist

# ソースとターゲットの定義
TS_FILES=$(wildcard $(SRC_DIR)/*.ts)
BOOKMARKLETS=$(patsubst $(SRC_DIR)/%.ts,$(DIST_DIR)/%.bookmarklet.js,$(TS_FILES))
BOOKMARKLET_MD=bookmarklets.md

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

bookmarklet-md: $(BOOKMARKLETS)
	echo "# ブックマークレット一覧\n" > $(BOOKMARKLET_MD); \
	for f in $(BOOKMARKLETS); do \
	  name=$$(basename $$f); \
	  code=$$(cat $$f); \
	  echo "## $$name" >> $(BOOKMARKLET_MD); \
	  echo '<button onclick="navigator.clipboard.writeText(`'"$$code"'`);">コピー</button>' >> $(BOOKMARKLET_MD); \
	  echo '\n```javascript\n'"$$code"'\n```\n' >> $(BOOKMARKLET_MD); \
	done

.PHONY: all clean
