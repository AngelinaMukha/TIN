function Student(id, name, surname, marks){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.marks=marks;
}

Student.prototype.getData= function() {
    const {id, name, surname, marks} =this;
    let marksAvg=marks.reduce((pr, mark) => pr+mark,0)/marks.length;
    console.log(`Name: ${name}, Surname: ${surname}, avg: ${marksAvg}`);
}
Student.prototype.getFullName= function() {
    const {name, surname} =this;
   return name+" "+surname;
}
Student.prototype.setFullName= function(name, surname) {
   this.name=name;
   this.surname=surname;
}
Student.prototype.getMarksAvg= function() {
    const {marks} =this;
    let marksAvg=marks.reduce((pr, mark) => pr+mark,0)/marks.length;
   return marksAvg;
}

console.log("Task 5 D:")
var student1= new Student(20987,"Anhelina", "Mukha", [5,4,3,5,4]);
var student2=new Student();
console.log(student1.getMarksAvg());
student2.setFullName("Maxim", "Mukha");
console.log(student2.getFullName());