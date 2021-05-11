student_names= [];
function Register() {
    var name1= document.getElementById("Student1").value;
    var name2= document.getElementById("Student2").value;
    var name3= document.getElementById("Student3").value;
    var name4= document.getElementById("Student4").value;

    student_names.push(name1);
    student_names.push(name2);
    student_names.push(name3);
    student_names.push(name4);

    document.getElementById("display_name").innerHTML=student_names;
}