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
    let removeBttn = document.querySelectorAll(".del");
    for(let i =0; i<removeBttn.length;i++){
        removeBttn[i].addEventListener("click",()=>{
            if(this.parentNode.parentNode){
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        });
    }
}
