function calc(){
    let x=document.getElementById("cal").value;
    let p = parseInt(prompt("Enter 1st number "));
    let q = parseInt(prompt("Enter 2nd number "));
    let c = 0
    if(x=="sum"){
    c = sum(p,q);
    }
    else if(x=="sub")
    c = sub(p,q);
    else if(x=="mul")
    c = mul(p,q);
    else if(x=="div")
    c = div(p,q);
    document.getElementById("demo1").innerHTML = "Answer is: " + c;
}
function get(y){
  // let y=document.getElementById("cal1").value;
  let p = parseInt(document.getElementById("data1").value);
  let q = parseInt(document.getElementById("data2").value);
  let c = 0
  if(y=="sum"){
    c = sum(p,q);
  }
  else if(y=="sub"){
    c = sub(p,q);
  }
  else if(y=="mul"){
    c = mul(p,q);
  }
  else if(y=="div"){
    c = div(p,q);
  }
  document.getElementById("demo2").innerHTML = "Answer is: " + c;
}

function sum(p1,p2) {
    let sm=p1+p2;
    return sm
  }

  function sub(p1,p2) {
    let sm=p1-p2;
    return sm
  }

  function mul(p1,p2) {
    let sm=p1*p2;
    return sm
  }

  function div(p1,p2) {
    let sm=p1/p2;
    return sm;
  }

  function temp(){
    let t1 = parseFloat(document.getElementById("data3").value)
    let t2 = parseFloat((t1 * parseFloat(9/5)) + 32);
    document.getElementById("demo3").innerHTML = t2;
  }
