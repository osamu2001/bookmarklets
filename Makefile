# Makefile

# ディレクトリ
SRC_DIR=src
DIST_DIR=dist

# ファイル名
TS_FILES=$(SRC_DIR)/open-perplexity-query.ts $(SRC_DIR)/wayback-archive-list.ts $(SRC_DIR)/wayback-latest-archive.ts
BOOKMARKLETS=$(DIST_DIR)/open-perplexity-query.bookmarklet.js $(DIST_DIR)/wayback-archive-list.bookmarklet.js $(DIST_DIR)/wayback-latest-archive.bookmarklet.js

# タスク
all: $(BOOKMARKLETS)

# open-perplexity-query.ts をブックマークレット形式に直接変換
$(DIST_DIR)/open-perplexity-query.bookmarklet.js: $(SRC_DIR)/open-perplexity-query.ts
	npx tsc $(SRC_DIR)/open-perplexity-query.ts --outFile /dev/stdout --target ES5 | npx uglify-js --compress --mangle | tr -d '\n' | sed 's/^/javascript:/' > $(DIST_DIR)/open-perplexity-query.bookmarklet.js

# wayback-archive-list.ts をブックマークレット形式に直接変換
$(DIST_DIR)/wayback-archive-list.bookmarklet.js: $(SRC_DIR)/wayback-archive-list.ts
	npx tsc $(SRC_DIR)/wayback-archive-list.ts --outFile /dev/stdout --target ES5 | npx uglify-js --compress --mangle | tr -d '\n' | sed 's/^/javascript:/' > $(DIST_DIR)/wayback-archive-list.bookmarklet.js

# wayback-latest-archive.ts をブックマークレット形式に直接変換
$(DIST_DIR)/wayback-latest-archive.bookmarklet.js: $(SRC_DIR)/wayback-latest-archive.ts
	npx tsc $(SRC_DIR)/wayback-latest-archive.ts --outFile /dev/stdout --target ES5 | npx uglify-js --compress --mangle | tr -d '\n' | sed 's/^/javascript:/' > $(DIST_DIR)/wayback-latest-archive.bookmarklet.js

clean:
	rm -f $(BOOKMARKLETS) *.min.js $(DIST_DIR)/*.min.js

.PHONY: all clean
