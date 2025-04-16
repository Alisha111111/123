let seaweeds = []; // 儲存多條水草的資料
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('position', 'absolute'); // 設定畫布為絕對定位
  canvas.style('top', '0'); // 畫布貼齊視窗頂部
  canvas.style('left', '0'); // 畫布貼齊視窗左側
  canvas.style('z-index', '10'); // 設定 z-index，確保在 iframe 上層
  canvas.style('pointer-events', 'none'); // 避免畫布阻擋其他元素的互動

  let spacing = width / 20; // 計算平均間距
  let colors = [
    color('rgba(163, 163, 128, 0.8)'), // 降低透明度
    color('rgba(214, 206, 147, 0.8)'), 
    color('rgba(216, 164, 143, 0.8)'), 
    color('rgba(187, 133, 136, 0.8)'), 
    color('rgba(255, 182, 0, 0.8)')
  ]; // 指定的顏色範圍

  for (let i = 0; i < 20; i++) { // 減少水草數量到 20
    seaweeds.push({
      x: spacing * i + spacing / 2, // 平均分布的X座標
      height: random(40, 120), // 隨機高度
      color: random(colors), // 隨機選擇指定顏色
      thickness: random(10, 20), // 粗細範圍調整為10到20
      frequency: random(0.02, 0.08), // 增加搖晃頻率範圍
      angle: random(TWO_PI) // 隨機初始角度
    });
  }
}

function draw() {
  clear(); // 清除畫布，避免殘留線條

  for (let seaweed of seaweeds) {
    drawSeaweed(seaweed);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (let seaweed of seaweeds) {
    seaweed.x = constrain(seaweed.x, 0, width); // 確保水草的X座標在畫布範圍內
  }
}

function drawSeaweed(seaweed) {
  let sway = sin(seaweed.angle) * 20; // 增加搖晃幅度
  let y = height; // 水草從底部開始
  let x = seaweed.x; // 水草的X座標

  stroke(seaweed.color); // 使用水草的顏色
  strokeWeight(seaweed.thickness); // 使用水草的粗細
  noFill();

  beginShape();
  for (let i = 0; i <= 10; i++) { // 將水草分成10段
    vertex(x + sway * sin(seaweed.angle + i * 0.5), y); // 波浪效果
    y -= seaweed.height / 10; // 每段高度
  }
  endShape();

  seaweed.angle += seaweed.frequency; // 使用水草的搖晃頻率
}