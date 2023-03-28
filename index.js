// Code your solution in this file!


function distanceFromHqInBlocks(pickupLocation) {
    const headquartersLocation = 42;
    return Math.abs(pickupLocation - headquartersLocation);
  }

  function distanceFromHqInFeet(pickupLocation){
    const distanceTravelledInFeet = distanceFromHqInBlocks(pickupLocation);
    return   distanceTravelledInFeet * 264
  }

  function distanceTravelledInFeet(start, destination) {
    const numberOfBlocks = math.abs(start - destination);
    const feetPerBlock = 264;
    const distanceInFeet = numberOfBlocks * feetPerBlock;
    return distanceInFeet
  }
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
    let fare;
  
    if (distanceInFeet <= 400) {
      fare = 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      fare = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      fare = 25;
    } else {
      fare = 'cannot travel that far';
    }
  
    return fare;
  }
  