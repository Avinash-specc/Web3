class Student{
    static cnt =0;
    constructor(rollNo,name, marks){
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
        Student.cnt++;
    }

    displayResult(){
        console.log("Name",this.name)
        console.log("RollNo",this.rollNo)
        console.log("Marks",this.marks)
        if(this.marks>=90) console.log("A+")
        else if(this.marks>=80) console.log("B")
        else console.log("Fail")
    }

    displayCount(){
        console.log("Total No. of Students are",Student.cnt)
    }
}

let s1 = new Student(43,"Avinash",99)
let s2 = new Student(43,"Avinash",99)
let s3 = new Student(43,"Avinash",99)

s1.displayResult()
s2.displayResult()
s3.displayResult()

s1.displayCount()