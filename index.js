function truthCheck(collection, pre) {
  // Is everyone being true?
  let resultArr = [];
  let otherArr = [];
  let result = true;
  //just did this to test how i should write my conditional
  // if (typeof collection[0][pre] == "boolean") {
  //   console.log("Hi");
  // }
  for (let i = 0; i < collection.length; i++) {
    resultArr.push(typeof collection[i][pre]);
    otherArr.push(collection[i][pre]);
    if (
      collection[i][pre] === "" ||
      (typeof collection[i][pre] === "number" &&
        isNaN(collection[i][pre]) == true) ||
      collection[i][pre] === 0 ||
      collection[i][pre] === null ||
      (typeof collection[i][pre] == "boolean" &&
        collection[i][pre] === false) ||
      collection[i][pre] === undefined
    ) {
      result = false;
    }
  }
  // console.log(otherArr);
  // console.log(resultArr + " this is the result array for " + pre);

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
  ) + " should return true because all users have a sex."
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
  ) + " should return false because Dipsey (collection[1]) does not have a sex."
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
  ) + " should return false because collection[0] 's age or  is zero."
); //should return false because "Tinky-Winky" is zero years old?
console.log(
  truthCheck(
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true },
      { name: "FastForward", onBoat: null }
    ],
    "onBoat"
  ) + " should return false because collection[2][onBoat] is null"
); //should return false because one onBoat is null
console.log(
  truthCheck(
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true, alias: "Repete" },
      { name: "FastForward", onBoat: true }
    ],
    "onBoat"
  ) + " should return true because all onBoats are true"
); //should return true because onBoat's are all true
console.log(
  truthCheck([{ single: "yes" }], "single") +
    " should return true because single is yes"
);
//should return true because only single is "yes"
console.log(
  truthCheck([{ single: "" }, { single: "double" }], "single") +
    " should return false because collection[0][single] is an empty string"
); //false because one of the singles is blank ""
console.log(
  truthCheck([{ single: "double" }, { single: undefined }], "single") +
    " should return false because collection[1][single] is undefined"
); //false because one is undefined
console.log(
  truthCheck([{ single: "double" }, { single: NaN }], "single") +
    " should return false because collection[1][single] is NaN"
); //false because one of the single's is NaN
//currently doesn't work with this one, maybe look into boolean or truthy falsy methods
