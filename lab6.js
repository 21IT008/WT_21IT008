class Student{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    show_name(){
        return this.name;
    }
    show_ID(){
        return this.id;
    }
}
function student_data(){
    let student_name=document.getElementById("name").value;
    let student_ID=document.getElementById("ID").value;
    //console.log(student_name," ",student_ID);
    let a=new Student(student_name,student_ID);
    let tr=document.createElement('tr');
    let t1=document.createElement('th');
    t1.textContent=a.show_name();
    let t2=document.createElement('th');
    t2.textContent=a.show_ID();
    let check=/[0-9]{2}IT[0-9]{3}$/
    let check2=/[0-9]{2}IT[0][0][0]$/
    try{
        if(check2.test(a.show_ID())){
            throw new Error("Please enter valid ID");
        }
        else if(check.test(a.show_ID())){
            tr.appendChild(t1);
            tr.appendChild(t2);
            document.getElementById("Table").appendChild(tr);
        }
        else{
        throw new Error("Please enter valid ID");}
    }
    catch(e){
        alert(e);
    }
    document.getElementById("name").value=null;
    document.getElementById("ID").value=null;
}