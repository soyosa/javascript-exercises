const findTheOldest = function(array) {
  let oldestPerson = array[0];

  for (let i = 1; i < array.length; i++) {
    const newtPerson = array[i];
    if (getAge(oldestPerson) < getAge(newPerson)) {
      oldestPerson = newPerson;
    }
  }

  return oldestPerson;
}

function getAge(person) {
  const currentYear = new Date().getFullYear();
  const deathYear = person.yearOfDeath || currentYear;
  const age = deathYear - person.yearOfBirth;
  return age;
};

// Do not edit below this line
module.exports = findTheOldest;
