
var a = +prompt('정수 A');
var b = +prompt('정수 B');

//풀이1
/*
//두 값의 차이를 구한다.
var diff = a - b;
if (a < b) {
    diff = -diff;
}
*/

//풀이 2
var diff = (a > b) ? a - b : b - a;

alert(`두 값의 차이는 ${diff}입니다.`);