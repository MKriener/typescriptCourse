interface Sized {
    length : number;
}

function lengthComparison<Type extends Sized>(arr1, arr2) {
    return arr1.length > arr2.length ? arr1 : arr2;
}
const a1 = [1,2,3];
const a2 = [2,3];

const r1 = lengthComparison(a1, a2);
console.log(a1);

const r2 = lengthComparison(10, 100);

interface MyGrades {
    grades: number[],
    length: number,
}

const alicesGrades: MyGrades ={
    grades:[1,2],
    length: 2,
}

const bobsGrades: MyGrades ={
    grades:[1,2,3],
    length: 3,
}

const r3 = lengthComparison(alicesGrades, bobsGrades);