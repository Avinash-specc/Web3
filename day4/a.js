console.log("==== String Object ====")
let name = "Avinash"
console.log('\n\n\n',name,'\n\n\n')
console.log("Length: ",name.length)

let str = "Welcome JavaScript"

console.log("UpperCase: ",str.toUpperCase())
console.log("LowerCase: ",str.toLowerCase())

console.log("Index of vi: ",name.indexOf('in'))

console.log("Last Index: ",str.lastIndexOf('Java'))

console.log("Slice: ",str.slice(0,7))
console.log("Splice: ",str.slice(0,4))

let data = "HTML,CSS,JavaScript"
let result = data.split(',')
console.log("Split: ",result)

let text = "I love Java"
console.log(text.replace("Java","javascript"))

let first = "Avinash"
let last = " Kushwaha"

let fullName = first.concat(last)
console.log(fullName)

let course = "JavaScript"
console.log("\n\n\n===== includes =====\n\n\n")
console.log(course.includes("Script"))

let student = [
    {
        id: 101,
        name:"ud"
    }
]
console.log(student)

let arr = [1,3,5,3,6]
arr.unshift(63)// adds element at the very first index
console.log(arr)
arr.shift(34) //pop's the first element
console.log(arr)