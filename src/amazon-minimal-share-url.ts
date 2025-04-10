(function () {
  try {
    var url = window.location.href;
    var asinMatch = url.match(/\/dp\/([A-Z0-9]{10})/) ||
                    url.match(/\/gp\/product\/([A-Z0-9]{10})/) ||
                    url.match(/\/product\/([A-Z0-9]{10})/);
    if (!asinMatch) {
      alert('ASINが見つかりませんでした');
      return;
    }
    var asin = asinMatch[1];
    var minimalUrl = 'https://www.amazon.co.jp/dp/' + asin;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(minimalUrl).then(function () {
        alert('URL copied!');
      }).catch(function () {
        alert('Failed to copy URL');
      });
    } else {
      // Clipboard API未対応ブラウザ用フォールバック
      window.prompt('Copy this URL:', minimalUrl);
    }
  } catch (e) {
    alert('Error: ' + e.message);
  }
})();
