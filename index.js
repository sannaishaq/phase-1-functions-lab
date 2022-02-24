function distanceFromHqInBlocks(location) {
    return Math.abs(location-42)
}
function distanceFromHqInFeet(block){
    let blocksIGo = distanceFromHqInBlocks(block);
    let distanceFromHqInFeet = blocksIGo*264;
    return distanceFromHqInFeet;
}
function distanceTravelledInFeet(start, finish){
    return(Math.abs(finish-start)*264)
}
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    switch(true){
        case distance <= 400:
           return 0;
        case distance > 400 && distance < 2000:
           return (distance-400)*0.02;
        case distance > 2000 && distance < 2500:
            return 25;
        case distance > 2500:
            return 'cannot travel that far';
    }
}
