const repeatString = function(word, repeats) {
 if (repeats < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < repeats; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
