// types in typescript are very simliar to interfaces
// it is used to aggregate all data together

type Userx = {
    firstName: string,
    secondName: string,
    age: number
}

// Unions

type StringOrNumber = string | Number;  // We can't do this using interfaces

function printID(id: StringOrNumber){
    console.log("id: "+id);
}

printID(101);
printID("101");

// Intersection

type Employeex = {
    name: string;
    startDate: Date;
};

type Managerx = {
    name: string;
    department: string;
}

type TeamLead = Employeex & Managerx

const teamLead: TeamLead = {
    name: "shivam",
    startDate: new Date(),
    department: "backchodi"
} 