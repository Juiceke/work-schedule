// save info from buttons
$("#nineBtn").click(function(){
    var nine = $("#nine").val();
    console.log(nine);
});

$("#tenBtn").click(function(){
    

    var ten = $("#ten").val();
    localStorage.setItem('ten', ten);
    console.log(ten);
    
    console.log(localStorage)
});

$("#elevenBtn").click(function(){
    var eleven = $("#eleven").val();
    console.log(eleven);
});

$("#twelveBtn").click(function(){
    var twelve = $("#twelve").val();
    console.log(twelve);
});

$("#oneBtn").click(function(){
    var one = $("#one").val();
    console.log(one);
});

$("#twoBtn").click(function(){
    var two = $("#two").val();
    console.log(two);
});

$("#threeBtn").click(function(){
    var three = $("#three").val();
    console.log(three);
});

$("#fourBtn").click(function(){
    var four = $("#four").val();
    console.log(four);
});

$("#fiveBtn").click(function(){
    var five = $("#five").val();
    console.log(five);
});

// load info from textboxes
var loadTen = localStorage.getItem('ten')
$('#ten').val(loadTen) 