
// 구구단 5단 출력
var level = 7; //단수
var n = 1;
while (n <= 9) {
    console.log(`${level} x ${n} = ${level*n}`);
    n++;
}

console.log('==========================');

// 1 ~ 20사이의 정수 중 홀수만 출력
/*
var m = 1;
while (m <= 20) {
    console.log(m);
    m += 2;
}
*/

var m = 1;
while (m <= 20) {
    if (m % 2 === 0) {
        console.log(m);
    }
    m++;
}

console.log('==========================');

// 18 ~ 32 사이의 3의 배수만 출력
var k = 18;
while (k <= 32) {
    if (k % 3 === 0) {
        console.log(k);
    }
    k++;
}

console.log('========================');

// 1 ~ 4000 사이에 있는 정수 중 12의 배수의 개수

var z = 1;
var count = 0;
while (z <= 4000) {
    if (z % 12 === 0) {
        count++;
    }
    z++;
}
console.log(`총 개수: ${count}개`);