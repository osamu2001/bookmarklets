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

    const titleElem = document.getElementById('productTitle');
    if (!titleElem) {
      alert('商品タイトルが見つかりませんでした');
      return;
    }
    
    const title = titleElem.innerText.trim();
    const textToCopy = `${title}\n${minimalUrl}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => alert('Copied!'))
        .catch(() => alert('Failed to copy'));
    } else {
      window.prompt('Copy this:', textToCopy);
    }
  } catch (e) {
    alert(`Error: ${e.message}`);
  }
})();
