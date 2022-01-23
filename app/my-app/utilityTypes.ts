interface User {
    name: string;
    email?: string;
    id? : number;
}

type UserOptional = Partial<User>;

function updateUserData(user: User, data: UserOptional) {
    return {
        ...user,
        ...data,
    }
}

let u1 : User = {name : 'me'};

console.log(u1);

u1 = updateUserData(u1, {email : 'me@md.com', id :100,});

console.log(u1);

// only excepts properties of User
u1 = updateUserData(u1, {email : 'me@md.com', id :100, auto: 'Mitsubishi'});

type UserRequired = Required<User>;

//take email and name
type UserBaseInfo = Pick<User, 'email'|'name'>;

// take all without id
type UserInfo = Omit<User, 'id'>;