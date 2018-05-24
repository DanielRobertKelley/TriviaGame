$(document).ready((function () {
  var counter = 0;
  var questions = []
  var clockRunning = false;
  var intervalId;
  var answers = [];
  var correctAnswer = [];
  time: 0;
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');

  //setTimer
  //if (!clockRunning) {
  //  intervalId = setInterval(1000);
  //clockRunning = true;
  //}





  const myQuestions = [
    {
      question: "what is not a plenty in hockey?",
      answers: {
        a: "Charging",
        b: "Boarding",
        c: "Smashing",
        d: "tripping"
      },
      correctAnswer: "c"
    },
    {
      question: "What is not a defensive postion in football?",
      answers: {
        a: "Left Tackle",
        b: "Linebacker",
        c: "Corner",
        d: "safty"
      },
      correctAnswer: "a"
    },
    {
      question: "What number was Wayne Gretzky?",
      answers: {
        a: "23",
        b: "9",
        c: "91",
        d: "99"
      },
      correctAnswer: "d"
    }
  ];

  function startGame() {
    for (i = 0; i < myQuestions.length; i++);
    $("#questions").text(myQuestions)
    console.log(myQuestions);

  }
  startGame ();
})