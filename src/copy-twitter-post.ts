/**
 * Twitterのポスト本文をクリップボードにコピーするブックマークレット
 * Clipboard APIを使った非同期コピー処理を導入し、コピー失敗時は手動コピー案内を表示
 */
(() => {
    try {
        const articleElements = document.querySelectorAll('article[data-testid="tweet"]');
        console.log('articleElements count:', articleElements.length);

        if (articleElements.length === 0) {
            console.log('ツイートが見つかりませんでした');
            return;
        }

        const mainArticle = articleElements[0];
        const tweetTextElement = mainArticle.querySelector('[data-testid="tweetText"]');
        console.log('tweetTextElement:', tweetTextElement);

        if (!tweetTextElement) {
            console.log('ツイートのテキストが見つかりませんでした');
            return;
        }

        const userNameElement = mainArticle.querySelector('div[dir="ltr"] > span');
        const userName = userNameElement ? userNameElement.textContent : '不明なユーザー';
        console.log('userName:', userName);

        const timeElement = mainArticle.querySelector('time');
        const timeText = timeElement ? timeElement.getAttribute('datetime') : '不明な日時';
        console.log('timeText:', timeText);

        const urlElement = mainArticle.querySelector('a[href*="/status/"]') as HTMLAnchorElement | null;
        const url = urlElement ? urlElement.href : '不明なURL';
        console.log('url:', url);

        const tweetText = tweetTextElement.textContent || '';
        console.log('tweetText:', tweetText);

        const copyText = `発言者: ${userName}\n日時: ${timeText}\nURL: ${url}\n本文:\n${tweetText}`;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(copyText).then(() => {
                console.log('ツイートをコピーしました');
            }).catch(err => {
                console.error('Clipboard APIでのコピーに失敗しました:', err);
                alert('コピーに失敗しました。テキストを手動でコピーしてください:\n\n' + copyText);
            });
        } else {
            // Clipboard API非対応の場合のフォールバック
            const textarea = document.createElement('textarea');
            textarea.value = copyText;
            textarea.style.position = 'fixed';
            textarea.style.top = '-9999px';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.setSelectionRange(0, textarea.value.length);
            const successful = document.execCommand('copy');
            document.body.removeChild(textarea);

            if (successful) {
                console.log('ツイートをコピーしました（フォールバック）');
            } else {
                alert('コピーに失敗しました。テキストを手動でコピーしてください:\n\n' + copyText);
            }
        }
    } catch (error) {
        console.error('エラーが発生しました:', error);
        alert('エラーが発生しました');
    }
})();
