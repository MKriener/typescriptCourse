type User =  {
    name : string,
    age : number,
    courses: string[]
}

type Permission = {
    permissionLevel: string;
}

type UserExtended = User & Permission;

const user1: UserExtended = {
    name: "Matthias",
    age : 34,
    courses: ["Symfony", "TypeScript", "laminas"],
    permissionLevel: 'Instructor',
}
console.log(user1);

const user2: UserExtended = {
    name : "Bob",
    age: 44,
    courses: ["Python", "Java"]
}

console.log(user2);

printUser(user1);
printUser(user2);

function printUser(user : {name : string, age :number, courses: string[]}) {
    console.log(user.name);
    console.log(user.age);
    user.courses.forEach(function (course) {
        console.log(course)
    })
}

printUserObject(user1);
printUserObject(user2);

function printUserObject(user : User|UserExtended) {
    console.log(user.name);
    console.log(user.age);
    user.courses.forEach(function (course) {
        console.log(course)
    })
    if (user instanceof 'UserExtended' ) {
        console.log(user);
    }
}