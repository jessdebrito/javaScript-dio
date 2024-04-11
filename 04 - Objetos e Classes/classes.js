class Person {
    name;
    age;
    birthYear;


    constructor(name, age){
        this.name =  name;
        this.age = age;
        this.birthYear = 2024 - age;
    }

    descrever() {
        console.log(`Meu nome é ${this.name} e minha idae é ${this.age}`);
    }

}
// Classe é uma definição do que deveria ser e uma instancia é uma ocorrencia de uma "pessoa"/ objeto

const jessica = new Person('Jéssica', 29);
console.log(jessica);
