var totalWin;
var totalLoss;
var gameNum;

function startGame() {
    totalWin = 0;
    totalLoss = 0;
    gameNum = 1;

    cycleGame();

}

function wrongMove() {
    totalLoss++;
    
}

function correctMove() {
    totalWin++;

}

function cycleGame() {
    
}


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