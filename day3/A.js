let arr= [10,20,30,40,50]
let sum =0;
for(let idx =0; idx<arr.length; idx++){
    sum+=arr[idx]
}

console.log(sum)

console.log("\n\n============== 2D Array  =====================\n\n")

let students=[
    ["Avinash","AIML",20,99],
    ["Ash","AIML",19,95],
    ["Avi","AIML",18,97]
]

console.log(students,"\n")

const student = {
    id:100,
    "name jf":"Avinash",
    course:"B.Tech"
}

console.log(student.id)
console.log(student["name jf"])
