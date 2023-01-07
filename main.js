let item=document.getElementById("item");
let item2=document.getElementById("item2");
let toDoBox=document.getElementById("to-do-box");

item.addEventListener('keyup',
    function(e){
        // console.log(e.key);
        if(e.key=="Enter")
        {
            // console.log(item.value);
            addToDo(item.value);
            this.value="";//value of item
        }
    }
)

item2.addEventListener('click',
    function(){
        // console.log(item.value);
        addToDo(item.value);
        item.value="";
    }
)



const addToDo = (item) =>{
    let listItem=document.createElement("li");

    listItem.innerHTML=`   
        ${item}
        <i class="fa-solid fa-circle-xmark"></i>
    `
    toDoBox.appendChild(listItem);

    listItem.addEventListener(
        "click",
        function(){

            this.classList.toggle("done");
        }
    )

    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove();
        }
    )


}

