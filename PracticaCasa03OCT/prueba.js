function person(name, city, age, profession) {
    this.name = name;
    this.city = city;
    this.age = age;
    this.profession = profession;
}

var carlos = new person("Carlos Fernández", "Montevideo", 1980, "Ingeniero");
var maria = new person("María González", "Artigas", 1985, "Enfermera");
var juan = new person("Juan Martínez", "Mercedes", 1978, "Médico");

person.prototype.createBox = function () {
    var content = document.createElement('p');
    content.innerHTML = "<span>" + this.name + "</span><br>" + this.city + "<br>" + this.age + "<br>" + this.profession;
    document.getElementsByTagName("body")[0].appendChild(content);
}

function createContent() {
    carlos.createBox();
    maria.createBox();
    juan.createBox();
}