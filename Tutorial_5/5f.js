//Create class Person with first and last name, as well as getter and setter 
//for full name. Rewrite Student class from task E to extend class Person
class Person{
    constructor(name, surname){
        this.name-name;
        this.surname=surname;
    }
    get FullName(){
        return this.name+" "+this.surname;
    }
    set FullName(FullName){
        let NameSurname=FullName.split(" ");
        this.name=NameSurname[0];
        this.surname=NameSurname[1];
    }
}
class Student2 extends Person{
    constructor(id, name, surname, marks){
        super(name, surname);
        this.id = id;
        this.marks = marks;
    }
    get Data() {
        const {id, name, surname, marks} =this;
        let marksAvg=marks.reduce((pr, mark) => pr+mark,0)/marks.length;
        return `Name: ${name}, Surname: ${surname}, avg: ${marksAvg}`;
    }
    get MarksAvg() {
        const {marks} =this;
        let marksAvg=marks.reduce((pr, mark) => pr+mark,0)/marks.length;
       return marksAvg;
    }
}
console.log("Task 5 E:")
var student3= new Student2(20987,"Anhelinka", "Mukha", [5,4,3,5,4]);
var student4=new Student2();
console.log(student3.MarksAvg);
student4.FullName="Maxim Mukha";
console.log(student4.FullName);