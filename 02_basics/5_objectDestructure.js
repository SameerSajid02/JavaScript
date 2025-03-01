const Obj = {
  CourseInstructorId: 1,
  name: "Sameer",
  Age: "23",
  Email: "Abc@gmail.com",
  Address: "Abc, block, Karachi",
};

const { Email } = Obj;
console.log(Email);

const { CourseInstructorId: Id } = Obj;
console.log(Id);
