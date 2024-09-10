const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    const maxDistance = mpg * fuelLeft ;
    return maxDistance >= distanceToPump ;
};

console.log(zeroFuel(100,25,2));