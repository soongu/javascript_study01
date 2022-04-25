

var n = 1; //1. 제어변수의 선언: 시작을 의미
while (n <= 3) { // 2. 조건식 : 끝을 의미
    //반복할 코드
    console.log(`${n}번 학생 안녕하세요~`);
    n++; //3. 증감식: 반복문의 종료시점에 도달하기 위한 코드
}

console.log('반복문 종료!');

// 5 ~ 0 카운트 다운
var m = 5;
while (m >= 0) {
    console.log(`${m}!!`);
    m--;
}
console.log('======================');

// 1 ~ 10 까지의 총합
var total = 0; //총합을 저장할 변수
var k = 1;
while (k <= 10) {
    total += k;
    k++;
}
console.log(`총합: ${total}`);
console.log('======================');

// '메롱메롱' 을 6번 출력하고 싶다.
var x = 1;
while (x <= 6) {
    console.log('메롱메롱');
    x++;
}
