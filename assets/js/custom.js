// 從 localStorage 中取出 savedVariable 的並剖析為 JavaScript 物件
const jsonDataArray = JSON.parse(localStorage.getItem('savedVariable'));

jsonDataArray.reverse();

function showAll(){
    jsonDataArray.forEach((jsonData, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6 portfolio-item';

        const link = document.createElement('a');
        link.className = 'portfolio-link';
        link.setAttribute('data-toggle', 'modal');
        link.setAttribute('href', `#p${index + 1}`);

        const hover = document.createElement('div');
        hover.className = 'portfolio-hover';

        const hoverContent = document.createElement('div');
        hoverContent.className = 'portfolio-hover-content';

        const plusIcon = document.createElement('i');
        plusIcon.className = 'fas fa-plus fa-3x';
        hoverContent.appendChild(plusIcon);
        hover.appendChild(hoverContent);

        const image = document.createElement('img');
        image.className = 'img-fluid';
        image.setAttribute('src', jsonData.圖片連結);
        image.setAttribute('alt', '');

        link.appendChild(hover);
        link.appendChild(image);

        const caption = document.createElement('div');
        caption.className = 'portfolio-caption';

        const title = document.createElement('h4');
        title.innerText = jsonData.作品名稱;

        const subtitle = document.createElement('p');
        subtitle.className = 'text-muted';
        subtitle.innerText = jsonData.副標題;

        caption.appendChild(title);
        caption.appendChild(subtitle);

        col.appendChild(link);
        col.appendChild(caption);

        // 將新建的元素添加到頁面中的適當位置
        const portfolioContainer = document.querySelector('.portfolio-container'); // 假設有一個包含這些區塊的容器元素
        portfolioContainer.appendChild(col);
    });


    jsonDataArray.forEach((jsonData, index) => {
        const modal = document.createElement('div');
        modal.className = 'portfolio-modal modal fade';
        modal.id = (`p${index + 1}`);
        modal.tabIndex = '-1';
        modal.role = 'dialog';
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');

        const modalDialog = document.createElement('div');
        modalDialog.className = 'modal-dialog';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const closeButtonContainer = document.createElement('div');
        closeButtonContainer.style.position = 'relative';

        const closeButton = document.createElement('button');
        closeButton.className = 'btn leave-button';
        closeButton.setAttribute('data-dismiss', 'modal');
        closeButton.setAttribute('type', 'button');
        closeButton.setAttribute('onmouseover', "this.style.backgroundColor='lightgray';");
        closeButton.setAttribute('onmouseout', "this.style.backgroundColor='rgb(255, 255, 255, 0)';");

        const closeIcon = document.createElement('i');
        closeIcon.className = 'fas fa-times';
        closeButton.appendChild(closeIcon);
        closeButtonContainer.appendChild(closeButton);

        const container = document.createElement('div');
        container.className = 'container';

        const row = document.createElement('div');
        row.className = 'row';

        const col = document.createElement('div');
        col.className = 'col-lg-8 mx-auto';

        const modalBody = document.createElement('div');
        modalBody.className = 'modal-body';

        const title = document.createElement('h2');
        title.className = 'text-uppercase';
        title.innerText = jsonData.作品名稱;

        const subtitle = document.createElement('p');
        subtitle.className = 'item-intro text-muted';
        subtitle.innerText = jsonData.副標題;

        const image = document.createElement('img');
        image.className = 'img-fluid d-block mx-auto';
        image.setAttribute('src', jsonData.圖片連結);
        image.setAttribute('alt', 'Shirts on a hanger');

        const description = document.createElement('p');
        description.innerText = jsonData.描述;

        const ul = document.createElement('ul');
        ul.className = 'list-inline';

        const dateLi = document.createElement('li');
        dateLi.innerText = `日期: ${jsonData.日期}`;

        const clientLi = document.createElement('li');
        clientLi.innerText = `客戶: ${jsonData.客戶}`;

        const categoryLi = document.createElement('li');
        categoryLi.innerText = `種類: ${jsonData.種類}`;

        ul.appendChild(dateLi);
        ul.appendChild(clientLi);
        ul.appendChild(categoryLi);

        const leaveButton = document.createElement('button');
        leaveButton.className = 'btn';
        leaveButton.setAttribute('data-dismiss', 'modal');
        leaveButton.setAttribute('type', 'button');
        leaveButton.setAttribute('style', 'color:white; background-color: rgb(104, 95, 95); border: 1px solid whitesmoke;');
        leaveButton.setAttribute('onmouseover', "this.style.backgroundColor='lightgray'; this.style.borderColor='white';");
        leaveButton.setAttribute('onmouseout', "this.style.backgroundColor='gray'; this.style.borderColor='whitesmoke';");

        const leaveIcon = document.createElement('i');
        leaveIcon.className = 'fas fa-times';
        leaveButton.appendChild(leaveIcon);
        leaveButton.appendChild(document.createTextNode('離開'));

        modalBody.appendChild(title);
        modalBody.appendChild(subtitle);
        modalBody.appendChild(image);
        modalBody.appendChild(description);
        modalBody.appendChild(ul);
        modalBody.appendChild(document.createElement('p'));
        modalBody.appendChild(leaveButton);

        col.appendChild(modalBody);
        row.appendChild(col);
        container.appendChild(row);
        modalContent.appendChild(closeButtonContainer);
        modalContent.appendChild(container);
        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);

        // 將新建的元素添加到頁面中的適當位置
        const portfolioContainer = document.querySelector('.portfolio-detail'); // 假設有一個包含這些區塊的容器元素
        portfolioContainer.appendChild(modal);
    });
}

function showTop3(){
    jsonDataArray.slice(0,3).forEach((jsonData, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6 portfolio-item';

        const link = document.createElement('a');
        link.className = 'portfolio-link';
        link.setAttribute('data-toggle', 'modal');
        link.setAttribute('href', `#p${index + 1}`);

        const hover = document.createElement('div');
        hover.className = 'portfolio-hover';

        const hoverContent = document.createElement('div');
        hoverContent.className = 'portfolio-hover-content';

        const plusIcon = document.createElement('i');
        plusIcon.className = 'fas fa-plus fa-3x';
        hoverContent.appendChild(plusIcon);
        hover.appendChild(hoverContent);

        const image = document.createElement('img');
        image.className = 'img-fluid';
        image.setAttribute('src', jsonData.圖片連結);
        image.setAttribute('alt', '');

        link.appendChild(hover);
        link.appendChild(image);

        const caption = document.createElement('div');
        caption.className = 'portfolio-caption';

        const title = document.createElement('h4');
        title.innerText = jsonData.作品名稱;

        const subtitle = document.createElement('p');
        subtitle.className = 'text-muted';
        subtitle.innerText = jsonData.副標題;

        caption.appendChild(title);
        caption.appendChild(subtitle);

        col.appendChild(link);
        col.appendChild(caption);

        // 將新建的元素添加到頁面中的適當位置
        const portfolioContainer = document.querySelector('.portfolio-container'); // 假設有一個包含這些區塊的容器元素
        portfolioContainer.appendChild(col);
    });


    jsonDataArray.forEach((jsonData, index) => {
        const modal = document.createElement('div');
        modal.className = 'portfolio-modal modal fade';
        modal.id = (`p${index + 1}`);
        modal.tabIndex = '-1';
        modal.role = 'dialog';
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');

        const modalDialog = document.createElement('div');
        modalDialog.className = 'modal-dialog';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const closeButtonContainer = document.createElement('div');
        closeButtonContainer.style.position = 'relative';

        const closeButton = document.createElement('button');
        closeButton.className = 'btn leave-button';
        closeButton.setAttribute('data-dismiss', 'modal');
        closeButton.setAttribute('type', 'button');
        closeButton.setAttribute('onmouseover', "this.style.backgroundColor='lightgray';");
        closeButton.setAttribute('onmouseout', "this.style.backgroundColor='rgb(255, 255, 255, 0)';");

        const closeIcon = document.createElement('i');
        closeIcon.className = 'fas fa-times';
        closeButton.appendChild(closeIcon);
        closeButtonContainer.appendChild(closeButton);

        const container = document.createElement('div');
        container.className = 'container';

        const row = document.createElement('div');
        row.className = 'row';

        const col = document.createElement('div');
        col.className = 'col-lg-8 mx-auto';

        const modalBody = document.createElement('div');
        modalBody.className = 'modal-body';

        const title = document.createElement('h2');
        title.className = 'text-uppercase';
        title.innerText = jsonData.作品名稱;

        const subtitle = document.createElement('p');
        subtitle.className = 'item-intro text-muted';
        subtitle.innerText = jsonData.副標題;

        const image = document.createElement('img');
        image.className = 'img-fluid d-block mx-auto';
        image.setAttribute('src', jsonData.圖片連結);
        image.setAttribute('alt', 'Shirts on a hanger');

        const description = document.createElement('p');
        description.innerText = jsonData.描述;

        const ul = document.createElement('ul');
        ul.className = 'list-inline';

        const dateLi = document.createElement('li');
        dateLi.innerText = `日期: ${jsonData.日期}`;

        const clientLi = document.createElement('li');
        clientLi.innerText = `客戶: ${jsonData.客戶}`;

        const categoryLi = document.createElement('li');
        categoryLi.innerText = `種類: ${jsonData.種類}`;

        ul.appendChild(dateLi);
        ul.appendChild(clientLi);
        ul.appendChild(categoryLi);

        const leaveButton = document.createElement('button');
        leaveButton.className = 'btn';
        leaveButton.setAttribute('data-dismiss', 'modal');
        leaveButton.setAttribute('type', 'button');
        leaveButton.setAttribute('style', 'color:white; background-color: rgb(104, 95, 95); border: 1px solid whitesmoke;');
        leaveButton.setAttribute('onmouseover', "this.style.backgroundColor='lightgray'; this.style.borderColor='white';");
        leaveButton.setAttribute('onmouseout', "this.style.backgroundColor='gray'; this.style.borderColor='whitesmoke';");

        const leaveIcon = document.createElement('i');
        leaveIcon.className = 'fas fa-times';
        leaveButton.appendChild(leaveIcon);
        leaveButton.appendChild(document.createTextNode('離開'));

        modalBody.appendChild(title);
        modalBody.appendChild(subtitle);
        modalBody.appendChild(image);
        modalBody.appendChild(description);
        modalBody.appendChild(ul);
        modalBody.appendChild(document.createElement('p'));
        modalBody.appendChild(leaveButton);

        col.appendChild(modalBody);
        row.appendChild(col);
        container.appendChild(row);
        modalContent.appendChild(closeButtonContainer);
        modalContent.appendChild(container);
        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);

        // 將新建的元素添加到頁面中的適當位置
        const portfolioContainer = document.querySelector('.portfolio-detail'); // 假設有一個包含這些區塊的容器元素
        portfolioContainer.appendChild(modal);
    });
}

function back_to_top(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function show_viewAll_button(n){
    if(jsonDataArray.length < n){
        document.getElementById('viewAll').style.display = 'none';
    }
}


function changeToChinese(element) {
    if (element) {
      var text = element.getElementsByTagName('a')[0];
      if (text.innerHTML === 'Services') {
        text.originalFontSize = window.getComputedStyle(text).fontSize; // 儲存原始字體大小
        var originalSize = parseFloat(text.originalFontSize);
        text.innerHTML = '服務類型';
        text.style.fontSize = originalSize * 1.3 + 'px'; // 將字體大小設置為原始大小的1.3倍
      }
      if (text.innerHTML === 'Portfolio') {
        text.originalFontSize = window.getComputedStyle(text).fontSize; // 儲存原始字體大小
        var originalSize = parseFloat(text.originalFontSize);
        text.innerHTML = '作品集';
        text.style.fontSize = originalSize * 1.3 + 'px'; // 將字體大小設置為原始大小的1.3倍
      }
      if (text.innerHTML === 'About') {
        text.originalFontSize = window.getComputedStyle(text).fontSize; // 儲存原始字體大小
        var originalSize = parseFloat(text.originalFontSize);
        text.innerHTML = '關於我們';
        text.style.fontSize = originalSize * 1.3 + 'px'; // 將字體大小設置為原始大小的1.3倍
      }
      if (text.innerHTML === 'Team') {
        text.originalFontSize = window.getComputedStyle(text).fontSize; // 儲存原始字體大小
        var originalSize = parseFloat(text.originalFontSize);
        text.innerHTML = '團隊成員';
        text.style.fontSize = originalSize * 1.3 + 'px'; // 將字體大小設置為原始大小的1.3倍
      }
      if (text.innerHTML === 'Contact') {
        text.originalFontSize = window.getComputedStyle(text).fontSize; // 儲存原始字體大小
        var originalSize = parseFloat(text.originalFontSize);
        text.innerHTML = '聯絡我們';
        text.style.fontSize = originalSize * 1.3 + 'px'; // 將字體大小設置為原始大小的1.3倍
      }
      if (text.innerHTML === 'Home') {
        text.originalFontSize = window.getComputedStyle(text).fontSize; // 儲存原始字體大小
        var originalSize = parseFloat(text.originalFontSize);
        text.innerHTML = '首頁';
        text.style.fontSize = originalSize * 1.3 + 'px'; // 將字體大小設置為原始大小的1.3倍
      }
    }
  }

function changeToEnglish(element) {
if (element) {
    var text = element.getElementsByTagName('a')[0];
    if (text.innerHTML === '服務類型') {
    text.innerHTML = 'Services';
    text.style.fontSize = text.originalFontSize; // 恢復原始字體大小
    }
}
if (element) {
    var text = element.getElementsByTagName('a')[0];
    if (text.innerHTML === '作品集') {
    text.innerHTML = 'Portfolio';
    text.style.fontSize = text.originalFontSize; // 恢復原始字體大小
    }
}
if (element) {
    var text = element.getElementsByTagName('a')[0];
    if (text.innerHTML === '關於我們') {
    text.innerHTML = 'About';
    text.style.fontSize = text.originalFontSize; // 恢復原始字體大小
    }
}
if (element) {
    var text = element.getElementsByTagName('a')[0];
    if (text.innerHTML === '團隊成員') {
    text.innerHTML = 'Team';
    text.style.fontSize = text.originalFontSize; // 恢復原始字體大小
    }
}
if (element) {
    var text = element.getElementsByTagName('a')[0];
    if (text.innerHTML === '聯絡我們') {
    text.innerHTML = 'Contact';
    text.style.fontSize = text.originalFontSize; // 恢復原始字體大小
    }
}
if (element) {
    var text = element.getElementsByTagName('a')[0];
    if (text.innerHTML === '首頁') {
    text.innerHTML = 'Home';
    text.style.fontSize = text.originalFontSize; // 恢復原始字體大小
    }
}
}