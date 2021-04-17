//alert("loading");
function addNewWEField(){
  //  console.log("Adding new field");
  let newNode=document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",3);
  newNode.setAttribute("placeholder","Enter here");
  
  let weOb=document.getElementById("we");
  let weAddButtonOb=document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
  
    aqOb.insertBefore(newNode, aqAddButtonOb);  
}

function addNewTCField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("tcField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    
    let tcOb=document.getElementById("tc");
    let tcAddButtonOb=document.getElementById("tcAddButton");
  
    tcOb.insertBefore(newNode, tcAddButtonOb);  
}


//generating cv
function generateCV(){
  //console.log("generating CV");

let nameField=document.getElementById("nameField").value;

let nameT1=document.getElementById("nameT1");

//nameT1.innerHTML= nameField;

//direct

document.getElementById("nameT2").innerHTML=nameField;

//Email
document.getElementById("EmailT1").innerHTML=document.getElementById("EmailField").value;
    
//contact
document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

//address
document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
document.getElementById("lT").innerHTML=document.getElementById("lField").value;    

//objective

document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

//work experience

let wes=document.getElementsByClassName("weField");

let str = "";

for (let e of wes) {
  str = str + `<li> ${e.value} </li>`;
}

document.getElementById("weT").innerHTML=str;


//aq

let aqs=document.getElementsByClassName("eqField");

let str1 = "";

for (let e of aqs) {
  str1 = str1 + `<li> ${e.value} </li>`;
}

document.getElementById("aqT").innerHTML=str1;
   
    
//tc

let tcs=document.getElementsByClassName("tcField");

let str2 = "";

for (let e of tcs) {
  str2 = str2 + `<li> ${e.value} </li>`;
}

document.getElementById("tcT").innerHTML=str2;

//code for setting image 


//console.log(file);

let reader = new FileReader();

//reader.readAsDataURL(file);



document.getElementById("cv-form").style.display="none";
document.getElementById("cv-template").style.display="block";

}

//print cv
function printCV(){
    document.getElementById("printCvbtn").style.display="none";
    window.print();
}