let c = {
    age:20,
    job:"Teacher",
    details:function(){
        console.log("My age is: "+this.age);
        console.log("My job is: "+this.job);
    },
    profile: "Assistant Professor",
    job_title: function (){
        console.log("My job title is: "+this.job)
        console.log("My profile is: "+this.profile)
    }
}
