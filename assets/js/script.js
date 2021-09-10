// save info from textboxes using buttons
$("#nineBtn").click(function(){
    var nine = $("#nine").val();
    localStorage.setItem('nine', nine);
});

$("#tenBtn").click(function(){
    var ten = $("#ten").val();
    localStorage.setItem('ten', ten);
});

$("#elevenBtn").click(function(){
    var eleven = $("#eleven").val();
    localStorage.setItem('eleven', eleven);
});

$("#twelveBtn").click(function(){
    var twelve = $("#twelve").val();
    localStorage.setItem('twelve', twelve);
});

$("#oneBtn").click(function(){
    var one = $("#one").val();
    localStorage.setItem('one', one);
});

$("#twoBtn").click(function(){
    var two = $("#two").val();
    localStorage.setItem('two', two);
});

$("#threeBtn").click(function(){
    var three = $("#three").val();
    localStorage.setItem('three', three);
});

$("#fourBtn").click(function(){
    var four = $("#four").val();
    localStorage.setItem('four', four);
});

$("#fiveBtn").click(function(){
    var five = $("#five").val();
    localStorage.setItem('five', five);
});

// load info from textboxes
var loadNine = localStorage.getItem('nine');
$('#nine').val(loadNine);

var loadTen = localStorage.getItem('ten');
$('#ten').val(loadTen);

var loadEleven = localStorage.getItem('eleven');
$('#eleven').val(loadEleven);

var loadTwelve = localStorage.getItem('twelve');
$('#twelve').val(loadTwelve);

var loadOne = localStorage.getItem('one');
$('#one').val(loadOne);

var loadTwo = localStorage.getItem('two');
$('#two').val(loadTwo);

var loadThree = localStorage.getItem('three');
$('#three').val(loadThree);

var loadFour = localStorage.getItem('four');
$('#four').val(loadFour);

var loadFive = localStorage.getItem('five');
$('#five').val(loadFive);

// display current date at top of page
var date = moment().format('MM-DD-YYYY');
$('#currentDay').html('Today is ' + date);

// change color of textareas depending on time
var timeNow = moment()
var format = 'hh:mm:ss'

// repurposed a line of code from this thread after having trouble
// https://stackoverflow.com/questions/36197031/how-to-use-moment-js-to-check-whether-the-current-time-is-between-2-times
var time = moment(timeNow ,format),
  beforeNine = moment('9:00:00', format),
  afterNine = moment('10:00:00', format);

if (time.isBetween(beforeNine, afterNine)) {

  $('#nine').removeClass('past').addClass("present")

}

if (time.isBefore(beforeNine)) {

    $('#nine').removeClass('past').addClass("future")

}

beforeTen = moment('10:00:00', format),
afterTen = moment('10:00:00', format);

if (time.isBetween(beforeTen, afterTen)) {

  $('#ten').removeClass('past').addClass("present")

}

if (time.isBefore(beforeTen)) {

    $('#ten').removeClass('past').addClass("future")

}

beforeEleven = moment('11:00:00', format),
afterEleven = moment('12:00:00', format);

if (time.isBetween(beforeEleven, afterEleven)) {

  $('#eleven').removeClass('past').addClass("present")

}

if (time.isBefore(beforeEleven)) {

    $('#eleven').removeClass('past').addClass("future")

}

beforeTwelve = moment('12:00:00', format),
afterTwelve = moment('13:00:00', format);

if (time.isBetween(beforeTwelve, afterTwelve)) {

  $('#twelve').removeClass('past').addClass("present")

}

if (time.isBefore(beforeTwelve)) {

    $('#twelve').removeClass('past').addClass("future")

}

beforeOne = moment('13:00:00', format),
afterOne = moment('14:00:00', format);

if (time.isBetween(beforeOne, afterOne)) {

  $('#one').removeClass('past').addClass("present")

}

if (time.isBefore(beforeOne)) {

    $('#one').removeClass('past').addClass("future")

}

beforeTwo = moment('14:00:00', format),
afterTwo = moment('15:00:00', format);

if (time.isBetween(beforeTwo, afterTwo)) {

  $('#two').removeClass('past').addClass("present")

}

if (time.isBefore(beforeTwo)) {

    $('#two').removeClass('past').addClass("future")

}

beforeThree = moment('15:00:00', format),
afterThree = moment('16:00:00', format);

if (time.isBetween(beforeThree, afterThree)) {

  $('#three').removeClass('past').addClass("present")

}

if (time.isBefore(beforeThree)) {

    $('#three').removeClass('past').addClass("future")

}

beforeFour = moment('16:00:00', format),
afterFour = moment('17:00:00', format);

if (time.isBetween(beforeFour, afterFour)) {

  $('#four').removeClass('past').addClass("present")

}

if (time.isBefore(beforeFour)) {

    $('#four').removeClass('past').addClass("future")

}

beforeFive = moment('17:00:00', format),
afterFive = moment('18:00:00', format);

if (time.isBetween(beforeFive, afterFive)) {

  $('#five').removeClass('past').addClass("present")

}

if (time.isBefore(beforeFive)) {

    $('#five').removeClass('past').addClass("future")

}