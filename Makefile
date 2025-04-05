# Makefile

# ファイル名
TS_FILE=open-perplexity-query.ts
MIN_JS_FILE=open-perplexity-query.min.js

# タスク
all: $(MIN_JS_FILE)

$(MIN_JS_FILE): $(TS_FILE)
	npx tsc $(TS_FILE) --outFile /dev/stdout --target ES5 | npx uglify-js --compress --mangle > $(MIN_JS_FILE)

clean:
	rm -f $(MIN_JS_FILE)

.PHONY: all clean