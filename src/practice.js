let input = document.getElementById("input");

let button = document.getElementById("button");
let newarray = [];

button.addEventListener("click", function () {
  let valueInput = input.value;
  //console.log(typeof valueInput);
  const words = valueInput.split(" ");
  //console.log(words); // ['asd', 'asd', 'asd']

  if (words[words.length - 1] !== "") {
    let words2 = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
        //console.log(words);
      })
      .join(" ");
    newarray.push(words2);
    console.log(newarray);
  } else {
    alert("No colocar espacios ni al comienzo ni al final");
  }
  input.value = "";
});
/*
// Primer letra de array de nombres a mayuscula
let actores = [
  "tom hanks",
  "johnny deep",
  "samuel l jackson",
  "Morgan Freeman",
];
let newarray = [];

function toUPer(array) {
  for (let i = 0; i < array.length; i++) {
    const words = array[i].split(" ");
    let wordsMaped = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
    newarray.push(wordsMaped);
  }
  return newarray;
}

toUPer(actores);
*/
