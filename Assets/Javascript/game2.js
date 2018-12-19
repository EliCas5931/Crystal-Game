var randomNumber;
var lost = 0;
var win = 0;
var previous = 0;
var resetGame;

var resetGame = function () {

    $(".crystals").empty();

    randomNumber = Math.floor(Math.random() * 101) + 19;
    console.log(randomNumber);

    $("#result").html('Random Number: ' + randomNumber);

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 12) + 1;
        console.log(random);

        var crystal = $("<img>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        $(".crystals").append(crystal);
    }

    if (random === randomNumber) {
        (randomNumber) += 1;
    }

    $("#numberTotal").html('' + previous);
}

resetGame();

//Event delegation
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));
    previous += num;
    console.log(previous);

    $("#numberTotal").html('' + previous);

    if (previous > randomNumber) {
        lost++;
        $("#lost").html(lost);
        previous = 0;
        resetGame();
        console.log("You're a LOSER");
    }

    else if (previous === randomNumber) {
        win++;
        $("#win").html(win);
        previous = 0;
        resetGame();
        console.log("Winner Winner Chicken dinner");
    }

});

