

class dadosBank {
    name;
    age;
    account;

    constructor(name,age,account){
        this.name = name;
        this.age = age;
        this.account = account;
    }


    printDados(){
        console.log(`Meu nome e ${this.name}, tenho ${this.age} anos e minha conta no banco ${this.account}`)
    }
}

//const usuario_1 = new dadosBank('Vinicius Vilela', 19, '105.934.574-98')
//usuario_1.printDados();



function olderPeople(p1, p2){
    if(p1.age > p2.age){
        console.log(`A pessoa ${p1.name} e mais velha que ${p2.name}`)
    }
    else {
        console.log(`A pessoa ${p2.name} e mais velha que ${p1.name}`)
    }
}

const p1 = new dadosBank('Vinicius Vilela', 19, '105.934.574-98');
const p2 = new dadosBank('Mariana Bezerra', 11, '55555555555555');

olderPeople(p1,p2);