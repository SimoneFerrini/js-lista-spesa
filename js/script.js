
let listaSpesa = [];

let listElements = document.getElementById("my-list");

let indice = 0;

let addEl = document.getElementById("add-btn");

let newElInput = document.getElementById("adding-new-item");

addEl.addEventListener("click", function(){
    if(newElInput.value == ""){
        alert("Non hai inserito niente");
        console.log(newElInput.value);
    }else{
        listaSpesa.push(newElInput.value);
        newElInput.value = "";
        console.log(newElInput.value)
    }

    while(indice < listaSpesa.length){
        let newListItem = document.createElement("li");
        listElements.append(newListItem);
        newListItem.classList.add("list-underline");
        newListItem.innerHTML = listaSpesa[indice];
        indice++;
    }
})


