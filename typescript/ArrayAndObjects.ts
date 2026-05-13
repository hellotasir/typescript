let myArray: number[] = [1, 2, 3, 4, 5];
let myObject: { name: string; age: number } = { name: "Alice", age: 30 };
console.log(myArray);
console.log(myArray[2]);
console.log(myObject);
console.log(myObject.name);
console.log(myObject.age); 

let world: unknown = "Hello, World!";
if (typeof world === "string") {
    console.log(world.toUpperCase());
}

let world2: any = 42;
if (typeof world2 === "number") {
    console.log(world2.toFixed(2));
}

function logMessage(message: string, age: number): void {
    console.log(message);
    console.log(age);
}
logMessage("This is a message.", 30);

let nullValue: null = null;
let undefinedValue: undefined = undefined;
console.log(nullValue);
console.log(undefinedValue);

function test() {
    let a: number = 10;
    let b: number = 20;
    let sum: number = a + b;
   
    return sum;
}
function test2() { }
const result = test(); 
 console.log("The sum is:", result);
const result2 = test2(); 
console.log("The result is:", result2);