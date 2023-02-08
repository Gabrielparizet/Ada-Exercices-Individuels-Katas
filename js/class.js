class Persons{

    constructor(first, last){
        this.firstName = first;
        this.lastName = last;
    }

    get fullName(){
        return this.makeFullName();
    }

    makeFullName(){
        return this.firstName + ' ' + this.lastName;
    }

}


class Users extends Persons{

    constructor(first, last, email){
        super(first, last)
        this.email = email
    }

    static getTotal(){
        return 5
    }

    static get total(){
        return this.getTotal()
    }


}

let user = new Users('Gabriel', 'Parizet', 'eivulhez@gmail.com');
let person = new Persons('Jane', 'Do')
console.log(Users.total)

console.log(user instanceof Persons)
console.log(person instanceof Users)