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