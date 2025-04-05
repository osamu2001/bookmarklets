// archive-url.ts

/**
 * 現在のページをWayback Machineのアーカイブ版にリダイレクトするブックマークレット
 */
(() => {
    // 現在のページのURLを取得
    const currentUrl = window.location.href;
    
    // Wayback MachineのアーカイブページへのURLを構築
    const archiveUrl = `http://web.archive.org/web/*/${currentUrl}`;
    
    // アーカイブページにリダイレクト
    window.location.href = archiveUrl;
})();