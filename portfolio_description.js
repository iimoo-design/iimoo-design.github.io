fetch('portfolio_description.json')
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('portfolio_description', JSON.stringify(data));
  })
  .catch(error => console.error('載入作品描述失敗:', error));