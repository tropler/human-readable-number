module.exports = function toReadable (number) {
    let singleDigits = ["zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"];

    let twoDigits = ["ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    let dozens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    return number < 10 ? singleDigits[number] :
           number < 20 ? twoDigits[number - 10] :
           number < 100 ? (dozens[Math.floor(number / 10) - 2] +
               (number % 10 === 0 ? "" :
               " " + singleDigits[number % 10])) :
           number < 1000 ? singleDigits[Math.floor(number / 100)] + " hundred" +
               ((number % 100) < 10 ? "" :
               (number % 100) < 20 ? " " + twoDigits[Math.floor(number % 100 - 10)] :
               (number % 100) < 100 ? " " + dozens[Math.floor(number % 100 / 10) - 2] : "") +
               ((number % 10 === 0 || (number % 100 > 10 && number % 100 < 20) ? "" :
               " " + singleDigits[number % 10])) : "Not implemented value";
}
