(() => {
  try {
    const playerResponse = (window as any).ytInitialPlayerResponse;
    if (!playerResponse) {
      alert('プレイヤー情報が取得できません');
      return;
    }

    const captionTracks = playerResponse.captions?.playerCaptionsTracklistRenderer?.captionTracks;
    if (!captionTracks || captionTracks.length === 0) {
      alert('字幕が見つかりません');
      return;
    }

    const captionUrl = captionTracks[0].baseUrl + '&fmt=json3';

    fetch(captionUrl)
      .then(res => {
        if (!res.ok) {
          alert('字幕の取得に失敗しました');
          throw new Error('Fetch failed');
        }
        return res.json();
      })
      .then(data => {
        const texts: string[] = [];
        if (data.events) {
          for (const event of data.events) {
            if (event.segs) {
              for (const seg of event.segs) {
                texts.push(seg.utf8);
              }
            }
          }
        }

        const fullText = texts.join(' ').replace(/\s+/g, ' ').trim();

        if (!fullText) {
          alert('字幕テキストが空です');
          return;
        }

        return navigator.clipboard.writeText(fullText).then(() => {
          alert('字幕をクリップボードにコピーしました');
        });
      })
      .catch(e => {
        console.error(e);
        alert('エラーが発生しました');
      });
  } catch (e) {
    console.error(e);
    alert('エラーが発生しました');
  }
})();
