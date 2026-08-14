const employee = {
    id:101,
    name:"Avinash",
    department:"AIML",
    display: function(){
        console.log(this.name)
        console.log(this.department)
    }
}

function hello (){
    console.log("ID: ",this.id)
    console.log("Name: ",this.name)
    console.log("Department: ",this.department)

}

hello.apply(employee)

employee.display()

// Delete

delete employee.display

// employee.display() // will throw an error as display function is deleted


