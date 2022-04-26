

var total = 0;
var scoreList = [97, 88, 100, 92, 55, 23];

//총점 구하기

for (var n of scoreList) {
    total += n;
}

/*
for (var i = 0; i < scoreList.length; i++) {
    if (i % 2 === 0) {
        total += scoreList[i];
    }
}
*/

//평균 구하기
var average = total / scoreList.length;

//평균 반올림하기
var digit = 2;
var prettierAvg = Math.round(average * 10 ** digit) / 10 ** digit;

console.log(`총점: ${total}점, 평균: ${prettierAvg}점`);