/**
 * 現在表示しているページのURLをChatGPTのクエリとして開くブックマークレット
 */
(() => {
    // 現在のページのURLを取得
    const currentUrl: string = window.location.href;

    // URLをエンコードして安全な形式に変換
    const encodedUrl: string = encodeURIComponent(currentUrl);

    // ChatGPTのチャット画面を新しいタブで開く（URLをクエリとして渡す）
    window.open(`https://chat.openai.com/?model=gpt-4o&q=${encodedUrl}`, '_blank');
    
})();
