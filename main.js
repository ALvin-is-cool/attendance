var sort_array=[];
function submit (){
    var name_of_the_student=[];
var name1=document.getElementById("name_of_the_student1").value;
var name2=document.getElementById("name_of_the_student2").value;
var name3=document.getElementById("name_of_the_student3").value;
var name4=document.getElementById("name_of_the_student4").value;
var name5=document.getElementById("name_of_the_student5").value;
name_of_the_student.push(name1);
name_of_the_student.push(name2);
name_of_the_student.push(name3);
name_of_the_student.push(name4);
name_of_the_student.push(name5);
console.log(name_of_the_student);
document.getElementById("display").innerHTML=name_of_the_student;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort").style.display="inline-block";
sort_array=name_of_the_student;
}
function arrange(){ 
sort_array.sort(); 
console.log(sort_array);
document.getElementById("display1") .innerHTML=sort_array;

}























