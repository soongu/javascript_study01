
var greeting;
greeting = 'hello';
greeting = "안녕하세요";
greeting = `콘니치와`;

console.log(typeof greeting);

var str1 = '그는 나에게 "메롱"이라고 하고 도망갔다.';
console.log(str1);

var str2 = "Let's Go!";
console.log(str2);

var str3 = "Let's Go! \"together\"";

// 경로표시: 리눅스 - / , 윈도우 - \
var str4 = 'E:\\temp\\new.png';
console.log(str4);

var str5 = '멍멍이\n\n\n\n야옹이';
console.log(str5);

var str6 = '멍멍이\t\t\t야옹이';
console.log(str6);

var ex1 = '100';

// 템플릿 리터럴 (ES6+ 문법)
var tag = '<ul>\n\t<li>\n\t\t<a href="#">목록1</a>\n\t</li>\n</ul>';
console.log(tag);

var template = `
<ul>
    <li>
        <a href="#">목록1</a>
    </li>
</ul>`;
console.log(template);

//학생이름하고 영어점수를 같이 출력하고 싶은데
//학생이 여러명일 경우..

var studentName = '박영희';
var engScore = 94;

console.log(studentName + '님의 영어점수는 ' 
            + engScore + '점입니다.');  

console.log(`${studentName}님의 영어점수는 ${engScore}점입니다.`);