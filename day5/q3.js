studentDetails = {
    "Name":"Ravi",
    "Marks":80,
    "Grade":'A',
    updateGrade: function(newGrade){
        this.Grade = newGrade;
    }
}

studentDetails.updateGrade("A+")
console.log(studentDetails.Grade)
