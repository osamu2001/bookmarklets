# ブックマークレット一覧

## amazon-minimal-share-url.bookmarklet.js

```javascript
javascript:(()=>{try{var t,r,a=window.location.href.match(/\/(?:dp|gp\/product|product)\/([A-Z0-9]{10})/);a?(t=a[1],r="https://www.amazon.co.jp/dp/".concat(t),navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(r).then(function(){return alert("URL copied!")}).catch(function(){return alert("Failed to copy URL")}):window.prompt("Copy this URL:",r)):alert("ASINが見つかりませんでした")}catch(t){alert("Error: ".concat(t.message))}})();
```

## amazon-title-and-url-copy.bookmarklet.js

```javascript
javascript:(()=>{try{var t,r,o,a,c,e=window.location.href.match(/\/(?:dp|gp\/product|product)\/([A-Z0-9]{10})/);e?(t=e[1],r="https://www.amazon.co.jp/dp/".concat(t),(o=document.getElementById("productTitle"))?(a=o.innerText.trim(),c="".concat(a,"\n").concat(r),navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(c).then(function(){return alert("Copied!")}).catch(function(){return alert("Failed to copy")}):window.prompt("Copy this:",c)):alert("商品タイトルが見つかりませんでした")):alert("ASINが見つかりませんでした")}catch(t){alert("Error: ".concat(t.message))}})();
```

## copy-twitter-post.bookmarklet.js

```javascript
javascript:(()=>{try{var t,e,o,n,a,r,l,c,d,i,p=document.querySelectorAll('article[data-testid="tweet"]');0===p.length?alert("ツイートが見つかりませんでした。Twitterのツイート上で実行してください。"):(e=(t=p[0]).querySelector('[data-testid="tweetText"]'))?(n=(o=t.querySelector('div[dir="ltr"] > span'))?o.textContent:"不明なユーザー",r=(a=t.querySelector("time"))?a.getAttribute("datetime"):"不明な日時",l=t.querySelector('a[href*="/status/"]'),c="発言者: "+n+"\n日時: "+r+"\nURL: "+(l&&"A"===l.tagName?l.getAttribute("href"):"不明なURL")+"\n本文:\n"+(e.textContent||""),d=function(t){var e=document.createElement("textarea"),t=(e.value=t,e.style.position="fixed",e.style.top="-9999px",e.style.left="-9999px",document.body.appendChild(e),e.focus(),e.setSelectionRange(0,e.value.length),document.execCommand("copy"));return document.body.removeChild(e),t},navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(c).then(function(){alert("ツイートをコピーしました。ChatGPT検索ページに遷移します。");var t=encodeURIComponent(c);window.open("https://chatgpt.com/?model=gpt-4o&q="+t,"_blank")}).catch(function(t){console.error("Clipboard APIでのコピーに失敗しました:",t),d(c)?(alert("ツイートをコピーしました（フォールバック）。ChatGPT検索ページに遷移します。"),t=encodeURIComponent(c),window.open("https://chatgpt.com/?model=gpt-4o&q="+t,"_blank")):alert("コピーに失敗しました。テキストを手動でコピーしてください:\n\n"+c)}):d(c)?(alert("ツイートをコピーしました（フォールバック）。ChatGPT検索ページに遷移します。"),i="https://chatgpt.com/?model=gpt-4o&q="+encodeURIComponent(c),window.open(i,"_blank")):alert("コピーに失敗しました。テキストを手動でコピーしてください:\n\n"+c)):alert("ツイートのテキストが見つかりませんでした。")}catch(t){console.error("エラーが発生しました:",t),alert("エラーが発生しました。")}})();
```

## open-chatgpt-copy-query.bookmarklet.js

```javascript
javascript:(()=>{try{var t,e,n,o,r,a,l,c,i,d,p=document.querySelectorAll('article[data-testid="tweet"]');0===p.length?alert("ツイートが見つかりませんでした。Twitterのツイート上で実行してください。"):(e=(t=p[0]).querySelector('[data-testid="tweetText"]'))?(o=(n=t.querySelector('div[dir="ltr"] > span'))?n.textContent:"不明なユーザー",a=(r=t.querySelector("time"))?r.getAttribute("datetime"):"不明な日時",l=t.querySelector('a[href*="/status/"]'),c="発言者: "+o+"\n\n日時: "+a+"\n\nURL: "+(l&&"A"===l.tagName?window.location.origin+l.getAttribute("href"):"不明なURL")+"\n\n本文:\n"+(e.textContent||"").replace(/\r\n|\r|\n/g,"\n"),i=function(t){var e=document.createElement("textarea"),t=(e.value=t,e.style.position="fixed",e.style.top="-9999px",e.style.left="-9999px",document.body.appendChild(e),e.focus(),e.setSelectionRange(0,e.value.length),document.execCommand("copy"));return document.body.removeChild(e),t},navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(c).then(function(){alert("ツイートをコピーしました。ChatGPT検索ページに遷移します。");var t=encodeURIComponent(c);window.open("https://chatgpt.com/?model=gpt-4o&q="+t,"_blank")}).catch(function(t){console.error("Clipboard APIでのコピーに失敗しました:",t),i(c)?(alert("ツイートをコピーしました（フォールバック）。ChatGPT検索ページに遷移します。"),t=encodeURIComponent(c),window.open("https://chatgpt.com/?model=gpt-4o&q="+t,"_blank")):alert("コピーに失敗しました。テキストを手動でコピーしてください:\\n\\n"+c)}):i(c)?(alert("ツイートをコピーしました（フォールバック）。ChatGPT検索ページに遷移します。"),d="https://chatgpt.com/?model=gpt-4o&q="+encodeURIComponent(c),window.open(d,"_blank")):alert("コピーに失敗しました。テキストを手動でコピーしてください:\\n\\n"+c)):alert("ツイートのテキストが見つかりませんでした。")}catch(t){console.error("エラーが発生しました:",t),alert("エラーが発生しました。")}})();
```

## open-chatgpt-query.bookmarklet.js

```javascript
javascript:(()=>{var o=window.location.href,o=encodeURIComponent(o);window.open("https://chat.openai.com/?model=gpt-4o&q=".concat(o),"_blank")})();
```

## open-gemini-query.bookmarklet.js

```javascript

```

## open-perplexity-query.bookmarklet.js

```javascript
javascript:(()=>{var n=window.location.href,n=encodeURIComponent(n);window.open("https://www.perplexity.ai/?q=".concat(n),"_blank")})();
```

## wayback-archive-list.bookmarklet.js

```javascript
javascript:(()=>{var o=window.location.href,o="http://web.archive.org/web/*/".concat(o);window.location.href=o})();
```

## wayback-latest-archive.bookmarklet.js

```javascript
javascript:(()=>{var o=window.location.href,o="https://web.archive.org/web/".concat(o);window.location.href=o})();
```

## youtube-caption-copy.bookmarklet.js

```javascript
javascript:(()=>{var r,e;try{var t,n,a=window.ytInitialPlayerResponse;a?(t=null==(e=null==(r=a.captions)?void 0:r.playerCaptionsTracklistRenderer)?void 0:e.captionTracks)&&0!==t.length?(n=t[0].baseUrl+"&fmt=json3",fetch(n).then(function(r){if(r.ok)return r.json();throw alert("字幕の取得に失敗しました"),new Error("Fetch failed")}).then(function(r){var e=[];if(r.events)for(var t=0,n=r.events;t<n.length;t++){var a=n[t];if(a.segs)for(var o=0,l=a.segs;o<l.length;o++){var i=l[o];e.push(i.utf8)}}r=e.join(" ").replace(/\s+/g," ").trim();if(r)return navigator.clipboard.writeText(r).then(function(){alert("字幕をクリップボードにコピーしました")});alert("字幕テキストが空です")}).catch(function(r){console.error(r),alert("エラーが発生しました")})):alert("字幕が見つかりません"):alert("プレイヤー情報が取得できません")}catch(r){console.error(r),alert("エラーが発生しました")}})();
```

