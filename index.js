const input = document.querySelector(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-button");
const outputE1 = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}
function isTriangle(){
const sumOfAngles =calculateSumOfAngles(Number(inputs[0],Number(inputs[1],Number(inputs[2]))
console.log(sumOfAngles)
}
isTriangleBtn.addEventListener('click',isTriangle)