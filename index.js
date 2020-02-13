function truthCheck(collection, pre) {
  // Is everyone being true?
  let resultArr = [];
  let result = false;
  for (let i = 0; i < collection.length; i++) {
    resultArr.push(collection[i][pre]);
    if (collection[i][pre] === true) {
      result = true;
    }
  }
  console.log(resultArr + " this is the result array for " + pre);
  return result;
}

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
  ) + " should return true."
);
console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
  ) + " should return false."
);
console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male", age: 0 },
      { user: "Dipsy", sex: "male", age: 3 },
      { user: "Laa-Laa", sex: "female", age: 5 },
      { user: "Po", sex: "female", age: 4 }
    ],
    "age"
  ) + " should return false."
);
console.log(
  truthCheck(
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true },
      { name: "FastForward", onBoat: null }
    ],
    "onBoat"
  ) + " should return false"
);
console.log(
  truthCheck(
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true, alias: "Repete" },
      { name: "FastForward", onBoat: true }
    ],
    "onBoat"
  ) + " should return true"
);
console.log(truthCheck([{ single: "yes" }], "single") + " should return true");
console.log(
  truthCheck([{ single: "" }, { single: "double" }], "single") +
    " should return false"
);
console.log(
  truthCheck([{ single: "double" }, { single: undefined }], "single") +
    " should return false"
);
console.log(
  truthCheck([{ single: "double" }, { single: NaN }], "single") +
    " should return false"
);
