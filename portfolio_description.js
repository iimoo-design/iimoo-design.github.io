//將作品描述寫在這裡
const description = [
    {
        "專案名": "暮森森",
        "副標題": "副標題",
        "圖片連結": "./assets/img/portfolio/w2/",
        "描述": "Use this area to describe your project. Markdown supported. This entry (project1.md) uses links for the image sources. All other projects in the portfolio use local images. Both work just fine! Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "區域": "宜蘭",
        "日期": "2022",
        "坪數": "15",
        "種類": "1"
    },
    // 可以繼續添加更多的作品資料
    {
        "專案名": "暮一暮",
        "副標題": "副標題",
        "圖片連結": "./assets/img/portfolio/w3/",
        "描述": "Use this area to describe your project. Markdown supported. This entry (project1.md) uses links for the image sources. All other projects in the portfolio use local images. Both work just fine! Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "區域": "台北",
        "日期": "2021",
        "坪數": "10",
        "種類": "2"
    },
    {
        "專案名": "一一暮",
        "副標題": "副標題",
        "圖片連結": "./assets/img/portfolio/w1/",
        "描述": "Use this area to describe your project. Markdown supported. This entry (project1.md) uses links for the image sources. All other projects in the portfolio use local images. Both work just fine! Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "區域": "花蓮",
        "日期": "2020",
        "坪數": "25",
        "種類": "3"
    },
    {
        "專案名": "暮暮森",
        "副標題": "安静分享的溫暖詩意",
        "圖片連結": "./assets/img/portfolio/w4/",
        "描述": "在每一個清晨安静地分享家的溫暖詩意，生活中極美的細節總是這樣令人陶醉。本案業主在忙碌的生活中想追求一個舒適明朗的家，以此消除疲憊感忘記喧囂，現代極簡風背後，體現的正是這種注重生活品味與健康時尚的生活態度♡",
        "區域": "林口",
        "日期": "2023",
        "坪數": "20",
        "種類": "1"
    },
  ];






// 將 description 轉換為 JSON 字串後存儲到 localStorage 中
localStorage.setItem('portfolio_description', JSON.stringify(description));