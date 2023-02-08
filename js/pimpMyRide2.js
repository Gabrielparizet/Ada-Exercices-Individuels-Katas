// STEP 1

let tripToParse = "Perdita 8 10 8";

class Trip{
    
    constructor(name, start, duration, price){
        this.name = name;
        this.start = parseInt(start);
        this.duration = parseInt(duration);
        this.price = parseInt(price);
        this.end = this.calculateEnd();
    }
    
    calculateEnd(){
        return this.start + this.duration;
    }

    isCompatible(trip){
        if (this.end < trip.start){
            return true;
        } else {
            return false;
        }
    }

}

const parseTrip = (trip) => {
    let tripData = trip.split(" ");
    let tripObject = new Trip(tripData[0], tripData[1], tripData[2], tripData[3])
    return tripObject;
}

// console.log(parseTrip(tripToParse));

// Step 2

let tripsToParse = [
    "Roger 0 5 10",
    "Pongo 3 7 14",
    "Perdita 8 10 8",
    "Anita 16 3 7",
]

const parseTrips = (tripsArr) => {
    let result = tripsArr.map(parseTrip);
    return result;
}

// console.log(parseTrips(tripsToParse))

let tripsWithEnd = parseTrips(tripsToParse);

// console.log(tripsWithEnd[0].isCompatible(tripsWithEnd[2]));

const findCompatibilities = (tripsArr) => {
    let resultArr = [];
    let tripsToCompareArr = parseTrips(tripsArr);
    for (i in tripsToCompareArr){
        for (j in tripsToCompareArr){
            if (tripsToCompareArr[i].isCompatible(tripsToCompareArr[j])){
                resultArr.push([tripsToCompareArr[i], tripsToCompareArr[j]]);
            }
        }
    }
    return resultArr;
}

// console.log(findCompatibilities(tripsToParse));


const findBestPrice = (tripsArr) => {
    let compatibleArr = findCompatibilities(tripsArr);
    for (i in compatibleArr){
        compatibleArr[i].push(compatibleArr[i][0].price + compatibleArr[i][1].price)
    }
    let bestPriceArr = compatibleArr[2].sort(function(a, b){return a - b})
    return bestPriceArr;
}

console.log(findBestPrice(tripsToParse));
