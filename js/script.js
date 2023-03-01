
let listaSpesa = ["latte", "uova", "pane", "formaggio", "birre", "preservativi", "evidenziatori", "arance", "zucchero", "pasta"];

let listElements = document.getElementById("my-list");

let indice = 0;

while(indice < listaSpesa.length){
    let newListItem = document.createElement("li");
    listElements.append(newListItem);
    newListItem.innerHTML = listaSpesa[indice];
    indice++;
}