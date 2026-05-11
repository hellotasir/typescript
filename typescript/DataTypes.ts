let student: string = "Tasir Rahman";
student = "Tasir Rahman 2.0";
let age: number = 25;
let isEnrolled: boolean = true;
let hobbies: string[] = ["coding", "music", "traveling"];
let address: { street: string; city: string; country: string } = {
    street: "123 Main St",
    city: "Dhaka",
    country: "Bangladesh"
};

console.log(student);
console.log(age);
console.log(isEnrolled);
console.log(hobbies);
console.log(address["city"]);
console.log(address.country);
console.log(hobbies[1]);