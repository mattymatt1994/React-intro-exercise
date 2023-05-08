export function filerFilmsByDirector(list, director) {
  //return an array with only the matching directors
  if (!director) {
    return list;
  }
  return list.filter((ele) => ele.director == director);
}

console.log(filerFilmsByDirector(testList, testDirector));

export function getListOf(list, prop) {
  if (!prop) return list;
  const totalValuesArr = list.map((ele) => ele[prop]);
  //Find the duplicates

  const uniqueValues = [];
  const preValues = {};
  //Iterate over the [],determine if element has been repeated
  for (let i = 0; i < totalValuesArr.length; i++) {
    if (!preValues[totalValuesArr[i]]) {
      //keep this one
      uniqueValues.push(totalValuesArr[i]);
      preValues[totalValuesArr[i]] = true;
    }
  }

  //Create way to track what has been seen
  return uniqueValues;
}

const testList = [
  { firstName: "Frodo", lastName: "Baggins" },
  { firstName: "Bilbo", lastName: "Baggins" },
  { firstName: "Sam", lastName: "Gamgee" },
];
const testProp = "lastName";

console.log(getListOf(testList, testProp));
