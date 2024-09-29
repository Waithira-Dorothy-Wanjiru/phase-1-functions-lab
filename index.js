// Code your solution in this file!

const HQ_LOCATION = 42; 

function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - HQ_LOCATION);
}


function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264; 
}


function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264; 
}


function calculatesFarePrice(start, destination) {
  const distanceFeet = distanceTravelledInFeet(start, destination);
  
  if (distanceFeet <= 400) {
    return 0; 
  } else if (distanceFeet > 400 && distanceFeet <= 2000) {
    return (distanceFeet - 400) * 0.02; 
  } else if (distanceFeet > 2000 && distanceFeet <= 2500) {
    return 25; 
  } else {
    return 'cannot travel that far'; 
  }
}

