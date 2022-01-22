function add(arg1: number |string, arg2 : number |string) {
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 + arg2;
    }

    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1 + arg2;
    }

    return;
}

const a1 = "me";
const a2 = "you";

//did not know string will be returned
const r1 = add(a1, a2) as string;


const a3 = 0;
const a4 = 1;

//did not know undefined will be returned
const r2 = add(a1, a3) as undefined;

//did not know number will be returned
const r3 = add(a3, a4) as number;