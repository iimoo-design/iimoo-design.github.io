const jsonDataArray = [
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