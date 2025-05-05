let students = ["Ali", "Sara", "Ahmed", "Lana", "Omar", "Noor"];

let hasCapitalA = students.forEach((nameA) => {
  if (nameA.toLocaleLowerCase().startsWith("a")) {
    console.log(nameA);
  }
});

console.log("---------------------------");
