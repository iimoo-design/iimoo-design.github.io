// 從 localStorage 中取出 savedVariable 的並剖析為 JavaScript 物件
const jsonDataArray = JSON.parse(localStorage.getItem('portfolio_description'));
const workflowDataArray = JSON.parse(localStorage.getItem('workflow_description'));

jsonDataArray.reverse();

function splitTextWithPunctuation(text) {
  const punctuations = ['，', '。', '！', '？', '：', '；', '♡', '.', ';'];
  let result = '';
  let currentLine = '';

  for (let i = 0; i < text.length; i++) {
      currentLine += text[i];
      if (punctuations.includes(text[i])) {
          result += currentLine + '\n';
          currentLine = '';
      }
  }

  if (currentLine !== '') {
      result += currentLine + '\n';
  }

  return result;
}

function show_N_wrok(N){
    var n = 0;
    if(N == 'all'){
      n = jsonDataArray.length;
    }
    else{
      n = N;
    }
    jsonDataArray.slice(0,n).forEach((jsonData, index) => {
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

      // const plusIcon = document.createElement('i');
      // plusIcon.className = 'fas fa-plus fa-3x';
      // hoverContent.appendChild(plusIcon);
      hover.appendChild(hoverContent);

      const image = document.createElement('img');
      image.className = 'img-fluid';
      image.setAttribute('src', jsonData.圖片連結 + `1.jpg`);
      image.setAttribute('alt', '');

      link.appendChild(hover);
      link.appendChild(image);

      const caption = document.createElement('div');
      caption.className = 'portfolio-caption';

      const title = document.createElement('a');
      title.innerText = jsonData.專案名;

      caption.appendChild(title);

      col.appendChild(link);
      col.appendChild(caption);

      // 將新建的元素添加到頁面中的適當位置
      const portfolioContainer = document.querySelector('.portfolio-container'); // 假設有一個包含這些區塊的容器元素
      portfolioContainer.appendChild(col);
    });

    jsonDataArray.slice(0,n).forEach((jsonData, index) => {
      const image_item = [];
        for(let i = 0; i <=6 ; i++){
          const image = document.createElement('img');
          image.className = 'img-fluid d-block mx-auto';
          image.setAttribute('src', jsonData.圖片連結 + `${i}.jpg`);
          image.onerror = function(){
            image.remove();
          }
          image_item.push(image);
          console.log(image);
        }

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
        col.className = 'col-lg-12 mx-auto';

        const modalBody = document.createElement('div');
        modalBody.className = 'modal-body';

        // const title = document.createElement('h2');
        // title.className = 'text-uppercase';
        // title.innerText = jsonData.副標題;

        // const subtitle = document.createElement('p');
        // subtitle.className = 'item-intro text-muted';
        // subtitle.innerText = jsonData.副標題;

        const description = document.createElement('p');
        description.innerText = splitTextWithPunctuation(jsonData.描述);

        const desDiv = document.createElement('div');
        desDiv.className = 'lchild'
        desDiv.appendChild(description);
        
        const ul = document.createElement('ul');
        ul.className = 'list-inline';
        ul.style.textAlign = 'left;';

        const locateLi = document.createElement('li');
        
        const strongElement = document.createElement('strong');
        strongElement.innerText = 'Location';

        const textNode = document.createTextNode(' / ');

        locateLi.appendChild(strongElement);
        locateLi.appendChild(textNode);
        locateLi.appendChild(document.createTextNode(jsonData.區域));

        const dateLi = document.createElement('li');

        const strongElement2 = document.createElement('strong');
        strongElement2.innerText = 'Year';

        dateLi.appendChild(strongElement2);
        dateLi.appendChild(textNode.cloneNode(true));
        dateLi.appendChild(document.createTextNode(jsonData.日期));

        const sizeLi = document.createElement('li');

        const strongElement3 = document.createElement('strong');
        strongElement3.innerText = 'Area';

        sizeLi.appendChild(strongElement3);
        sizeLi.appendChild(textNode.cloneNode(true));
        sizeLi.appendChild(document.createTextNode(`${jsonData.坪數}坪`));

        const projectNameLi = document.createElement('li');
        
        const strongElement4 = document.createElement('strong');
        strongElement4.innerText = 'Project';

        projectNameLi.appendChild(strongElement4);
        projectNameLi.appendChild(textNode.cloneNode(true));
        projectNameLi.appendChild(document.createTextNode(jsonData.專案名));


        ul.appendChild(locateLi);
        ul.appendChild(dateLi);
        ul.appendChild(sizeLi);
        ul.appendChild(projectNameLi);

        const ulDiv = document.createElement('div');
        ulDiv.className = 'rchild'
        ulDiv.appendChild(ul);

        const div = document.createElement('div');
        div.className = 'parent'
        
        div.appendChild(desDiv);
        div.appendChild(ulDiv);
        
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

        // modalBody.appendChild(title);
        // modalBody.appendChild(subtitle);
        modalBody.appendChild(image_item[0]);
        modalBody.appendChild(div);
        for(let j = 1; j <= 6; j++){
          if(image_item[j] != null)
            modalBody.appendChild(image_item[j]);
        }
        
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
    if(jsonDataArray.length <= n){
        document.getElementById('viewAll').style.display = 'none';
    }
}


function changeToChinese(element) {
    if (element) {
      var text = element.getElementsByTagName('a')[0];
      if (text.innerHTML === 'Workflow') {
        text.originalFontSize = window.getComputedStyle(text).fontSize; // 儲存原始字體大小
        text.originalFontFamily = window.getComputedStyle(text).fontFamily;
        var originalSize = parseFloat(text.originalFontSize);
        text.innerHTML = '服務流程';
        text.style.fontSize = originalSize * 1.0 + 'px'; // 將字體大小設置為原始大小的1.0倍
        text.style.fontFamily = '';
      }
      if (text.innerHTML === 'Portfolio') {
        text.originalFontSize = window.getComputedStyle(text).fontSize; // 儲存原始字體大小
        text.originalFontFamily = window.getComputedStyle(text).fontFamily;
        var originalSize = parseFloat(text.originalFontSize);
        text.innerHTML = '作品集';
        text.style.fontSize = originalSize * 1.0 + 'px'; // 將字體大小設置為原始大小的1.0倍
        text.style.fontFamily = '';
      }
      if (text.innerHTML === 'About') {
        text.originalFontSize = window.getComputedStyle(text).fontSize; // 儲存原始字體大小
        text.originalFontFamily = window.getComputedStyle(text).fontFamily;
        var originalSize = parseFloat(text.originalFontSize);
        text.innerHTML = '關於我們';
        text.style.fontSize = originalSize * 1.0 + 'px'; // 將字體大小設置為原始大小的1.0倍
        text.style.fontFamily = '';
      }
      if (text.innerHTML === 'Team') {
        text.originalFontSize = window.getComputedStyle(text).fontSize; // 儲存原始字體大小
        text.originalFontFamily = window.getComputedStyle(text).fontFamily;
        var originalSize = parseFloat(text.originalFontSize);
        text.innerHTML = '團隊成員';
        text.style.fontSize = originalSize * 1.0 + 'px'; // 將字體大小設置為原始大小的1.0倍
        text.style.fontFamily = '';
      }
      if (text.innerHTML === 'Contact') {
        text.originalFontSize = window.getComputedStyle(text).fontSize; // 儲存原始字體大小
        text.originalFontFamily = window.getComputedStyle(text).fontFamily;
        var originalSize = parseFloat(text.originalFontSize);
        text.innerHTML = '聯絡我們';
        text.style.fontSize = originalSize * 1.0 + 'px'; // 將字體大小設置為原始大小的1.0倍
        text.style.fontFamily = '';
      }
      if (text.innerHTML === 'Home') {
        text.originalFontSize = window.getComputedStyle(text).fontSize; // 儲存原始字體大小
        text.originalFontFamily = window.getComputedStyle(text).fontFamily;
        var originalSize = parseFloat(text.originalFontSize);
        text.innerHTML = '首頁';
        text.style.fontSize = originalSize * 1.0 + 'px'; // 將字體大小設置為原始大小的1.0倍
        text.style.fontFamily = '';
      }
    }
  }

function changeToEnglish(element) {
  if (element) {
      var text = element.getElementsByTagName('a')[0];
      if (text.innerHTML === '服務流程') {
      text.innerHTML = 'Workflow';
      text.style.fontSize = text.originalFontSize; // 恢復原始字體大小
      text.style.fontFamily = text.originalFontFamily//恢復原本的字體
      }
  }
  if (element) {
      var text = element.getElementsByTagName('a')[0];
      if (text.innerHTML === '作品集') {
      text.innerHTML = 'Portfolio';
      text.style.fontSize = text.originalFontSize; // 恢復原始字體大小
      text.style.fontFamily = text.originalFontFamily//恢復原本的字體
      }
  }
  if (element) {
      var text = element.getElementsByTagName('a')[0];
      if (text.innerHTML === '關於我們') {
      text.innerHTML = 'About';
      text.style.fontSize = text.originalFontSize; // 恢復原始字體大小
      text.style.fontFamily = text.originalFontFamily//恢復原本的字體
      }
  }
  if (element) {
      var text = element.getElementsByTagName('a')[0];
      if (text.innerHTML === '團隊成員') {
      text.innerHTML = 'Team';
      text.style.fontSize = text.originalFontSize; // 恢復原始字體大小
      text.style.fontFamily = text.originalFontFamily//恢復原本的字體
      }
  }
  if (element) {
      var text = element.getElementsByTagName('a')[0];
      if (text.innerHTML === '聯絡我們') {
      text.innerHTML = 'Contact';
      text.style.fontSize = text.originalFontSize; // 恢復原始字體大小
      text.style.fontFamily = text.originalFontFamily//恢復原本的字體
      }
  }
  if (element) {
      var text = element.getElementsByTagName('a')[0];
      if (text.innerHTML === '首頁') {
      text.innerHTML = 'Home';
      text.style.fontSize = text.originalFontSize; // 恢復原始字體大小
      text.style.fontFamily = text.originalFontFamily//恢復原本的字體
      }
  }
}

function portfolio_filter(catergory){
  // 先讓所有作品消失
  var container = document.querySelector('.portfolio-container');
  var items = container.querySelectorAll('.col-md-4.col-sm-6.portfolio-item');
  items.forEach(function(item) {
      item.remove();
  });

  // 再讓符合條件的作品顯示
  jsonDataArray.forEach((jsonData, index) =>  {
    if(catergory == 'all'){
      location.reload();
    }
    else{
      if(jsonData.種類 != catergory){
        return;
      }
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

      // const plusIcon = document.createElement('i');
      // plusIcon.className = 'fas fa-plus fa-3x';
      // hoverContent.appendChild(plusIcon);
      hover.appendChild(hoverContent);

      const image = document.createElement('img');
      image.className = 'img-fluid';
      image.setAttribute('src', jsonData.圖片連結 + `1.jpg`);
      image.setAttribute('alt', '');

      link.appendChild(hover);
      link.appendChild(image);

      const caption = document.createElement('div');
      caption.className = 'portfolio-caption';

      const title = document.createElement('a');
      title.innerText = jsonData.專案名;

      caption.appendChild(title);

      col.appendChild(link);
      col.appendChild(caption);

      // 將新建的元素添加到頁面中的適當位置
      const portfolioContainer = document.querySelector('.portfolio-container'); // 假設有一個包含這些區塊的容器元素
      portfolioContainer.appendChild(col);
    }
  }
)}

function enlargeIcon(element) {
  // const iconB = element.getElementsByTagName('i')[0];
  // const iconI = element.getElementsByTagName('i')[1];
  // iconB.style.transform = 'scale(1.1)'; // 根据需要调整大小
  // iconI.style.transform = 'scale(1.1)'; // 根据需要调整大小
  var text = element.getElementsByTagName('a')[0];
  text.originalFontSize = window.getComputedStyle(text).fontSize; // 儲存原始字體大小
  var originalSize = parseFloat(text.originalFontSize);
  text.style.fontSize = originalSize * 1.1 + 'px'; // 將字體大小設置為原始大小的1.2倍
  text.style.color = 'gray'
}

function resetIcon(element) {
  // const iconB = element.getElementsByTagName('i')[0];
  // const iconI = element.getElementsByTagName('i')[1];
  // iconB.style.transform = 'scale(1)'; // 恢复原始大小
  // iconI.style.transform = 'scale(1)'; // 恢复原始大小
  var text = element.getElementsByTagName('a')[0];
  text.style.fontSize = text.originalFontSize; // 恢復原始字體大小
  text.style.color = 'black'
}

function show_workflow(){
  //建立workflow-grid
  workflowDataArray.forEach((jsonData, index) => {
    const block = document.createElement('div');
    block.className = 'col-md-4';
    block.setAttribute('onmouseover', "enlargeIcon(this);");
    block.setAttribute('onmouseout', "resetIcon(this);");
    
    const link = document.createElement('a');
    link.setAttribute('data-toggle', 'modal');
    link.setAttribute('href', `#wf${index + 1}`);
    link.innerText = jsonData.服務名稱;

    const title = document.createElement('h5');
    title.className = 'service-heading';

    title.appendChild(link);
    block.appendChild(title);

    const workflowgrid = document.querySelector('#wf-grid');
    workflowgrid.appendChild(block);
  });


  //建立workflow敘述頁面
  workflowDataArray.forEach((jsonData, index) => {
    // 创建一个新的div元素
    var modalDiv = document.createElement('div');

    // 添加必需的class和id属性
    modalDiv.className = 'portfolio-modal modal fade';
    modalDiv.id = 'wf' + (index + 1);
    modalDiv.setAttribute('tabindex', '-1');
    modalDiv.setAttribute('role', 'dialog');
    modalDiv.style.display = 'none';
    modalDiv.setAttribute('aria-hidden', 'true');

    // 创建modal-dialog元素
    var modalDialog = document.createElement('div');
    modalDialog.className = 'modal-dialog';

    // 创建modal-content元素
    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // 创建popup-window-inner元素
    var popupWindowInner = document.createElement('div');
    popupWindowInner.className = 'popup-window-inner';

    // 创建包含按钮的相对定位的div元素
    var buttonContainer = document.createElement('div');
    buttonContainer.style.position = 'relative';

    // 创建关闭按钮
    var closeButton = document.createElement('button');
    closeButton.className = 'btn leave-button';
    closeButton.setAttribute('data-dismiss', 'modal');
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('onmouseover', "this.style.backgroundColor='lightgray';");
    closeButton.setAttribute('onmouseout', "this.style.backgroundColor='rgb(255, 255, 255, 0)';");

    // 创建关闭按钮图标
    var closeIcon = document.createElement('i');
    closeIcon.className = 'fas fa-times';

    // 将关闭按钮图标附加到关闭按钮
    closeButton.appendChild(closeIcon);

    // 将关闭按钮附加到包含按钮的相对定位的div元素
    buttonContainer.appendChild(closeButton);

    // 创建container元素
    var containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    // 创建row元素
    var rowDiv = document.createElement('div');
    rowDiv.className = 'row';

    // 创建col-lg-12 text-center元素
    var colDiv = document.createElement('div');
    colDiv.className = 'col-lg-12 text-center';

    // 创建h3元素
    var h3Element = document.createElement('h3');
    h3Element.className = 'section-heading text-uppercase';
    h3Element.innerText = jsonData.服務名稱;

    // 创建scalable-div元素
    const scalableDiv = document.createElement('div');
    scalableDiv.className = 'scalable-div';

    const workflow_detail = JSON.parse(JSON.stringify(jsonData.服務說明));

    for(var key in workflow_detail){
      if(key == '費用備註'){
        continue;
      }
      const h4Element = document.createElement('h4');
      h4Element.textContent = key;

      const ulElement = document.createElement('ul');
      ulElement.className = 'description_list';

      const liElement = document.createElement('li');
      liElement.style.paddingLeft = '0px';
      liElement.style.whiteSpace = 'pre-line';
      liElement.textContent = splitTextWithPunctuation(workflow_detail[key]);

      ulElement.appendChild(liElement);
      if(key == '費用' && workflow_detail['費用備註'] != null){
        const Textul = document.createElement('ul')
        Textul.style.listStyleType = 'none';
        Textul.style.padding = '0';

        const Textli = document.createElement('li');
        var split_text =(workflow_detail['費用備註'])
        Textli.textContent = `(${split_text})`;
        Textli.style.listStyleType = 'none';
        Textli.style.whiteSpace = 'pre-line';
        Textli.style.margin = '0';

        Textul.appendChild(Textli);
        ulElement.appendChild(Textul);
      }

      scalableDiv.appendChild(h4Element);
      scalableDiv.appendChild(ulElement);
    }

    if(jsonData['備註'] != null){
      const remark = document.createElement('p');
      remark.style.fontSize = '0.8em';
      remark.style.fontWeight = 'normal';
      remark.style.alignSelf = 'center';
      remark.style.textAlign = 'center';
      remark.style.color = 'red';
      remark.textContent = splitTextWithPunctuation(jsonData['備註']);
      scalableDiv.appendChild(remark);
    }
    
    colDiv.appendChild(h3Element);
    colDiv.appendChild(scalableDiv);

    rowDiv.appendChild(colDiv);

    containerDiv.appendChild(rowDiv);

    popupWindowInner.appendChild(buttonContainer);
    popupWindowInner.appendChild(containerDiv);

    modalContent.appendChild(popupWindowInner);

    modalDialog.appendChild(modalContent);

    modalDiv.appendChild(modalDialog);

    // 将modalDiv元素添加到文档的body中
    document.body.appendChild(modalDiv);

  });
}