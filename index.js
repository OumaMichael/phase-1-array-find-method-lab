/*The find method searches through the record array for the first element that satisfies the condition inside the callback function.

The callback function checks if the result property of each record is "W" (indicating a win).

If a match is found, result will store the matching record object; otherwise, it will be undefined.*/
function superbowlWin(record){
    let result = record.find( record => record.result === "W" )
    return !!result ? result.year : undefined
};
/*!!result is a way to convert the result variable to a boolean value. If result is an object (i.e., a win was found), !!result will be true. If result is undefined, !!result will be false.

The ternary operator (? :) checks the boolean value of !!result.

If true, it returns result.year (the year of the win).

If false, it returns undefined. */
const record = [
    { year: "2023", result: "L" },
    { year: "2024", result: "W" },
    { year: "2025", result: "N/A" }
];
console.log(superbowlWin(record))
