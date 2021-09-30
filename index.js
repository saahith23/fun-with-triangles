const input = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputE1 = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}
function isTriangle(){
const sumOfAngles =calculateSumOfAngles(Number(input[0].value),Number(input[1].value),Number(input[2].value))
if(sumOfAngles===180){
    outputE1.innerText ='yay! the angles form a triangle';
}
else{
    outputE1.innerText="Oh Oh! The angles don't form a triangle";
}

}
isTriangleBtn.addEventListener("click",isTriangle)
