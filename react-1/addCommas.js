function addCommas(number) {
    // convert number to string to array at decimal point
    let num = number.toString().split(".");
    // iterate over the first element of the array, reverse it, and add commas
    let result = num[0].split("").reverse().map((el, i) => {
        return i % 3 === 0 && i !== 0 && el !== '-'? el + "," : el;
    }).reverse().join("");
    // if there is a second element in the array, add it to the result
    if (num[1]) result += "." + num[1];
    // return the result
    return result;
}

module.exports = addCommas;