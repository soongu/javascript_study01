
//가로, 세로 길이
var width = 4;
var height = 5;
var star = '';

//가로 세로 보정
if (width < height) {
    var t = width;
    width = height;
    height = t;
}

for (var i = 0; i < height; i++) {
    for(var j = 0; j < width; j++) {
        star += '*  ';
    }
    star += '\n';
}
console.log(star);