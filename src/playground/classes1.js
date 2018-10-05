

class Person{
    constructor(age=0,name='Anonymous'){
     this.age = age;
     this.name = name;
    }
    getGreeting(){
        return `Hi. I am ${this.name}`
    }
    getDescription(){
        this.newAge = this.age+1;
        return `Age of ${this.name} is ${this.newAge}`;
    }
}

class Travelers extends Person{
    constructor(age,name,homelocation){
        super(age,name)
        this.homelocation=homelocation        
    }
    getGreeting(){
        let summary = super.getGreeting()
        if(this.homelocation){
            summary +=`   I am from ${this.homelocation}`
        }
        return summary
    }

}
const me = new Travelers(26,'Juan','Brazil');
console.log(me.getGreeting());

const other = new Travelers(29);
console.log(other.getGreeting());
