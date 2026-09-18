class Hello {
    faculty;
    constructor(name) {
        this.faculty = "Ud";
        console.log("Hello", name);
    }
}

let h1 = new Hello("Ud");

//Create a class Sec_A and display the data of 5 students using constructor

class Sec_A{
    Name;
    RollNo;
    Add;
    M_no;
    constructor(Name,RollNo,Add,M_no){
        this.Name = Name;
        this.RollNo = RollNo;
        this.Add = Add;
        this.M_no = M_no;

        console.log("Name", Name)
        console.log("RollNO",RollNo)
        console.log("Address",Add)
        console.log("MobileNo",M_no)
    }
}

let s1 = new Sec_A ("Avinash",54,"agdf",5854)
let s2 = new Sec_A ("Avinash",54,"agdf",5854)
let s3 = new Sec_A ("Avinash",54,"agdf",5854)
let s4 = new Sec_A ("Avinash",54,"agdf",5854)
let s5 = new Sec_A ("Avinash",54,"agdf",5854)

class Hello3{
    static name = "Example of static variable and method";
    static show(){
        console.log("Hello class this is "+Hello3.name)
    }
}
Hello3.show()

class Hello5{
    static name = "Example of static method with instance variable";
    constructor(){
        this.instructor = "Instance variable"
    }
    show(){
        console.log("Static variable: "+Hello5.name)
        console.log("Instance variable: "+this.instructor)
    }
}

let h5 = new Hello5()
h5.show()

class Hello6 {
    static course = "Static variable";   

    show() {                           
        console.log("Static variable: " + Hello6.course);
        console.log("Instance method: called via object");
    }

    static display() {                   
        console.log("Static method: called via class");
    }
}

Hello6.display();  
let h6 = new Hello6();
h6.show();     
