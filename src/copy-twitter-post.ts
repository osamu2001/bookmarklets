/**
 * Twitterのツイートコピー機能とChatGPT遷移機能を統合したブックマークレット
 * ES5互換でPromiseやasync/awaitを使わずに実装
 */
(function() {
    try {
        // Twitterのツイート要素を取得
        var articleElements = document.querySelectorAll('article[data-testid="tweet"]');
        if (articleElements.length === 0) {
            alert('ツイートが見つかりませんでした。Twitterのツイート上で実行してください。');
            return;
        }

        var mainArticle = articleElements[0];
        var tweetTextElement = mainArticle.querySelector('[data-testid="tweetText"]');
        if (!tweetTextElement) {
            alert('ツイートのテキストが見つかりませんでした。');
            return;
        }

        var userNameElement = mainArticle.querySelector('div[dir="ltr"] > span');
        var userName = userNameElement ? userNameElement.textContent : '不明なユーザー';

        var timeElement = mainArticle.querySelector('time');
        var timeText = timeElement ? timeElement.getAttribute('datetime') : '不明な日時';

        var urlElement = mainArticle.querySelector('a[href*="/status/"]');
        var url = (urlElement && urlElement.tagName === 'A') ? urlElement.getAttribute('href') : '不明なURL';

        var tweetText = tweetTextElement.textContent || '';

        var copyText = '発言者: ' + userName + '\n日時: ' + timeText + '\nURL: ' + url + '\n本文:\n' + tweetText;

        // クリップボードにコピーするフォールバック関数
        const copyToClipboardFallback = (text: string) => {
            var textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.top = '-9999px';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.setSelectionRange(0, textarea.value.length);
            var successful = document.execCommand('copy');
            document.body.removeChild(textarea);
            return successful;
        }

        // Clipboard APIが使えれば使い、なければフォールバック
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(copyText).then(function() {
                alert('ツイートをコピーしました。ChatGPT検索ページに遷移します。');
                var encodedText = encodeURIComponent(copyText);
                var targetUrl = 'https://chatgpt.com/?model=gpt-4o&q=' + encodedText;
                window.open(targetUrl, '_blank');
            }).catch(function(err) {
                console.error('Clipboard APIでのコピーに失敗しました:', err);
                var fallbackSuccess = copyToClipboardFallback(copyText);
                if (fallbackSuccess) {
                    alert('ツイートをコピーしました（フォールバック）。ChatGPT検索ページに遷移します。');
                    var encodedText = encodeURIComponent(copyText);
                    var targetUrl = 'https://chatgpt.com/?model=gpt-4o&q=' + encodedText;
                    window.open(targetUrl, '_blank');
                } else {
                    alert('コピーに失敗しました。テキストを手動でコピーしてください:\n\n' + copyText);
                }
            });
        } else {
            var fallbackSuccess = copyToClipboardFallback(copyText);
            if (fallbackSuccess) {
                alert('ツイートをコピーしました（フォールバック）。ChatGPT検索ページに遷移します。');
                var encodedText = encodeURIComponent(copyText);
                var targetUrl = 'https://chatgpt.com/?model=gpt-4o&q=' + encodedText;
                window.open(targetUrl, '_blank');
            } else {
                alert('コピーに失敗しました。テキストを手動でコピーしてください:\n\n' + copyText);
            }
        }
    } catch (error) {
        console.error('エラーが発生しました:', error);
        alert('エラーが発生しました。');
    }
})();
