const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");

function buttonFnc(){
    alert("three");
};
function clickFnc(){
    alert("pizhma, panther, sova");
};

function myFnc(){
    alert('right');
};

function mySecondFnc(){
    alert('wrong');
};

function myThirdFnc(){
    alert('wrong');
};
function myFourthFnc(){
    alert('right');
};
function myFithFnc(){
    alert('wrong');
};
function mySixthFnc(){
    alert('wrong');
};

button1.onclick = buttonFnc;
button2.onclick = clickFnc;
button3.onclick = myFnc;
button4.onclick = mySecondFnc;
button5.onclick = myThirdFnc;
button6.onclick = myFourthFnc;
button7.onclick = myFithFnc;
button8.onclick = mySixthFnc;