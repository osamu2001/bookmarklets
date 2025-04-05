// wayback-machine.ts

/**
 * 現在のページをWayback Machineのアーカイブ一覧ページにリダイレクトするブックマークレット
 */
(() => {
    // 現在のページのURLを取得
    const currentUrl = window.location.href;
    
    // Wayback Machineのアーカイブ一覧ページへのURLを構築
    const waybackUrl = `http://web.archive.org/web/*/${currentUrl}`;
    
    // Wayback Machineページにリダイレクト
    window.location.href = waybackUrl;
})();