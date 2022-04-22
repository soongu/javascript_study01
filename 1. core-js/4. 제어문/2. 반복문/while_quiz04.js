

var x = 7;

if (x > 0) {
    var mark = '';
    var i = 1;
    while (i <= x) {
        if (i % 2 == 1) mark += '+';
        else mark += '-';
        i++;
    }
    alert(mark);
}