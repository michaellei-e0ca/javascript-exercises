const findTheOldest = function(people) {

    let yearsOld = 0, oldest = 0, oldestPerson;
    let currentDate =  new Date().getFullYear();

    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath !== undefined) {
            yearsOld = people[i].yearOfDeath - people[i].yearOfBirth;
        } else {
             yearsOld = currentDate - people[i].yearOfBirth;
        }
        if (yearsOld > oldest) {

            oldest = yearsOld;
            oldestPerson = people[i];

        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
