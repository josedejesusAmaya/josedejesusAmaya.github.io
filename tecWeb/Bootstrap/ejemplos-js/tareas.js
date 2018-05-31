var btnAgregar = document.getElementById("btn-agregar");
btnAgregar.onclick = agregar;
var tarea1 = document.getElementById("tarea1");
var tarea2 = document.getElementById("tarea2");
var btnBorrar = document.getElementById("btn-borrar");
btnBorrar.addEventListener('clic', borrarTodo);



function borrarTodo()
{
    var listaTareas = document.getElementById("lista-tareas");
    while(listaTareas.firstChild){
        listaTareas.removeChild(listaTareas.firstChild);
    }

    /*if (confirm("Estas seguro"))
    {
        console.log("voy a borrar");
    }
    else
    {
        console.log("no");
    }*/
    
}

tarea1.ondblclick= resaltar;
tarea2.ondblclick = resaltar;


function resaltar(evento){
    var nodoElemento = evento.target;
    
    if(nodoElemento.classList.contains("list-group-item-warning")){
        nodoElemento.classList.remove("list-group-item-warning");
    }
    else{
        nodoElemento.classList.add("list-group-item-warning");
    }
    
}


function agregar()
{
   
    var tarea = document.getElementById('tarea').value;
    if(tarea != "" ){
    var listaTareas = document.getElementById('lista-tareas');
    //listaTareas.innerHTML += "<li>" + tarea + "</li>";
    var nodoElemento = document.createElement("li");
    var nodoTexto = document.createTextNode(tarea);
    nodoElemento.classList.add("list-group-item");
    nodoElemento.appendChild(nodoTexto);
    listaTareas.appendChild(nodoElemento);
    var contador = document.getElementById('contador');
    contador.innerText++;
    }
    //console.log(tarea);
    
}
