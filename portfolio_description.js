//將作品描述寫在這裡
const description = [
    {
        "作品名稱": "商業空間1",
        "副標題": "少即是多，越簡單越能享受純粹1",
        "圖片連結": "./assets/img/portfolio/sample1.jpg",
        "描述": "Use this area to describe your project. Markdown supported. This entry (project1.md) uses links for the image sources. All other projects in the portfolio use local images. Both work just fine! Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "日期": "2023.11",
        "客戶": "人瑄1",
        "種類": "商辦1"
    },
    {
        "作品名稱": "商業空間2",
        "副標題": "少即是多，越簡單越能享受純粹2",
        "圖片連結": "./assets/img/portfolio/sample2.jpg",
        "描述": "Use this area to describe your project. Markdown supported. This entry (project1.md) uses links for the image sources. All other projects in the portfolio use local images. Both work just fine! Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "日期": "2023.12",
        "客戶": "人瑄2",
        "種類": "商辦2"
    },
    // 可以繼續添加更多的 JSON 數據
    {
        "作品名稱": "商業空間3",
        "副標題": "少即是多，越簡單越能享受純粹3",
        "圖片連結": "./assets/img/portfolio/sample3.jpg",
        "描述": "Use this area to describe your project. Markdown supported. This entry (project1.md) uses links for the image sources. All other projects in the portfolio use local images. Both work just fine! Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "日期": "2023.13",
        "客戶": "人瑄3",
        "種類": "商辦3"
    },
    {
        "作品名稱": "商業空間4",
        "副標題": "少即是多，越簡單越能享受純粹4",
        "圖片連結": "./assets/img/portfolio/sample4.jpg",
        "描述": "Use this area to describe your project. Markdown supported. This entry (project1.md) uses links for the image sources. All other projects in the portfolio use local images. Both work just fine! Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "日期": "2023.14",
        "客戶": "人瑄4",
        "種類": "商辦4"
    },
  ];






// 將 description 轉換為 JSON 字串後存儲到 localStorage 中
localStorage.setItem('savedVariable', JSON.stringify(description));