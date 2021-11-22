function Student(id, name, surname, marks){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.marks=marks;
}

Student.prototype.getData= function(params) {
    const {id, name, surname, marks} =this;
    let marksAvg=marks.reduce((pr, mark) => pr+mark,0)/marks.length;
    console.log(`Name: ${name}, Surname: ${surname}, avg: ${marksAvg}`);
}

var student1= new Student(20987,"Anhelina", "Mukha", [5,4,3,5,4]);
student1.getData();