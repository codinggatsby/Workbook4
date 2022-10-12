 let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 
//part 1 = where to start, creating count variable and initializing it
//part 2 = comparison that returns true or false
// part 3 = how to count element
function getAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];
    
}
return total/scores.length;

}
let averageScore = getAverage(myScores);
console.log(averageScore.toFixed(2));