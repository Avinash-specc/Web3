function College(name, location) {

    this.name = name;
    this.location = location;

    this.department = {
        name: "CSE-AIML",
        hod: "Dr. Deepali Dev"
    };

    this.class = {
        name: "AIML-'A'",
        students: 60
    };

    this.display = function() {
        console.log("College Name: " + this.name);
        console.log("Location: " + this.location);

        console.log("Department: " + this.department.name);
        console.log("HOD: " + this.department.hod);

        console.log("Class: " + this.class.name);
        console.log("Students: " + this.class.students);
    };
}

const college1 = new College("ABES College", "Ghaziabad");

college1.display();