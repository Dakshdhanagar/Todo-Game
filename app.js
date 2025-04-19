let btn =document.querySelector("button");

let ul=document.querySelector("ul");
let inp =document.querySelector("input");


btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn= document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete"); //assigning class



    item.appendChild(delBtn);
    ul.appendChild(item);
   
    inp.value = "";
} );

//event bubbling with usig ul
//now by using event in callback we know which button was clicked
//with the help of event.target

ul.addEventListener("click", function (event) {
    
    // console.dir(event.target.nodeName);
     if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted")
    }


});

// let dts =document.querySelectorAll(".delete");
// for( delBtn of dts){
//     delBtn.addEventListener("click",function () {
//         let par= this.parentElement;
//         console.log(par);
//         console.log("working");
//         par.remove();
       
//     });
// }

