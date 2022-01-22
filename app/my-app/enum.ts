 enum PermissionLevel {
    INSTRUCTOR,
     STUDENT,
     ADMIN,
 }

 interface User {
     name : string,
     age :number,
     courses: string[]
 }
 interface UserExtended extends User{
     permissionLevel?: PermissionLevel //optional
 }

 const user1: UserExtended = {
     name: "Matthias",
     age : 34,
     courses: ["Symfony", "TypeScript", "laminas"],
     permissionLevel: PermissionLevel.INSTRUCTOR,
 }
 console.log(user1);

 const user2: UserExtended = {
     name : "Bob",
     age: 44,
     courses: ["Python", "Java"],
     permissionLevel: PermissionLevel.STUDENT
 }

 console.log(user2);