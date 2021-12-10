function addRow() {
    const subject_elem = document.querySelector("#subject");
    const mark_elem = document.querySelector("#mark");
    const subject = subject_elem.value;
    const mark = mark_elem.value;
    
    let table = document.querySelector("table");

    var row = table.insertRow(-1);
    var subject_cell = row.insertCell(0);
    var mark_cell = row.insertCell(1);
    subject_cell.innerHTML = subject;
    mark_cell.innerHTML = mark;
}