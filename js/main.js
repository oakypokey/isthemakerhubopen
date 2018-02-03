$(document).ready(function() {
    var open = $("#open");
    var body = $("body");
    getOpen() ? open.html("Yes") : open.html("No");
    getOpen() ? body.css("background-color", "#2FBF71") : body.css("background-color", "#C42547");

    setInterval(function(){
        getOpen() ? open.html(" Yes") : open.html("No");
        getOpen() ? body.css("background-color", "#2FBF71") : body.css("background-color", "#C42547");
    }, 5000);

})
var timings = [
    {open: 0, close: 0}, //Sunday
    {open: 12, close: 17}, //Monday
    {open: 17, close: 20}, //Tuesday
    {open: 17, close: 20}, //Wednesday
    {open: 17, close: 20}, //Thursday
    {open: 12, close: 17}, //Friday
    {open: 12, close: 17} //Saturday
];

var getOpen = function() {
    var currentTime = new Date;
    currentTime = currentTime.getHours();

    var currentDay = new Date
    currentDay = currentDay.getDay();

    var currentTimings = timings[currentDay];

    return currentTime > currentTimings.open && currentTime < currentTimings.close;
}
