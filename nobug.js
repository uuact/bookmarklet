//生成初始牌堆
function generateUnoDeck() {
  const colors = ['red', 'blue', 'green', 'yellow'];
  const deck = [];

  // 数字卡（0-9）
  for (let i = 0; i <= 9; i++) {
    colors.forEach(color => {
      deck.push({ color: color, value: i });
      deck.push({ color: color, value: i });
    });
  }

  // +2卡
  colors.forEach(color => {
    deck.push({ color: color, value: '+2' });
    deck.push({ color: color, value: '+2' });
  });

  // 反转牌
  colors.forEach(color => {
	deck.push({ color: color, value: '反转' });
	deck.push({ color: color, value: '反转' });
  });

  // +4卡和万能卡
  deck.push({ value: '+4' });
  deck.push({ value: '+4' });
  deck.push({ value: '+4' });
  deck.push({ value: '+4' });

  deck.push({ value: '万能' });
  deck.push({ value: '万能' });
  deck.push({ value: '万能' });
  deck.push({ value: '万能' });

   //打乱 , Fisher-Yates 洗牌算法
    for (let i = deck.length - 1; i > 0; i--) { //例：i=数组数量-1，因为数组从0计
    const j = Math.floor(Math.random() * (i + 1)); //向下取整（生成0~1的随机小数*(i+1)），得到小于当前牌的j i+1得到确实的牌数 例：0.1*2=0.2≈0  0.9*2=1.8≈1
    [deck[i], deck[j]] = [deck[j], deck[i]]; //把当前牌i和小于i的j交换位置。  使用解构赋值的语法，可以在不使用临时变量的情况下交换两个变量的值。
  }

  return deck;
}

const unoDeck = generateUnoDeck();

const numplay = 2; // 设置玩家数量
const Iis = 0; //当前我为玩家几，为了方便数组从零计数
const players = [];
for (let i = 0; i < numplay; i++) {	players.push([]); }	// 几个玩家几组牌

//发牌
function dealCards(deck, players, numCards) {
  for (let i = 0; i < numCards; i++) { //遍历牌数
    for (let j = 0; j < players.length; j++) { //遍历玩家数
      const card = deck.pop(); // 从牌堆中取出一张牌
      players[j].push(card); // 将牌放入当前玩家的手牌数组中
    }
  }
}//进入牌数，进入玩家数，一人一张牌(j跑一遍)，退出玩家数i++，进入玩家数,一人一张牌(j跑一遍)，退出玩家数i++，进入玩家数……

dealCards(unoDeck, players, 8);//牌堆，所有玩家牌组，发牌数量

//引入css
const linkElement = document.createElement('link');
linkElement.href = 'https://uuact.github.io/bookmarklet/nobug.css';
linkElement.rel = "stylesheet";
document.head.appendChild(linkElement);

const uno = document.createElement('div');
uno.id = 'uno';
uno.className = 'uno';
document.body.appendChild(uno);// 将主体div插入到body元素内
const unoDiv = document.getElementById('uno');//方便引用的定义

const me = document.createElement('div');
me.id = "player" + Iis;//玩家号数
me.className = 'me';
unoDiv.appendChild(me); // 将本玩家div插入到主体div元素内

for (var i=0; i<players[Iis].length; i++){//遍历我的牌组，增加css样式
  const deckdiv = document.createElement('div')
  deckdiv.id = "deck" + i;
  deckdiv.className = `color-${players[Iis][i].color} universal`;//颜色样式和通用样式
  deckdiv.onclick = choose;
  deckdiv.textContent = players[Iis][i].value;
  me.appendChild(deckdiv);
}

/*选牌*/
function choose() {

};
