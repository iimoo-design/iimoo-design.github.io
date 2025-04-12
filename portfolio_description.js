fetch('portfolio_description.json')
  .then(response => response.json())
  .then(data => {
    window.portfolioData = data; // 存到全域變數
    // 將資料存到 localStorage

    console.log('作品資料載入完成:', data);

    // 執行 callback（如果有定義）
    if (typeof window.onPortfolioLoaded === 'function') {
      window.onPortfolioLoaded(data);
    }
  })
  .catch(error => console.error('載入作品描述失敗:', error));
