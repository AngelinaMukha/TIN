function Student(id, name, surname, courses){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.courses=courses;
}

function createStudent(id, name, surname,) {
    return new Student(id, name, surname, ['course1', 'course2', 'course3']);
}

var student1= new Student(20987,"Anhelina", "Mukha", ['1', '2', '3']);
var student2 = createStudent(20987,"Anhelina", "Mukha");
console.log(student2);