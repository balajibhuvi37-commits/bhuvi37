let a=["mangoe" ,"banan", "apple"];
  for(let b=0;b<a.length;b++)
  {
    console.log(a[b]);
    
  }

  let student={
    name: "bhuvi", 
    age :  21 ,
    course: "fullstack",
    mark: 85,

  };

  console.log(student .name,);
  console.log(student.age);
  console.log(student.course);
  console.log(student.mark);
  
  let student1=[{name:"bhuvi", mark: 90,} ,{name:"arun", mark:75}]

  for(let a=0; a<student1.length; a++)
  {
    console.log(student1[a].name, student1[a].mark);
    
  }

  let students = [
    { name: "Bhuvi", mark: 90 },
    { name: "Arun", mark: 75 },
    { name: "Akash", mark: 60 }
];

for (let i = 0; i < students.length; i++) {

    if (students[i].name === "Arun") {
        console.log(students[i].name, students[i].mark);
    }

}
  