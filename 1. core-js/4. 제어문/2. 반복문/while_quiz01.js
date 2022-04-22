
var x = +prompt('첫번째 숫자: ');
var y = +prompt('두번째 숫자: ');

//값 스위칭
if (x > y) {
    var t = x;
    x = y;
    y = t;
}

var total = 0;
var n = x;
while (n <= y) {
    total += n;
    n++
}
alert(`${x} ~ ${y}까지의 누적합: ${total}`);