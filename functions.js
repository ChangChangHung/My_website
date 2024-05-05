function shy(){
    var selfie=document.getElementById("selfie");
    selfie.style.transform='rotate(15deg)';
    setTimeout(function(){
        selfie.style.transform='rotate(0deg)';
    },100);
    setTimeout(function(){
        alert("DO NOT TOUCH ME!!!");
    },150);
}
function notnow(){
    alert("還沒想好要寫啥\n先空著")
}

function getScrollTop(){
    var bodyTop = 0;
    var ma=document.getElementById("ma");
    var mb=document.getElementById("mb");
    var mc=document.getElementById("mc");
    if (typeof window.pageYOffset != "undefined") {
      bodyTop = window.pageYOffset;
    }
    if(bodyTop>543&&bodyTop<1397.59){
        ma.style.backgroundColor="#afeeee";
    }
    else{ma.style.backgroundColor="#F5F5DC";}
    if(bodyTop>1397.59&&bodyTop<1734.4){
        mb.style.backgroundColor="#afeeee";
    }
    else{mb.style.backgroundColor="#F5F5DC";}
    if(bodyTop>1734.4&&bodyTop<2212){
        mc.style.backgroundColor="#afeeee";
    }
    else{mc.style.backgroundColor="#F5F5DC";}
    if(bodyTop>=2212){
        md.style.backgroundColor="#afeeee";
    }
    else{md.style.backgroundColor="#F5F5DC";}
    return bodyTop;
}
// setInterval("getScrollTop()","100");
var a=document.getElementById('selfr');
var b=document.getElementById('novel');
var c=document.getElementById('legend');
var d=document.getElementById('WorkOut');

function getPosition (element) {
    var x = 0;
    var y = 0;
    // 搭配上面的示意圖可比較輕鬆理解為何要這麼計算
    while ( element ) {
      x += element.offsetLeft - element.scrollLeft + element.clientLeft;
      y += element.offsetTop - element.scrollLeft + element.clientTop;
      // 這邊有個重點，當父元素被下了 position 屬性之後他就會變成 offsetParent，所以這邊我們用迴圈不斷往上累加。
      element = element.offsetParent;
    }
  
    return { x: x, y: y };
  }

console.log(getPosition(c));