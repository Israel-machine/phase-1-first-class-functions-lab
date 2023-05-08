const returnFirstTwoDrivers = function(names = ["Antonia", "Nuru", "Amari","Mo"]) {
    let firstNames = [names[0], names[1]];
    return firstNames;
    }

const returnLastTwoDrivers = function(names = ["Antonia", "Nuru", "Amari","Mo"]) {
    let lastNames = [names[2], names[3]];
    return lastNames;
    }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function rate(fare) {
        return integer * fare;
    }
 } 

 const fareDoubler = createFareMultiplier(2);
 function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }

 const fareTripler = createFareMultiplier(3);
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  function selectDifferentDrivers(names = ["Antonia", "Nuru", "Amari","Mo"], selectDrivers ) {
    if (selectDrivers === returnFirstTwoDrivers) {
        let firstNames = [names[0], names[1]];
        return firstNames;
    } else if (selectDrivers === returnLastTwoDrivers) {
        let lastNames = [names[2], names[3]];
        return lastNames;
    }
  }
    


