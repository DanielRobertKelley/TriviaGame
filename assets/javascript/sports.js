$(document).ready(function(){
  
    $("#remaining-time").hide();
    $("#start").on("click", trivia.startGame);
    $(document).on("click" , ".triviaButton", trivia.userCheck);
    
  })
  
  var trivia = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 10,
    timerOn: false,
    timerId: '',
    timerRunning: "",
    currentQuestions:0,
    currentAnswer:0,

    questions: {
        q1: "What is not a plentaly in hockey?",
        q2: "What NFL franchise has won the most championships?",
        q3: "Who has the record for most home runs in a MLB season?",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
        q8: "",
        q9: "",
        q10: ""
    },
    options: {
        q1: ["Charging", "Boarding", "Stomping", "Slashing"],
        q2: ["Browns", "Cowboys", "Steelers", "Packers"],
        q3: ["Barry Bonds", "Mark McGwire", "Sammy Sosa", "Ken Griffy Jr."],
        q4: "",
        q5: "",
        q6: "",
        q7: "",
        q8: "",
        q9: "",
        q10: ""
    },
    answers: {
        q1: "Stomping",
        q2: "Packers",
        q3: "Barry Bonds",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
        q8: "",
        q9: "",
        q10: ""
    },


    startGame: function(){
    trivia.currentQuestion = 0;
    trivia.currentAnswer= 0;
      trivia.correct = 0;
      trivia.incorrect = 0;
      trivia.unanswered = 0;
      clearInterval(trivia.timerId);
      
      $("#questions").text(questions);
      //console.log(questions);
      
      $("#answers").html(" ");
      
      $("#timer").text(trivia.timer);
      
      $("#start").hide();
  
      $("#remaining-time").show();
      
      trivia.nextQuestion();

      
    },
    nextQuestion: function(){
      
      trivia.timer = 10;
      $("#timer").text(trivia.timer);
      if(!trivia.timerOn){
        trivia.timerId = setInterval(trivia.timerRunning, 1000);
      }
      
      var question = Object.values(trivia.questions)[trivia.currentQuestions];

      $.each(questions.currentQuestions);
      $("#questions").text(question);

      
      //$.each(currentQuestions, function(index,key) {
       // $("#questions").append(question)
      //})

      var questionOptions = Object.values(trivia.options)[trivia.currentQuestions];
      
      $.each(questionOptions, function(index, key){
        $("#options").append($('<button class="btn  btn-outline-secondary triviaButton">'+key+'</button>'));
      })
      
      trivia.timerRunning ();
      
    },

    timerRunning: function(){
      if(trivia.timer > -1 && trivia.currentQuestion < Object.keys(trivia.questions).length){
        $("#timer").text(trivia.timer);
        trivia.timer--;
          if(trivia.timer === 5){
           // $("#timer").addClass("last-seconds"); 
          }
      }
      else if(trivia.timer === -1){
        trivia.unanswered++;
        trivia.result = false;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.userResults, 1000);
        $("#results").text("<h5>Answer is " + Object.values(trivia.answers)[trivia.currentQuestions] +"</h5>");
      }
      else if (trivia.currentQuestion === Object.keys(trivia.questions).length){
        $("#results")
          .text(
          '<p>Correct: '+ trivia.correct +'</p>'+
          '<p>Incorrect: '+ trivia.incorrect +'</p>'+
          '<p>Unaswered: '+ trivia.unanswered +'</p>'+
          '<p>Thanks for Playing</p>');
        
        $("#results").hide();
        
        $("#start").show();
      }
      //trivia.userCheck ();
     
    },
    userCheck : function() {
      var resultId;
    
      var currentAnswer = Object.values(trivia.answers)[trivia.currentQuestion];
      //console.log($(this).text());
      //console.log(currentAnswer)
      if($(this).text() === currentAnswer){
        trivia.correct++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.userResult, 1000);
        $("#answers").html("<h5>Correct!</h5>");
      }
      else{
        
        trivia.incorrect++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.userResults, 1000);
        $("#answers").html('<h5>Wrong! '+ currentAnswer +'</h5>');
      }
      //trivia.userResult ();
    },
    userResult: function(){
      if(currentQuestions > questions)
      alert("game over")
      
      trivia.currentQuestion++;
      trivia.curentOptions++;
      trivia.currentAnswer++;
      //$(".option").remove();
      $("#results").text(results);
      
    trivia.nextQuestion();
    trivia.startGame ();
    trivia.userCheck();
    trivia.timerRunning();
       
    },
   
  
  }



























