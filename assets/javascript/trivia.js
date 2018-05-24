$(document).ready(function () {

    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click' , '.option', trivia.userCheck);

    var trivia = {
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        currentSet: 0,
        timer: 15,
        timeOn: false,
        timerId: "",

        questions: {
            q1: "What is not a plentaly in ?hockey",
            q2: "What NFL franchise has won the most championships?",
            q3: "Who has the record for most home runs in a MLB season?"
        },
        options: {
            q1: ["Charging", "Boarding", "Stomping", "Slashing"],
            q2: ["Browns", "Cowboys", "Steelers", "Packers"],
            q3: ["Barry Bonds", "Mark McGwire", "Sammy Sosa", "Ken Griffy Jr."]
        },
        answers: {
            q1: "Stomping",
            q2: "Packers",
            q3: "Barry Bonds"
        },


        startGame: function () {
            trivia.currentQuestions = 0;
            trivia.correct = 0;
            trivia.incorrect = 0;
            trivia.unanswered = 0;
            clearInterval(trivia.timerId);

            $("#game").text(trivia.questions);
            $("#results").html("");
            $("#timer").text(trivia.timer);
            $("#start").hide();
            $("#remaining-time").show();
            trivia.nextQuestion();
        },
        nextQuestion: function () {
            trivia.timer = 15;
            $("#timer").removeClass("last-seconds");
            $("#timer").text(trivia.timer);

            if (!trivia.timerOn) {
                trivia.timerID = setInterval(trivia.timerRunning, 1000);
            }

            var questionsOptions = object.values(trivia.questions)[trivia.currentQuestion];

            $.each(questionOptions, function (index, key) {
                $('#options').append($('<button class="option btn btn-info btn-lg">' + key + '</button>'));
            })
        },

        timerRunning: function () {
            if (trivia.timer > -1 && trivia.currentQuestion < Object.keys(trivia.questions).length) {
                $("#timer").text(trivia.timer);
                trivia.timer--;
                if (trivia.timer === 5) {
                    $("#timer").addClass("last-seconds");
                }
            }
            else if (trivia.timer === -1) {
                trivia.unanswered++;
                trivia.result = false;
                clearInterval(trivia.timerId);
                resultId = setTimeout(trivia.userCheck, 1000);
                $("#results").html("<h3>Out of time! The answer was " + Object.values(trivia.answers)[trivia.currentQuestion] + "</h3>");
            }
            else if (trivia.currentSet === Object.keys(trivia.questions).length) {
                $('#results')
                    .html(
                        '<p>Correct: ' + trivia.correct + '</p>' +
                        '<p>Incorrect: ' + trivia.incorrect + '</p>' +
                        '<p>Unaswered: ' + trivia.unanswered + '</p>' +
                        '<p>Thank You for Playing!</p>');

                $("#game").hide();
                $("#start").show();
            }
        },

        userCheck: function () {
            var resultId;

            var currentAnswer = Object.values(trivia.answers)[trivia.currentQuestion];
            if ($(this).text() === currentAnswer) {
                $(this).addClass('btn-success').removeClass('btn-info');

                trivia.correct++;
                clearInterval(trivia.timerId);
                resultId = setTimeout(trivia.guessResult, 1000);
                $('#results').html('<h3>Correct Answer!</h3>');
            }
            else {
                $(this).addClass('btn-danger').removeClass('btn-info');

                trivia.incorrect++;
                clearInterval(trivia.timerId);
                resultId = setTimeout(trivia.guessResult, 1000);
                $('#results').html('<h3>  ' + currentAnswer + '</h3>');
            }
        },

        userResult: function () {

            trivia.currentQuestion++;

            $('.option').remove();
            $('#results h3').remove();
            trivia.nextQuestion();

        },
      //  startGame();,
        //nextQuestion();,
        //timerRunning();,
        //userCheck();,
        //userResult();


    }
    //startGame();
    //nextQuestion();
    //timerRunning();
    // userCheck();
})
