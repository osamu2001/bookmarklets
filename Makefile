# Makefile

# ファイル名
TS_FILES=open-perplexity-query.ts wayback-machine.ts
BOOKMARKLETS=open-perplexity-query.bookmarklet.js wayback-machine.bookmarklet.js

# タスク
all: $(BOOKMARKLETS)

# open-perplexity-query.ts をブックマークレット形式に直接変換
open-perplexity-query.bookmarklet.js: open-perplexity-query.ts
	npx tsc open-perplexity-query.ts --outFile /dev/stdout --target ES5 | npx uglify-js --compress --mangle | tr -d '\n' | sed 's/^/javascript:/' > open-perplexity-query.bookmarklet.js

# wayback-machine.ts をブックマークレット形式に直接変換
wayback-machine.bookmarklet.js: wayback-machine.ts
	npx tsc wayback-machine.ts --outFile /dev/stdout --target ES5 | npx uglify-js --compress --mangle | tr -d '\n' | sed 's/^/javascript:/' > wayback-machine.bookmarklet.js

clean:
	rm -f $(BOOKMARKLETS) *.min.js archive-url.bookmarklet.js

.PHONY: all clean