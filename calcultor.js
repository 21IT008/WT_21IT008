// let a=(prompt("enter 1st number"));
// let b=(prompt("enter 2nd number"));
// let sum=parseInt(a)+parseInt(b);
// console.log(sum);
// var x = document.getElementById("first");
// x.innerHTML = sum;
// //uam2iaf
function calc(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    parseInt(num1);
    parseInt(num2);
    let x=document.getElementById("calc").value;
    if(x=="sum")
        document.getElementById("ans").innerHTML=parseInt(num1)+parseInt(num2);
    if(x=="sub")
    
    document.getElementById("ans").innerHTML=num1-num2;

    if(x=="mul")
    
    document.getElementById("ans").innerHTML=num1*num2;

    if(x=="div")
    
    document.getElementById("ans").innerHTML=num1/num2;

}