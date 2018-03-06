var totalWin;
var totalLoss;
var totalUnans;
var gameNum;
var a;
var timer;
var intervalId;

// Starts the game by setting the values and beginning the question "cycle".
function startGame() {
    totalWin = 0;
    totalLoss = 0;
    totalUnans = 0;
    gameNum = 1;
    timer = 30;

    $("#finalScreen").hide();
    $(".startBtn").hide();
    cycleGame();
}
// -------------------------------------------------------------------------

function cycleGame() {
    $("#afterBox1").hide();
    $("#afterBox2").hide();
    $("#afterBox3").hide();
    
    a = ".question" + String(gameNum);
    $(a).show();

    intervalId = setInterval(count, 1000);
}

// Functions affiliated with the Timer.

function count() {
    timer --;
    var theTime = timer;
    var t = timeConvert(theTime);
    
    $(".theTimer").html(t);
    
    if (timer <= 0) {
        timeOut();
    }
}

function timeConvert(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
// ----------------------------------------------

// If an answer choice is good/bad, adjust scores accordingly.
$(".badMove").click(function(){
    totalLoss++;
    $(a).hide();
    gameNum++;

    $("#afterBox1").show();
    $("#afterBox2").show();

    clearInterval(intervalId);
    timer = 30;
    var t = timeConvert(30);
    $(".theTimer").html(t);
   
    setTimeout(function() {
        if (gameNum > 10) {

            $("#afterBox1").hide();
            $("#afterBox3").hide();
            $("#finalScreen").show();
            $("#totCorrect").html("<h2>Correct: </h2>" + totalWin);
            $("#totWrong").html("<h2>Incorrect: </h2>" + totalLoss);
            $("#totUnans").html("<h2>Unanswered: </h2>" + totalUnans);
            
            return;
        } else {
            cycleGame();
        }
    }, 1000);
})

$(".goodMove").click(function(){
    totalWin++;
    $(a).hide();
    gameNum++;

    $("#afterBox1").show();
    $("#afterBox3").show();

    clearInterval(intervalId);
    timer = 30;
    var t = timeConvert(30);
    $(".theTimer").html(t);

    setTimeout(function() {
        if (gameNum > 10) {

            $("#afterBox1").hide();
            $("#afterBox3").hide();
            $("#finalScreen").show();
            $("#totCorrect").html("<h2>Correct: </h2>" + totalWin);
            $("#totWrong").html("<h2>Incorrect: </h2>" + totalLoss);
            $("#totUnans").html("<h2>Unanswered: </h2>" + totalUnans);
            
            return;
        } else {
            cycleGame();
        }
    }, 1000);
})

function timeOut() {
    totalUnans++;
    $(a).hide();
    gameNum++;

    $("#afterBox1").show();
    $("#afterBox2").show();

    clearInterval(intervalId);
    timer = 30;
    var t = timeConvert(30);
    $(".theTimer").html(t);
   
    setTimeout(function() {
        if (gameNum > 10) {

            $("#afterBox1").hide();
            $("#afterBox3").hide();
            $("#finalScreen").show();
            $("#totCorrect").html("<h2>Correct: </h2>" + totalWin);
            $("#totWrong").html("<h2>Incorrect: </h2>" + totalLoss);
            $("#totUnans").html("<h2>Unanswered: </h2>" + totalUnans);
            
            return;
        } else {
            cycleGame();
        }
    }, 1000);
}
// ----------------------------------------------------------

// Hiding all boxes initially. Display them as needed.
$(".question1").hide();
$(".question2").hide();
$(".question3").hide();
$(".question4").hide();
$(".question5").hide();
$(".question6").hide();
$(".question7").hide();
$(".question8").hide();
$(".question9").hide();
$(".question10").hide();
$("#afterBox1").hide();
$("#finalScreen").hide();
//----------------------------------------------------

// Mouseover Highlight for potential answers.
$(".ans1").mouseover(function () {
    $(".ans1").addClass("highlight");
});
$(".ans1").mouseout(function () {
    $(".ans1").removeClass("highlight");
});

$(".ans2").mouseover(function () {
    $(".ans2").addClass("highlight");
});
$(".ans2").mouseout(function () {
    $(".ans2").removeClass("highlight");
});

$(".ans3").mouseover(function () {
    $(".ans3").addClass("highlight");
});
$(".ans3").mouseout(function () {
    $(".ans3").removeClass("highlight");
});

$(".ans4").mouseover(function () {
    $(".ans4").addClass("highlight");
});
$(".ans4").mouseout(function () {
    $(".ans4").removeClass("highlight");
});
// ----------------------------------------------------