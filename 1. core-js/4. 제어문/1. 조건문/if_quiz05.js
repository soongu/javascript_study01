
var a = +prompt('정수 A');
var b = +prompt('정수 B');
var c = +prompt('정수 C');

if (a === b && b === c) {
    alert('3개 값이 모두 같습니다.');
} else if (a === b || b === c || c == a) {
    alert('2개 값이 같습니다.');
} else {
    alert('모두 다른 값입니다.');
}