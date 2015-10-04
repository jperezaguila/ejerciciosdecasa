//var Persona = [];
//var trabajador = [];
//var estudiante = [];

function Persona(nombre, edad) {
    this.nombre = nombre || "";
    this.edad = edad || "";
}

function Trabajador (nombre, edad ,puesto, salario) {
    this.base = Persona;
    this.base(nombre, edad);
    this.puesto = puesto || "";
    this.salario = salario || "";
}
Trabajador.prototype = new Persona;

function Estudiante(nombre, edad, carrera, nota) {
    this.base = Persona;
    this.base(nombre, edad);
    this.carrera = carrera || "";
    this.nota = nota || "";
}
Estudiante.prototype = new Persona;

//document.onreadystatechange(Persona);

//document.onreadystatechange(Trabajador);
//document.onreadystatechange(Estudiante);

//function cargardatos() {
//    var capa = document.getElementById("capa2");
//    capa.innerHTML = "";
//    for (var i = 0 ; i<Persona.length; i++) {
//        //capa.innerHTML += i + "-->" + tabla[i] + " <br/>";
//        capa.innerHTML += Persona[i] + " <br/>";
//}

function altatrabajador() {
    var nombre = new Persona(document.getElementsByName("txtnom", "txtedad", "txtpuesto","txtsal"));
}

Trabajador.prototype.content=function() {
    var capa = document.createElement("capa1");
    capa.innerHTML = this.puesto + this.salario;
    document.getElementById("body")[0].appendChild(content);
}
//document.hidden("capa1");
//document.getElementById("btnalta1").click() = altatrabajador;
document.getElementById("btnalta1").click(altatrabajador)