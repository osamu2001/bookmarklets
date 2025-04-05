/**
 * 現在のページをWayback Machineの最新アーカイブにリダイレクトするブックマークレット
 */
(() => {
    const currentUrl = window.location.href;
    const latestArchiveUrl = `https://web.archive.org/web/${currentUrl}`;
    window.location.href = latestArchiveUrl;
})();
