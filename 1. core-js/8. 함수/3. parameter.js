// 매개변수(parameter)
// - 함수를 정의할 때 함수호출부에서 전달한 값을
//   받아서 저장하는 변수

function add(n1, n2) {
    console.log('함수 실행!!');
    return n1 + n2;
}

//함수 호출
console.log(add(10, 20)); // console.log(30);

var number = add(20, 50); // var number = 70;
console.log(number);

// x ~ y까지의 총합을 구해야함.
// ex) 1 ~ 10까지의 총합 : 55, 3 ~ 5까지 : 12

function calcRangeTotal(begin, end) {
    // console.log(`x: ${x}, y: ${y}`);
    var total = 0;
    for (var n = begin; n <= end; n++) {
        total += n;
    }
    return total;
}

// 인수(argument): 함수를 호출할 때 함수에게 전달하는 값

// 1 ~ 10까지의 총합
var r1 = calcRangeTotal(1, 10);
console.log(r1);

console.log(`result2: ${calcRangeTotal(3, 7)}`);

var r2 = calcRangeTotal(10, 20);
console.log(`r2 : ${r2}`);

// 매개변수가 없는 함수
function rdd() {
    console.log('링딩동 링딩동 링디기링디기링딩동!!!');
}

for (var i = 0; i < 5; i++) {
    rdd();
}

// 매개변수의 기본값
// ES6
function sayHello(language='한국어') {

    //ES5
    // language = language || '한국어';

    if (language === '한국어') {
        console.log('안녕하세요~');
    } else if (language === '영어') {
        console.log('hello~');
    } else if (language === '중국어') {
        console.log('따자하오~');
    } else {
        console.log('뭔지몰라~~');
    }
}


console.log('===========================');
sayHello();


// 매개변수가 없는 함수
function selectRandomPet() {
    var pets = ['멍멍이', '야옹이', '짹짹이', '어흥이', '두껍이'];
    // 0 ~ 4까지의 랜덤정수
    var rn = Math.floor(Math.random() * pets.length);
    return pets[rn];
}

console.log(`선택된 동물: ${selectRandomPet()}`);
