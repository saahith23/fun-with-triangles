const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn= document.querySelector("#hypotenuse-button");
const outputE1= document.querySelector("#output");


function calculateSumOfSquares(){
    const sumOfSquares = a*a + b*b;
    console.log(sumofSquares)
}
function calculateHypotenuse(){
    calculateSumOfSquares(3,4);
}
hypotenuseBtn.addEventListener('click', calculateHypotenuse);