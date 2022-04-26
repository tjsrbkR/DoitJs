function promptMsg(){
    //1번 문제
    let msg = prompt("내용 입력:");
    document.querySelector("Body").innerHTML+= msg;
    console.log(msg);
}

function alertMsg(){
    //2번 문제
    let widthSQ = prompt("사각형의 가로 값:"); 
    let lengthSQ = prompt("사각형의 세로 값");
    alert("주어진 사각형의 넓이: " + widthSQ * lengthSQ);
}