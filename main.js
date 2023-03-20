/* function cPuesto(){
    let divPuesto = document.getElementById("idPuesto"); 

    divPuesto.classList.remove("esconder");  
    divPuesto.classList.add("prueba1");
    let ocultar = document.getElementById("linkPuesto").classList.add("esconder"); 
    let traerTexto = document.getElementById("textoPuesto").textContent;
    let colocarTexto = document.getElementById("inputPuesto").value = traerTexto;
}

function aPuesto(){ 
    let nuevoTexto = document.querySelector("#inputPuesto"); 
    let texto1 = document.querySelector("#textoPuesto"); 
    texto1.textContent = nuevoTexto.value;  
    let vuelta = document.getElementById("idPuesto");
    vuelta.classList.add("esconder");
    let ocultar = document.querySelector("#linkPuesto").classList.remove("esconder");

}


function cAcercaDe(){
    let divPuesto = document.getElementById("idAcercaDe"); 

    divPuesto.classList.remove("esconder");  
    divPuesto.classList.add("prueba1");
    let ocultar = document.getElementById("linkAcercaDe").classList.add("esconder"); 
    let traerTexto = document.getElementById("textoAcercaDe").textContent;
    let colocarTexto = document.getElementById("inputAcercaDe").value = traerTexto;
}

function aAcercaDe(){ 
    let nuevoTexto = document.querySelector("#inputAcercaDe"); 
    let texto1 = document.querySelector("#textoAcercaDe"); 
    texto1.textContent = nuevoTexto.value;  
    let vuelta = document.getElementById("idAcercaDe");
    vuelta.classList.add("esconder");
    let ocultar = document.querySelector("#linkAcercaDe").classList.remove("esconder");

}
 */

class FuncionCambiar{
    constructor(valor1,valor2){
        this.valor1=valor1;
        this.valor2=valor2;
    }

    cambiar(valor1,valor2){
        this.textoACambiar = document.getElementById(valor1);
        this.textoNuevo = document.getElementById(valor2);
    }  
}

 function cambiarCasilla1(param){
    const cambio1 = param.textoNuevo.value;
    const cambio2 =param.textoACambiar;
    cambio2.textContent=cambio1; 
}

function visualizar (param1){
    const elementoVisualizar = param1;
    elementoVisualizar.classList.remove("oculto");
}

function casa(param2){
    const esconderVer = param2;
    esconderVer.classList.add("oculto"); 
}


const editarProfesion = new FuncionCambiar;
editarProfesion.cambiar("nombre1", "casilla1");

const editar2 = new FuncionCambiar;
editar2.cambiar("nombre2", "casilla2"); 
