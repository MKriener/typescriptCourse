interface Sized {
    length: number;
}

interface Foo extends Sized {
    name: string;
}

class DataBox<Type extends Foo> {
    content: Type;

    constructor(input: Type) {
        this.content = input;
    }

    print() {
        console.log(this.content.name);
        console.log(this.content.length);
    }
}

const d1 = new DataBox('hello');
d1.print();

const d2 = new DataBox(42);
d2.print();

const d3 = new DataBox(true);
d3.print();

const d4 = new DataBox({length: 1, name: 'Foo'})
d4.print();