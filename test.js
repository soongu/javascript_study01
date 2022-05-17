
/*
setTimeout(function(){
    console.log('안녕??');
}, 1000);

setTimeout(function(){
    console.log('너 누구야!');
}, 2000);

setTimeout(function(){
    console.log('안알랴줌ㅋ');
}, 3000);

console.log('내가 1빠다');

*/


let n = 0;

const hello = function() {
    console.log(`아무고토 모타쥬?? - ${n}`);
    n++;
};

setInterval(hello, 1000);

// setInterval 중단
if (n > 5) {
    clearInterval(hello);
}

