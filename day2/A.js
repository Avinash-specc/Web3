console.log("\n\n===== Variables ===== \n\n")
var firstName = "Avinash"
var lastName = "Kushwaha"
console.log(`${firstName}  ${lastName}\n`)


console.log("\n==== If Else ====\n\n")

var a = 40
var b =30
if(a>b){
    console.log("A is greater, value of A =",a,"\n")
}
else{
    console.log(`B is greater, value of B = ${b}\n\n`)
}

console.log("\n==== Function ====\n\n\n")

function abes(){
    console.log("Welcome Students")
    console.log("Welcome to Node.js\n\n")
}

abes()
abes()


console.log("\n ==== Function with Parameters ====\n\n\n\n")
function greet(fname,lname){
    console.log("Hello",fname,lname)
}

greet("Utkarsh","Dixit")
greet("Waseem","Sir")



console.log("\n\n\n\n Function Return ====\n\n\n\n")

function add(x,y){
    return x+y
}

var result = add(20,30)

console.log("Sum =",result)

console.log("\n ===== Default Arguments =====\n\n\n\n")
function fullName(fname = "ABES",lname = "Engineering College"){
    return fname+" "+lname
}

console.log(fullName())
console.log(fullName("Utkarsh","Dixit\n\n\n\n"))

function totalMarks(math,english,science){
    return math+english+science
}

function percentage(total){
    return (total/300)*100
}

var total = totalMarks(99,99,93)
console.log("Total Marks: ",total)
console.log("Percentage",percentage(total)+"%")