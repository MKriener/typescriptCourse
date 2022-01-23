const a1 = [1, 2, 3];
const a2 = [2, 3, 4];

function arraySum(arr : number[]) {
    let result : number;

    arr.forEach((element) => (result += element));

    return result;
}

arraySum(a1);

function argumentSum(...numbers: number[]) {
    let result : number;

    numbers.forEach((element) => (result += element));

    return result;
}

argumentSum(...a1);
argumentSum(1, 2, 3);
argumentSum();