function truthCheck(collection, pre) {
  // Is everyone being true?
  let resultArr = [];
  let result = true;
  for (let i = 0; i < collection.length; i++) {
    resultArr.push(collection[i][pre]);
    if (
      collection[i][pre] === "" ||
      collection[i][pre] === NaN ||
      collection[i][pre] === 0 ||
      collection[i][pre] === null ||
      collection[i][pre] === false ||
      collection[i][pre] === undefined
    ) {
      result = false;
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
); //true because all users have a sex
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
); //I think this should return false because Dipsy doesn't have a sex
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
); //should return false because "Tinky-Winky" is zero years old?
console.log(
  truthCheck(
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true },
      { name: "FastForward", onBoat: null }
    ],
    "onBoat"
  ) + " should return false"
); //should return false because one onBoat is null
console.log(
  truthCheck(
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true, alias: "Repete" },
      { name: "FastForward", onBoat: true }
    ],
    "onBoat"
  ) + " should return true"
); //should return true because onBoat's are all true
console.log(truthCheck([{ single: "yes" }], "single") + " should return true");
//should return true because only single is "yes"
console.log(
  truthCheck([{ single: "" }, { single: "double" }], "single") +
    " should return false"
); //false because one of the singles is blank ""
console.log(
  truthCheck([{ single: "double" }, { single: undefined }], "single") +
    " should return false"
); //false because one is undefined
console.log(
  truthCheck([{ single: "double" }, { single: NaN }], "single") +
    " should return false"
); //false because one of the single's is NaN
