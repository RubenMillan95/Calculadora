
function renderizarGUI(){

    //1. crear elemento

    const divCalculadora= document.createElement("div")

    //2.Agregar atributos (opcional)
    divCalculadora.setAttribute("id","calculadora");

    //3.Insertar elemento en el DOM

    document.body.appendChild(divCalculadora);
}

renderizarGUI();// llamar las cosas en pantalla de una