const letters = ["c", "f", "j"];
const target = "c";

const nextGreatestLetter = function (letters, target) {
  for (let index = 0; index < letters.length; index++) {
    if (letters[index].charCodeAt(0) > target.charCodeAt(0))
      return letters[index];
  }

  return letters[0];
};

console.log(nextGreatestLetter(letters, target));
