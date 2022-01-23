interface User {
    name: string;
    id: number;
    age: number;
}

interface Admin {
    name: string;
}

function logUserProperty(user: User, key: 'name' | 'id') {
    console.log(user[key]);
}

function logSomeUserProperty(user: User, key: keyof User) {
    console.log(user[key]);
}

function logProperty<T>(obj: T, key: keyof T) {
    console.log(obj[key]);
}

function logPropertyOfUserOrAdmin<T extends User|Admin>(obj: T, key: keyof T) {
    console.log(obj[key]);
}

const u1: User = { name: 'me', id: 20, age: 35 };

logSomeUserProperty(u1, 'age');

const a1: Admin = {name: 'admin'};

//not allowed
//logSomeUserProperty(a1, 'age');

logProperty(a1, 'name');

logProperty({name: 'you', age: 22, gender: 'female'}, 'gender');
