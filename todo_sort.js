let arr=[],arr2=[];
function add(){
    let a=document.getElementById("item").value;
    let b=document.createElement("li");
    b.textContent=a;
    
    arr.push(a);
    arr2.push(a);
    
    document.getElementById("list").appendChild(b);
}
function dotask(){
    console.log("connect");
    let dropdownvalue = document.getElementById("sel").value;
    document.getElementById("list").innerHTML=null;
    
    if(dropdownvalue=="sort"){
        
        
        arr.sort();
       
         
        
            for(let i=0;i<arr.length;i++){
                
                let b=document.createElement("li");
                b.textContent=arr[i];
                
                document.getElementById("list").appendChild(b);
            }    
    }
    else{
        for(i=0;i<arr2.length;i++){
            let b=document.createElement("li");
            b.textContent=arr2[i];
             document.getElementById("list").appendChild(b);
        }
    }
}