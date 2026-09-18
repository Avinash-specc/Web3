function total(name, ...numbers){
    total = 0;
    for (let num of numbers){
        total+=num;
    }
    console.log(name+`Total = ${total}`)
}


let input = prompt("Enter numbers separated by commas:");

let numbers = input.split(",")

let result = total(...numbers);
console.log("ASH\nTotal = ",result)