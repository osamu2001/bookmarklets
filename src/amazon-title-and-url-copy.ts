(() => {
  try {
    const url = window.location.href;

    // URLからASIN（Amazonの商品ID）を抽出
    // 例: https://www.amazon.co.jp/dp/B000123456
    //     https://www.amazon.co.jp/gp/product/B000123456
    //     https://www.amazon.co.jp/product/B000123456
    // いずれにもマッチするように正規表現を工夫
    const asinMatch = url.match(/\/(?:dp|gp\/product|product)\/([A-Z0-9]{10})/);

    if (!asinMatch) {
      alert('ASINが見つかりませんでした');
      return;
    }

    // 正規表現のキャプチャグループからASINを取得
    const asin = asinMatch[1];

    const minimalUrl = `https://www.amazon.co.jp/dp/${asin}`;

    // 商品タイトルの要素をIDで取得
    const titleElem = document.getElementById('productTitle');

    if (!titleElem) {
      alert('商品タイトルが見つかりませんでした');
      return;
    }

    // 商品タイトルのテキストを取得し、前後の空白を除去
    const title = titleElem.innerText.trim();

    // クリップボードにコピーするテキスト（タイトルと短縮URL）を作成
    const textToCopy = `${title}\n${minimalUrl}`;

    // Clipboard APIが利用可能な場合
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => alert('Copied!')) // コピー成功時に通知
        .catch(() => alert('Failed to copy')); // コピー失敗時に通知
    } else {
      // Clipboard APIが使えない場合は、promptで手動コピーを促す
      window.prompt('Copy this:', textToCopy);
    }
  } catch (e) {
    // 予期しないエラーが発生した場合はエラーメッセージを表示
    alert(`Error: ${e.message}`);
  }
})();
