//array of drivers
//const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

//lists the first two drivers in new array
const returnFirstTwoDrivers = function (i) {
    return i.slice(0, 2);
}

//lists the last two drivers in new array
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

//calls on the two new arrays
const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
];

//Doubles and Triples the fare
function createFareMultiplier(int) {
    return function(fare) {
        return fare * int;
    }
}

//doubles the fare
const fareDoubler = createFareMultiplier(2);
//triples the fare
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}