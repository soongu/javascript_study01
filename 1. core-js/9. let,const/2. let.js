
// 1. 중복 선언을 허용하지 않음
let x = 10;
// let x = 100;
console.log(x);

// 2. 블록레벨 스코프 지원
let y = '안녕';
if (true) {
    let y = '잘가'; // 지역변수
    // console.log(y);
}
console.log(y);

// 3. 변수 호이스팅을 일으키지 않음
z = 100;
console.log(z);

let z;