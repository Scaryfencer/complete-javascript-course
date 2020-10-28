// Suppose this code would be a plugin for other programmers to use in their code. Make sure
// that all your code is private and doesn't interfere with the other code (Hint: we learned a 
// special technique to do exactly that.)  IIFE?
(function () {

    // Build a function constructor called Question to describe a question. A question should include:
    // 1. question itself
    // 2. the possible answer the user can select from
    // 3. correct answer (i would use a number)
    var Question = function (question, possibleAnswers, correctAnswer) {
        this.question = question;
        this.possibleAnswers = possibleAnswers;
        this.correctAnswer = correctAnswer;
        this.ask = function () {
            console.log(this.question);
            this.possibleAnswers.forEach(element => {
                console.log(element);
            });
            // Use the Prompt function to ask the user for the correct answer. The user should input the number
            // of the correct answer such as you displayed it in the above task
            var answer = prompt('Please choose an answer from the numbers listed in the console');

            // Check if the answer is correct and print to the console whether the answer is correct or not 
            // Write another method for this
            if (answer == this.correctAnswer) {
                console.log('You have answered correctly!');
                score += 1;
                console.log('Total score = ' + score);
                newRandomQuestion();
            } else if (answer === null) {
                return
            } else {
                console.log('That is incorrect!');
                console.log('Total score = ' + score);
                newRandomQuestion();
            }  
        }
    }

    // Create a couple of questions using the constructor
    var question1 = new Question('What is your favorite color?', ['1. Red', '2. Yellow', '3. Green', '4. Blue'], 4);
    var question2 = new Question('What is your name?', ['1. Sir Lancelot', '2. King Arthur', '3. Sir Robin', '4. Sir Galahad'], 2);
    var question3 = new Question('What is your quest?', ['1. To seek the Holy Grail', '2. To trim shrubberies', '3. To slay the mythical rabbit', '4. To rescue the distressed princess'], 1);

    // Store them all inside an array
    var allThreeQuestions = [question1, question2, question3];

    // Store and display the score
    var score = 0;

    // Select one random question and log it in the console, together with the possible answers (each question
    // should have a number) (Hint: write a method for the Question objects for this task)
    function newRandomQuestion() {
        var randomQuestion = allThreeQuestions[(Math.floor(Math.random() * 3))];
        randomQuestion.ask();
    }
    
    newRandomQuestion();

})();