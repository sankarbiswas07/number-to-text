// import dictionary
let dictionary = {
    "ben-in": require("../lib/ben-IN.json"),
    "hin-in": require("../lib/hin-IN.json"),
    "en-in": require("../lib/en-IN.json"),
    "gu-in": require("../lib/gu-IN.json"),
    "ta-in": require("../lib/ta-IN.json"),
    "te-in": require("../lib/te-IN.json"),
    "ur-in": require("../lib/ur-IN.json")
};

// object initialization
let factory = {};

// 1st 
factory.toWord = function (num, to) {
    try {
        return (factory.core(num, "", dictionary[to]));
    } catch (e) {
        return e.toString();
    }
};

// 2nd
// prototype function 
factory.core = function (n, str = "", dictionary) {
    try {
        let unit = dictionary.unitGen;
        let set = dictionary.set;
        let unitLebel = dictionary.unitLebel;
        let conjunction = dictionary.conjunction;
        let exception = dictionary.exception;
        let quotient = 0;

        if (n === 0 && str === "") return set[n];
        if (set[n] !== undefined) {
            str += (n !== 0) ? set[n] : "";
            if(dictionary.exception.reverse){
                return str.trim().split(" ").reverse().join(" ");
            }
            return str.trim();
        } else {
            for (let i = unit.length - 1; i >= 0; --i) {
                quotient = Math.floor(n / unit[i]);
                if (quotient != 0) {
                    if (set[unit[i] * quotient] === undefined) {

                        str += factory.core(quotient, "", dictionary)
                            + ((exception[`!ulSpace-${unit[i].toString().length}`]) ? "" : " ")
                            + unitLebel[unit[i].toString().length]
                            + ((exception.countPlural && quotient > 1) ? "s" : "")
                            + " ";

                    } else {
                        str += set[unit[i] * quotient] + conjunction;
                    }
                    return factory.core(n - unit[i] * quotient, str, dictionary)
                }
            }
        }
    } catch (e) {
        return e.toString();
    }
}

module.exports = factory;