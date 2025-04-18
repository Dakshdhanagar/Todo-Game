let btn =document.querySelector("button");

let ul=document.querySelector("ul");
let input =document.querySelector("input");


btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.val;

    let delBtn= document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete"); //assigning class



    item.appendChild(delBtn);
    ul.appendChild(item);
   
    input.val="";
} );

let dts =document.querySelectorAll(".delete");
for( delBtn of dts){
    delBtn.addEventListener("click",function () {
        let par= this.parentElement;
        console.log(par);
        console.log("working");
        par.remove();
       
    });
}

