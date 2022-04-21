

//나눗셈연산과 나머지
console.log(27 / 5); // js는 정수개념이 없다. 실수나눗셈이 적용됨
console.log(27 % 5);

console.log(5 % 4);

// 나눗셈 뒤에 숫자가 앞보다 크면 앞이 나머지다
console.log(4 % 10);
console.log(7 % 8);
console.log(0 % 255);

// 0으로 나눌 수 없다.
console.log(200 % 0); 
console.log(10 / 0);

var num1 = 8, num2 = 5;
console.log(num1 % num2);

// 거듭제곱연산자(**) - ES6+
console.log(num2 ** 2);

console.log('===========================');

// 증감연산자 (++, --) : 단항연산자
// 1증가, 1감소
var x = 3;
x++;
++x;
x--;

console.log(`x: ${x}`);

// 전위 연산(prefix), 후위 연산(postfix)
var a = 10;
var b = ++a;

console.log(`a: ${a}, b: ${b}`);

var c = 5;
var d = c++ * 2;
console.log(`c: ${c}, d: ${d}`);

// 이 연산의 결과로 a,b,c,d,e의 값을 구하시오
var e = --b + c++ * d;
console.log(a, b, c, d, e);
// a: 11, b: 10, c: 7, d: 10, e: 70
