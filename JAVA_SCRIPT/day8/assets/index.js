let number = [10, 20, 30, 40];

for (let a = 0; a < number.length; a++) {
    console.log(number[a]);
}

let name=["bhuvi","akash", "dhana", "anbu", "arun"];
for (let a=0; a< name .length; a++){
    console.log(name [a]);
    
}

let result = [];

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        result.push(i);
    }
}
console.log(result.join(" "));


let student=[{name : "arun", mark : 80},
    {name : "bhuvi", mark : 90 },
     {name : "akash", mark : 60  } ]


     
  for(let a=0; a<=student.length; a++){

    if(student[a].mark>=80)
    {
        console.log(student [a].name,student[a].mark);
        
         
    }
  
    
  }
     


