# ブックマークレット一覧

## amazon-minimal-share-url.bookmarklet.js
<button onclick="navigator.clipboard.writeText(`javascript:(()=>{try{var t,r,a=window.location.href.match(/\/(?:dp|gp\/product|product)\/([A-Z0-9]{10})/);a?(t=a[1],r="https://www.amazon.co.jp/dp/".concat(t),navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(r).then(function(){return alert("URL copied!")}).catch(function(){return alert("Failed to copy URL")}):window.prompt("Copy this URL:",r)):alert("ASINが見つかりませんでした")}catch(t){alert("Error: ".concat(t.message))}})();`);">コピー</button>

```javascript
javascript:(()=>{try{var t,r,a=window.location.href.match(/\/(?:dp|gp\/product|product)\/([A-Z0-9]{10})/);a?(t=a[1],r="https://www.amazon.co.jp/dp/".concat(t),navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(r).then(function(){return alert("URL copied!")}).catch(function(){return alert("Failed to copy URL")}):window.prompt("Copy this URL:",r)):alert("ASINが見つかりませんでした")}catch(t){alert("Error: ".concat(t.message))}})();
```

## amazon-title-and-url-copy.bookmarklet.js
<button onclick="navigator.clipboard.writeText(`javascript:(()=>{try{var t,r,o,a,c,e=window.location.href.match(/\/(?:dp|gp\/product|product)\/([A-Z0-9]{10})/);e?(t=e[1],r="https://www.amazon.co.jp/dp/".concat(t),(o=document.getElementById("productTitle"))?(a=o.innerText.trim(),c="".concat(a,"
").concat(r),navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(c).then(function(){return alert("Copied!")}).catch(function(){return alert("Failed to copy")}):window.prompt("Copy this:",c)):alert("商品タイトルが見つかりませんでした")):alert("ASINが見つかりませんでした")}catch(t){alert("Error: ".concat(t.message))}})();`);">コピー</button>

```javascript
javascript:(()=>{try{var t,r,o,a,c,e=window.location.href.match(/\/(?:dp|gp\/product|product)\/([A-Z0-9]{10})/);e?(t=e[1],r="https://www.amazon.co.jp/dp/".concat(t),(o=document.getElementById("productTitle"))?(a=o.innerText.trim(),c="".concat(a,"
").concat(r),navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(c).then(function(){return alert("Copied!")}).catch(function(){return alert("Failed to copy")}):window.prompt("Copy this:",c)):alert("商品タイトルが見つかりませんでした")):alert("ASINが見つかりませんでした")}catch(t){alert("Error: ".concat(t.message))}})();
```

## open-chatgpt-query.bookmarklet.js
<button onclick="navigator.clipboard.writeText(`javascript:(()=>{var o=window.location.href,o=encodeURIComponent(o);window.open("https://chat.openai.com/?model=gpt-4o&q=".concat(o),"_blank")})();`);">コピー</button>

```javascript
javascript:(()=>{var o=window.location.href,o=encodeURIComponent(o);window.open("https://chat.openai.com/?model=gpt-4o&q=".concat(o),"_blank")})();
```

## open-perplexity-query.bookmarklet.js
<button onclick="navigator.clipboard.writeText(`javascript:(()=>{var n=window.location.href,n=encodeURIComponent(n);window.open("https://www.perplexity.ai/?q=".concat(n),"_blank")})();`);">コピー</button>

```javascript
javascript:(()=>{var n=window.location.href,n=encodeURIComponent(n);window.open("https://www.perplexity.ai/?q=".concat(n),"_blank")})();
```

## wayback-archive-list.bookmarklet.js
<button onclick="navigator.clipboard.writeText(`javascript:(()=>{var o=window.location.href,o="http://web.archive.org/web/*/".concat(o);window.location.href=o})();`);">コピー</button>

```javascript
javascript:(()=>{var o=window.location.href,o="http://web.archive.org/web/*/".concat(o);window.location.href=o})();
```

## wayback-latest-archive.bookmarklet.js
<button onclick="navigator.clipboard.writeText(`javascript:(()=>{var o=window.location.href,o="https://web.archive.org/web/".concat(o);window.location.href=o})();`);">コピー</button>

```javascript
javascript:(()=>{var o=window.location.href,o="https://web.archive.org/web/".concat(o);window.location.href=o})();
```

## youtube-caption-copy.bookmarklet.js
<button onclick="navigator.clipboard.writeText(`javascript:(()=>{var r,e;try{var t,n,a=window.ytInitialPlayerResponse;a?(t=null==(e=null==(r=a.captions)?void 0:r.playerCaptionsTracklistRenderer)?void 0:e.captionTracks)&&0!==t.length?(n=t[0].baseUrl+"&fmt=json3",fetch(n).then(function(r){if(r.ok)return r.json();throw alert("字幕の取得に失敗しました"),new Error("Fetch failed")}).then(function(r){var e=[];if(r.events)for(var t=0,n=r.events;t<n.length;t++){var a=n[t];if(a.segs)for(var o=0,l=a.segs;o<l.length;o++){var i=l[o];e.push(i.utf8)}}r=e.join(" ").replace(/\s+/g," ").trim();if(r)return navigator.clipboard.writeText(r).then(function(){alert("字幕をクリップボードにコピーしました")});alert("字幕テキストが空です")}).catch(function(r){console.error(r),alert("エラーが発生しました")})):alert("字幕が見つかりません"):alert("プレイヤー情報が取得できません")}catch(r){console.error(r),alert("エラーが発生しました")}})();`);">コピー</button>

```javascript
javascript:(()=>{var r,e;try{var t,n,a=window.ytInitialPlayerResponse;a?(t=null==(e=null==(r=a.captions)?void 0:r.playerCaptionsTracklistRenderer)?void 0:e.captionTracks)&&0!==t.length?(n=t[0].baseUrl+"&fmt=json3",fetch(n).then(function(r){if(r.ok)return r.json();throw alert("字幕の取得に失敗しました"),new Error("Fetch failed")}).then(function(r){var e=[];if(r.events)for(var t=0,n=r.events;t<n.length;t++){var a=n[t];if(a.segs)for(var o=0,l=a.segs;o<l.length;o++){var i=l[o];e.push(i.utf8)}}r=e.join(" ").replace(/\s+/g," ").trim();if(r)return navigator.clipboard.writeText(r).then(function(){alert("字幕をクリップボードにコピーしました")});alert("字幕テキストが空です")}).catch(function(r){console.error(r),alert("エラーが発生しました")})):alert("字幕が見つかりません"):alert("プレイヤー情報が取得できません")}catch(r){console.error(r),alert("エラーが発生しました")}})();
```

