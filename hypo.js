const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn= document.querySelector("#is-triangle-btn");
const outputE1= document.querySelector("#output");


function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    // console.log(sumOfSquares)
    return sumOfSquares;
}
function calculateHypotenuse(){
   const sumOfSquares= calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const lenghtOfHypotenuse = Math.sqrt(sumOfSquares);
    outputE1.innerText= "The length of Hypotenuse is " +lenghtOfHypotenuse;
}
hypotenuseBtn.addEventListener('click', calculateHypotenuse);