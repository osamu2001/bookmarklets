(() => {
  try {
    const url = window.location.href;
    const asinMatch = url.match(/\/(?:dp|gp\/product|product)\/([A-Z0-9]{10})/);
    
    if (!asinMatch) {
      alert('ASINが見つかりませんでした');
      return;
    }
    
    const asin = asinMatch[1];
    const minimalUrl = `https://www.amazon.co.jp/dp/${asin}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(minimalUrl)
        .then(() => alert('URL copied!'))
        .catch(() => alert('Failed to copy URL'));
    } else {
      // Clipboard API未対応ブラウザ用フォールバック
      window.prompt('Copy this URL:', minimalUrl);
    }
  } catch (e) {
    alert(`Error: ${e.message}`);
  }
})();
