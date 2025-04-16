function createIframe() {
  let iframe = createElement('iframe');
  iframe.attribute('src', 'https://www.et.tku.edu.tw');
  iframe.style('position', 'absolute');
  iframe.style('width', '60%');
  iframe.style('height', '60%');
  iframe.style('top', '20%'); // 垂直置中
  iframe.style('left', '20%'); // 水平置中
  iframe.style('border', 'none');
  document.body.appendChild(iframe.elt);
}

function setup() {
  noCanvas(); // 不需要畫布
  createIframe(); // 呼叫函式建立 iframe
}
