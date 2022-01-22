function printAll(arg: string | string[]) {
    if (typeof arg === 'object') {
        arg.forEach(function (s) {
            console.log(s);
        })
        return;
    }
    if (typeof arg === 'string') {
        console.log(arg)
    }
    return;
}

const a = ['a', 'b' , 'c'];
const t = 'text';

printAll(a);
printAll(t);

const n = 1;

if (!n) {
    console.log('False');
} else {
    console.log('True');
}

const s = '';

if(!s) {
    console.log('False');
} else {
    console.log('True')
}
