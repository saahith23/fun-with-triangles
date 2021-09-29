var txtInput= document.querySelectorAll(".input-one");
var btn = document.querySelector("#is-triangle-btn");
var txtOutput= document.querySelector("#output");

function calculateProduct(a,b){
    var product =a*b;
    return product;

}
 function calculateArea(){
     var product = calculateProduct(Number(txtInput[0].value), Number(txtInput[1].value));
     var area = product/2;
     
     txtOutput.innerText = "the area of triangle is "+ area;
 }




btn.addEventListener('click', calculateArea);