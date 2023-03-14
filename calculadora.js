//TO DO:Boton de limpiar pantalla
//hacer un try catch para manejar la excepción


var botones=["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".", "=", "/", "C"]



function renderizarGUI(){


    //Div calculadora
    //1. crear elemento
    const divCalculadora= document.createElement("div")
    //2.Agregar atributos (opcional)
    divCalculadora.setAttribute("id","calculadora");
    divCalculadora.setAttribute("class","text-center");
    divCalculadora.setAttribute("style","width:50%; margin=0 auto;")
    //3.Insertar elemento en el DOM
    document.body.appendChild(divCalculadora);

    //Div pantalla
    const divPantalla= document.createElement("div")
    divPantalla.setAttribute("id","divPantalla");
    //divPantalla.setAttribute("class","form-control");
    divCalculadora.appendChild(divPantalla);

    //Pantalla
    const pantalla= document.createElement("input")
    pantalla.setAttribute("id","pantalla");
    pantalla.setAttribute("type","text");
    pantalla.setAttribute("value","0");
    pantalla.setAttribute("disable","true");
    pantalla.setAttribute("class","form-control text-right")
    divPantalla.appendChild(pantalla);
    

    //Div Botones
    const divBotones= document.createElement("div")
    divBotones.setAttribute("id","botones");
    divCalculadora.appendChild(divBotones);

  // function init(){
    //var reset = document.getElementById('reset');}
      //reset.onclick = function(e){
      //resetear();
  //}

    for(let i=0;i<botones.length;i++){
        //crear filas por 4 caracteres
        if(i%4==0){
            const divFila=document.createElement("div");
            divFila.setAttribute("class","row");
            divBotones.appendChild(divFila);
        }
      let boton=document.createElement("button");
      boton.setAttribute("id", "boton"+botones[i]);
      boton.setAttribute("class","btn btn-success col-3 border-white");
      boton.innerHTML=botones[i];  //agregar texto en boton
      
      // Agregar un "escuchador de eventos"

      boton.addEventListener("click", function(){
        procesarEvento(boton);


      })
      
      divBotones.lastChild.appendChild(boton); 


    }
}
function procesarEvento(boton){
  let miPantalla= document.getElementById("pantalla");

  if(miPantalla.value=="0"){
    miPantalla.value="";
  }
  if(boton.innerHTML != "="){
    miPantalla.value+=boton.innerHTML;
  }else{
    //procesar la expresión con math.js y mostrar e pantalla
    try{
    let resultado=math.evaluate(miPantalla.value);
    miPantalla.value=resultado;
    }catch(error){
        alert("No Sirve");
    }
  }
  //mipantalla.value=boton.innerHTML;
    //console.log(boton.innerHTML)

}

renderizarGUI();// llamar las cosas en pantalla de una