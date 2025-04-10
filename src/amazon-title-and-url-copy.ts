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

    var titleElem = document.getElementById('productTitle');
    if (!titleElem) {
      alert('商品タイトルが見つかりませんでした');
      return;
    }
    var title = titleElem.innerText.trim();

    var textToCopy = title + '\n' + minimalUrl;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(function () {
        alert('Copied!');
      }).catch(function () {
        alert('Failed to copy');
      });
    } else {
      window.prompt('Copy this:', textToCopy);
    }
  } catch (e) {
    alert('Error: ' + e.message);
  }
})();
