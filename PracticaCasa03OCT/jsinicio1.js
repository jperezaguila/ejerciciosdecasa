var tabla = [];

function cargardatos() {
    var capa = document.getElementById("capa1");
    capa.innerHTML = "";
    for (var i = 0 ; i<tabla.length; i++) {
        //capa.innerHTML += i + "-->" + tabla[i] + " <br/>";
        capa.innerHTML += tabla[i] + " <br/>";
    }
    //alert("Contacto añadido correctamente");
}
function añadir() {
    var nombre = document.getElementById("txtnombre");
    tabla.push(nombre.value);
    nombre.value = "";
    cargardatos();
}
document.getElementById("btnadd").onclick = añadir;
