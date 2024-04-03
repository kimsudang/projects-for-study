const maxNum = document.querySelector('#maxNum');
const machineNum = document.querySelector('#machineNum');
const myNum = document.querySelector('#myNum');
const result = document.querySelector('#result');
const button = document.querySelector('#btn');
const choseNum = document.querySelector('#choseNum');

let userMaxNum = 0;
let userNum = 0;
let randomNum = 0;

maxNum.addEventListener('input', function () {
    userMaxNum = parseInt(maxNum.value);
});

myNum.addEventListener('input', function () {
    userNum = parseInt(myNum.value);
    if(userNum <= userMaxNum) {
        choseNum.innerText = userNum;
        button.disabled = false;
        result.innerText = ""
    }
    else {
        alert("입력한 숫자는 최댓값보다 클 수 없습니다.");
        button.disabled = true;
        result.innerText = "숫자를 지우고 다시 입력해주세요."
        myNum.value = "";
    }
});

button.addEventListener("click", function(){
    randomNum = parseInt(Math.random() * (userMaxNum));
    machineNum.innerText = randomNum;
    return userNum === randomNum ? result.innerText = "You Won!" : result.innerText = "You Lose!";
});
