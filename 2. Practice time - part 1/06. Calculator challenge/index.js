let num1 = 8
let num2 = 2
let num3
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
answ = document.getElementById("sum-el")

fst_btn = document.getElementById("btn-1")
snd_btn = document.getElementById("btn-2")
trd_btn = document.getElementById("btn-3")
frh_btn = document.getElementById("btn-4")

function add(){
    num3= num1+num2
    answ.textContent = "Sum:"+ num3
}

function subtract(){
    num3=num1-num2
    answ.textContent = "Sub:"+ num3
}

function divide(){
    num3 = num1/num2
    answ.textContent = "Div:"+ num3
}


function multiply(){
    num3=num1*num2
    answ.textContent = "Mul:"+ num3
}