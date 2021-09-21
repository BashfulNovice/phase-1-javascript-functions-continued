// Your code here

function saturdayFun(fun = "roller-skate") {
return `This Saturday, I want to ${fun}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(accent = '*') {
    return function (emphatic) {
        return `You are ${accent}${emphatic}${accent}!`;
    }
}