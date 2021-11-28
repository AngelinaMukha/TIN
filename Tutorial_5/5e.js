class Student1{
    constructor(id, name, surname, marks){
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.marks=marks;
    }
    get FullName(){
        return this.name+" "+this.surname;
    }
    set FullName(FullName){
        let NameSurname=FullName.split(" ");
        this.name=NameSurname[0];
        this.surname=NameSurname[1];
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
var student1= new Student1(20987,"Anhelina", "Mukha", [5,4,3,5,4]);
var student2=new Student1();
console.log(student1.MarksAvg);
student2.FullName="Maxim Mukha";
console.log(student2.FullName);