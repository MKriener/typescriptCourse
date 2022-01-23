class User {
    name :string;
    id : number;
}

class Admin {
    name:string;
}

//works fo types, interfaces and classes
function printInfo(arg: User|Admin) {
    if ('id' in arg) {
        console.log(arg['id']);
        console.log(arg['name']);
    } else {
        console.log(arg['name']);
    }
}

// instance of only works for classes
function printInfo2(arg: User|Admin) {
    if (arg instanceof User) {
        console.log(arg['id']);
        console.log(arg['name']);
    } else {
        console.log(arg['name']);
    }
}