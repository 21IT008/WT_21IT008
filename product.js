function car(){
    const car={
        name: "Supra",
        color: "white",
        price: "70 lakh",  
        weight:"1541 kg",      
    };
    display(car);
}
function bike(){
    const bike={
        name: "Royal Enfield",
        color: "Red",
        price: "2 lakh",
        weight:"195 kg",        
    };
    display(bike);
}
function phone(){
    const phone={
        name: "iphone",
        color: "Golden",
        price: "1 lakh",
        weight:"198 gm"
    };
    display(phone);
}
function display(temp){
    document.getElementById("print").innerHTML = null;
    for(i in temp){
        //console.log(i,temp[i]);
        const tr=document.createElement("tr");
        const carkey=document.createElement("td");
        const carvalue=document.createElement("td");
        carkey.textContent=i
        tr.appendChild(carkey);
        carvalue.textContent=temp[i];
        tr.appendChild(carvalue);
        document.getElementById("print").appendChild(tr);
    }
   
}