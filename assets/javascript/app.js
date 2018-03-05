var totalWin;
var totalLoss;
var totalUnans;
var gameNum;
var a;

// Starts the game by setting the values and beginning the question "cycle".
function startGame() {
    totalWin = 0;
    totalLoss = 0;
    totalUnans = 0;
    gameNum = 1;

    $(".startBtn").hide();
    cycleGame();
}
// -------------------------------------------------------------------------

function cycleGame() {
    a = ".question" + String(gameNum);
    $(a).show();

    console.log("Total Losses: " + totalLoss)
    console.log("Total Wins: " + totalWin)
}

// If an answer choice is good/bad, adjust scores accordingly.
$(".badMove").click(function(){
    totalLoss++;
    $(a).hide();
    gameNum++;

    if (gameNum > 10) {
        $("#finalScreen").show();
        $("#totCorrect").html("<h2>Correct: </h2>" + totalWin);
        $("#totWrong").html("<h2>Incorrect: </h2>" + totalLoss);
        $("#totUnans").html("<h2>Unanswered: </h2>" + totalUnans);
        return;
    }

    cycleGame();
})

$(".goodMove").click(function(){
    totalWin++;
    $(a).hide();
    gameNum++;

    if (gameNum > 10) {
        $("#finalScreen").show();
        $("#totCorrect").html("<h2>Correct: </h2>" + totalWin);
        $("#totWrong").html("<h2>Incorrect: </h2>" + totalLoss);
        $("#totUnans").html("<h2>Correct: </h2>" + totalUnans);
        return;
    }

    cycleGame();
})
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