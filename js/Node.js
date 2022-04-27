function newRegister(){
    let newp = document.createElement("p");
    let userName = document.querySelector("#userName");
    let newText = document.createTextNode(userName  .value);
    newp.appendChild(newText);
    let delBttn = document.createElement("span");
    let delText = document.createTextNode("X");
    delBttn.setAttribute("class","del");
    delBttn.appendChild(delText);
    newp.appendChild(delBttn);



    let nameList = document.querySelector("#nameList");  
    nameList.insertBefore(newp, nameList.childNodes[0]);
    userName.value = "";

}
function DeleteRegister(){

    let firstDel = document.querySelectorAll(".del");
    let firstP = document.querySelectorAll("p");
    
}
