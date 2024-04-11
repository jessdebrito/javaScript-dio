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

/* const jessica = new Person('Jéssica', 29);
console.log(jessica); */


// ----------------------------------
function comparePerson(person1, person2){
    if (person1.age > person2.age){
        console.log(`${person1.name} é mais velho(a) que ${person2.name}.`)
    } else if (person2.age > person1.age){
        console.log(`${person2.name} é mais velho(a) que ${person1.name}.`)
    } else {
        console.log(`${person1.name} e ${person2.name} tem a mesma idade.`)
    }
}

const jessica = new Person('Jéssica', 29);
const vitor = new Person('Victor', 30);

comparePerson(jessica,vitor);