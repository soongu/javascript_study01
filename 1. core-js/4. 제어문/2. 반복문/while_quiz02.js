

var x = +prompt('양의 정수: ');

if (x > 0) {
    var star = '';
    var i = 1;
    while (i <= x) {
        star += '*';
        i++;
    }
    alert(star);
}