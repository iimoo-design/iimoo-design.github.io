//將作品描述寫在這裡
const description = [
    {
        "專案名": "暮暮森",
        "圖片連結": "./assets/img/portfolio/w1/",
        "描述": "在每一個清晨安静地分享家的溫暖詩意， \n生活中極美的細節總是這樣令人陶醉。\n本案業主在忙碌的生活中想追求一個舒適明朗的家，\n以此消除疲憊感忘記喧囂，現代極簡風背後，\n體現的正是這種注重生活品味與健康時尚的生活態度♡",
        "區域": "林口",
        "日期": "2023",
        "坪數": "20",
        "種類": "住宅空間"
    },
    {
        "專案名": "暮與木",
        "圖片連結": "./assets/img/portfolio/w2/",
        "描述": "木色灰調宅，實木的香味圍繞在空間。 \n \n 溫暖的木色搭配沉靜的灰調，既有現代的簡約又有原木的溫馨，最符合家的調性輕鬆且自然♡",
        "區域": "天母",
        "日期": "2023",
        "坪數": "19",
        "種類": "住宅空間"
    },
    {
        "專案名": "非黑即白",
        "圖片連結": "./assets/img/portfolio/w3/",
        "描述": "少即是多，越簡單越能享受純粹。 \n 辦公室不僅僅是辦公場所，也是每天八小時的生活，注重交流，關注內心♡",
        "區域": "信義",
        "日期": "2023",
        "坪數": "19",
        "種類": "商業空間"
    },
    {
        "專案名": "藝文特區H宅",
        "圖片連結": "./assets/img/portfolio/w4/",
        "描述": "",
        "區域": "板橋",
        "日期": "2021",
        "坪數": "8",
        "種類": "概念/3D"
    },
    {
        "專案名": "中正K宅",
        "圖片連結": "./assets/img/portfolio/w5/",
        "描述": "",
        "區域": "基隆",
        "日期": "2022",
        "坪數": "16",
        "種類": "概念/3D"
    },
    {
        "專案名": "三重M宅",
        "圖片連結": "./assets/img/portfolio/w6/",
        "描述": "",
        "區域": "三重",
        "日期": "2023",
        "坪數": "20",
        "種類": "概念/3D"
    },
    {
        "專案名": "CASA‧T宅",
        "圖片連結": "./assets/img/portfolio/w7/",
        "描述": "",
        "區域": "信義",
        "日期": "2023",
        "坪數": "13",
        "種類": "概念/3D"
    },
  ];






// // 將 description 轉換為 JSON 字串後存儲到 localStorage 中
// description.sort((a, b) => {
//     return new Date(b.日期) - new Date(a.日期);
// });

localStorage.setItem('portfolio_description', JSON.stringify(description));