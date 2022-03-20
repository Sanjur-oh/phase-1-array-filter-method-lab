// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, string){
    const result = drivers.filter(drivers => drivers === string || drivers === string.toLowerCase())
    return result

}

function fuzzyMatch(drivers, string){
    let firstLetter = drivers.filter(drivers => drivers.slice(0, string.lengeth) === string)
    return firstLetter
}
