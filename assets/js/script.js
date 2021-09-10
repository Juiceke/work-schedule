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