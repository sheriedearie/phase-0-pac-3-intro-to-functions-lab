function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(doggies) {
    var temp = doggies;
    temp = temp.toUpperCase();
    console.log(temp);
}
function logWhisper(string) {
    string = string.toLowerCase();
    console.log(string);
}
function sayHiToGrandma(string) {
    var lowerCase = string;
    var upperCase = string;
    lowerCase = lowerCase.toLowerCase();
    upperCase = upperCase.toUpperCase();


    if(string === lowerCase) {
        return "I can\'t hear you!";
    }
    if(string === upperCase) {
        return "YES INDEED!";
    }
    if(string === "I love you, Grandma.") {
        return"I love you, too.";
    }
    else {
        return "F#$k you grandma!"
    }

}