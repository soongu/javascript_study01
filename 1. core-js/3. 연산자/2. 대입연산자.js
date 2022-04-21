
var x = 10;

x += 5; // x = x + 5;

x -= 3;
x *= 2;
x /= 4;
x %= 4;
x **= 3; // x = x ** 3;

console.log(`x: ${x}`);

var y = 5;
y =+ 3;
console.log(`y : ${y}`);

var z = 'zz';
z += 4; // z = z + 4;
console.log(`z: ${z}`);

// 문자열과 다른 타입의 덧셈 : 결합연산
console.log('10' + 20);

var num = 7;
num--; // 연산횟수 1회
num -= 1; // num = num - 1; 연산횟수 2회