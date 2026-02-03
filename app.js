document.addEventListener("DOMContentLoaded", function() {
    // 地図初期化（高知市中心）
    const map = L.map("map").setView([33.559, 133.531], 10);

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    // 全月イベントデータ（緯度経度入り）
    const eventsData = {
      1: [
        { name: "高知龍馬マラソン", lat: 33.5070, lng: 133.5315, date: "1月中旬頃", place: "高知市内各所" },
        { name: "桂浜 初日の出イベント", lat: 33.4971, lng: 133.5716, date: "1/1", place: "桂浜公園 (高知市浦戸)" }
      ],
      2: [
        { name: "梅まつり", lat: 33.5673, lng: 133.5657, date: "2月上旬", place: "高知市土佐山 嫁石地区" },
        { name: "よさこい前夜祭（演舞）", lat: 33.4971, lng: 133.5716, date: "2/10", place: "桂浜公園 (高知市浦戸)" }
      ],
      3: [
        { name: "土佐神社 例大祭", lat: 33.5720, lng: 133.5660, date: "3/11-3/13", place: "土佐神社 (高知市一宮神撫)" },
        { name: "日曜市 春の出店", lat: 33.5540, lng: 133.5310, date: "3月全日", place: "高知市 日曜市通り" }
      ],
      4: [
        { name: "桂浜 潮騒フェスティバル", lat: 33.4971, lng: 133.5716, date: "4/13", place: "桂浜公園 (高知市浦戸)" },
        { name: "高知城 花回廊", lat: 33.5565, lng: 133.5310, date: "4月上旬", place: "高知城 (高知市丸ノ内)" }
      ],
      5: [
        { name: "初陣祭（長宗我部まつり）", lat: 33.5670, lng: 133.5715, date: "5月第2日曜", place: "若宮八幡宮 (高知市)" },
        { name: "高知グルメフェス", lat: 33.5570, lng: 133.5320, date: "5月下旬", place: "高知市中心街" }
      ],
      6: [
        { name: "高知県立牧野植物園 夏イベント", lat: 33.5660, lng: 133.5300, date: "6月中旬", place: "牧野植物園 (高知市五台山)" },
        { name: "鏡川 緑地公園 マルシェ", lat: 33.5570, lng: 133.5310, date: "6月下旬", place: "鏡川河畔" }
      ],
      7: [
        { name: "香南市 みなこい港まつり", lat: 33.5850, lng: 134.0535, date: "7/27", place: "吉川漁港 (香南市)" },
        { name: "高知港 夏祭り", lat: 33.5645, lng: 133.5315, date: "7月中", place: "高知港周辺 (高知市)" }
      ],
      8: [
        { name: "第72回 よさこい祭り", lat: 33.5580, lng: 133.5340, date: "8/9‑8/11", place: "追手筋 他 (高知市)" },
        { name: "高知市納涼花火大会", lat: 33.5570, lng: 133.5220, date: "8/9", place: "鏡川河畔 みどりの広場 (高知市)" }
      ],
      9: [
        { name: "大道芸フェス in 日曜市", lat: 33.5540, lng: 133.5310, date: "9/27‑9/28", place: "日曜市通り 高知市" },
        { name: "四万十川 秋まつり", lat: 33.1190, lng: 132.7060, date: "9月中旬", place: "四万十川 交流センター付近" }
      ],
      10: [
        { name: "桂浜 よさこいの日", lat: 33.4971, lng: 133.5716, date: "10/13", place: "桂浜公園 (高知市浦戸)" },
        { name: "はし拳大会", lat: 33.5570, lng: 133.5320, date: "10月上旬", place: "高知市中心街" }
      ],
      11: [
        { name: "土佐の豊穣祭", lat: 33.5575, lng: 133.5360, date: "11月初旬", place: "東洋電化中央公園 (高知市)" },
        { name: "龍馬まつり", lat: 33.4971, lng: 133.5716, date: "11月中旬", place: "桂浜公園 (高知市浦戸)" }
      ],
      12: [
        { name: "クリスマスマーケット in 高知", lat: 33.5575, lng: 133.5360, date: "12月中旬", place: "東洋電化中央公園 (高知市)" },
        { name: "年末カウントダウン", lat: 33.5570, lng: 133.5320, date: "12/31", place: "高知市中心街" }
      ]
    };

    document.getElementById("showEvents").addEventListener("click", function() {
        const month = parseInt(document.getElementById("monthSelect").value);

        // 既存マーカー削除
        map.eachLayer(layer => {
            if (layer instanceof L.Marker) map.removeLayer(layer);
        });

        const list = eventsData[month] || [];
        const message = document.getElementById("message");

        if (list.length === 0) {
            message.textContent = "その月のイベントデータがありません";
            return;
        }

        message.textContent = `${month}月のイベントを表示しています！`;

        list.forEach(evt => {
            L.marker([evt.lat, evt.lng])
             .addTo(map)
             .bindPopup(`<b>${evt.name}</b><br>${evt.place}<br>${evt.date}`);
        });
    });
});
