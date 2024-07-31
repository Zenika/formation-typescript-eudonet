class SomeInterface implements ISomeInterface {
    constructor(
        public name: string,
        public age: number
    ) {}
}

interface ISomeInterface {
    name:string,
    age: number
}

type TypeInterface = ISomeInterface

function testType():void {
    const isNumber: number | string = 5;
    const isSomeInterface: SomeInterface = {
        name: 'Jean',
        age: 45
    };

    if(typeof isNumber === 'number') {
        //Do something
    } 

    if (isSomeInterface instanceof SomeInterface) {
        //Do something
    }

    if(typeof isSomeInterface === '')
}