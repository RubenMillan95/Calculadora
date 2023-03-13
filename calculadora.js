
function renderizarGUI(){


    //Div calculadora
    //1. crear elemento
    const divCalculadora= document.createElement("div")
    //2.Agregar atributos (opcional)
    divCalculadora.setAttribute("id","calculadora");
    divCalculadora.setAttribute("class","text-center");
    divCalculadora.setAttribute("style","width:50%; margin=0 auto;");
    //3.Insertar elemento en el DOM
    document.body.appendChild(divCalculadora);

    //Div pantalla
    const divPantalla= document.createElement("div")
    divPantalla.setAttribute("id","divpantalla");
    divPantalla.setAttribute("class","form-control");
    divCalculadora.appendChild(divPantalla);

    //Pantalla
    const Pantalla= document.createElement("div")
    Pantalla.setAttribute("id","pantalla");
    Pantalla.setAttribute("type","text");
    Pantalla.setAttribute("value","0");
    Pantalla.setAttribute("disable","true");
    Pantalla.setAttribute("class","form-control text-right");
    divPantalla.appendChild(Pantalla);
    

    //Div Botones
    const divBotones= document.createElement("div")
    divBotones.setAttribute("id","botones");
    divCalculadora.appendChild(divBotones);
}

renderizarGUI();// llamar las cosas en pantalla de una