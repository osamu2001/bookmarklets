/**
 * 現在表示しているページのURLをPerplexity AIの検索クエリとして開くブックマークレット
 */
(() => {
    // 現在のページのURLを取得
    const currentUrl: string = window.location.href;

    // URLをエンコードして安全な形式に変換
    const encodedUrl: string = encodeURIComponent(currentUrl);

    // Perplexity AIの検索ページを新しいタブで開く
    window.open(`https://www.perplexity.ai/?q=${encodedUrl}`, '_blank');
})();
