let list = [1, 2, 3];
console.log(list);

function printArray(arr: number[]) {
    console.log(arr);
}

function printTuple(tpl: [number, number, number]) {
    console.log(tpl)
}

printArray(list);

let tpl:[number, number, number] = [1,2,3];
let noTpl = [1,2,3];
printTuple(tpl)
// Argument of type 'number[]' is not assignable to parameter of type '[number, number, number]'.
//   Target requires 3 element(s) but source may have fewer.
printTuple(noTpl);