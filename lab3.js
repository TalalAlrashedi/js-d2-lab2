let students = ["Ali", "Sara", "Ahmed", "Lana", "Omar", "Noor"];

let hasCapitalA = students.forEach((nameA) => {
  if (nameA.toLocaleLowerCase().startsWith("a")) {
    console.log(nameA);
  }
});

console.log("---------------------------");

//أطبع عدد الأسماء التي تحتوي على أكثر من 4 حروف.

let length4Char = students.filter((name) => {
  return name.length > 4;
});

console.log(length4Char);

console.log("---------------------------");

// أنشئ مصفوفة جديدة فيها كل الأسماء لكن بالحروف الكبيرة (uppercase).

let upperCaseNames = students.map((names) => {
  return names.toUpperCase();
});

console.log(upperCaseNames);
console.log("---------------------------");

let nameWithR = students.find((name) => name.toLowerCase().includes("r"));

console.log(nameWithR);

let nameSorted = students.sort();

console.log(nameSorted);
console.log("---------------------------");
// تحقق إذا كان اسم معين (مثل "Omar") موجود في القائمة.

let foundOmar = students.includes("Omar");

console.log(foundOmar);
console.log("---------------------------");

let totalLength = students.reduce((sum, name) => sum + name.length, 0);

console.log("Total of lenght: ", totalLength);
console.log("---------------------------");

let evenLengthNames = students.filter((name) => name.length % 2 === 0);

console.log("أسماء ذات عدد حروف زوجي:", evenLengthNames);

console.log("---------------------------");

let reverseArray = students.map((name) => name.split("").reverse().join(""));

console.log(reverseArray);
console.log("---------------------------");
