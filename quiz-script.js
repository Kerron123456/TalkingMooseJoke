document.addEventListener("DOMContentLoaded", function() {
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Getting user's answers
        const answer1 = document.querySelector('input[name="question1"]:checked');
        const answer2 = document.querySelector('input[name="question2"]:checked');
        const answer3 = document.querySelector('input[name="question3"]:checked');
        const answer4 = document.querySelector('input[name="question4"]:checked');
		
        // Checking if all questions are answered
        if (!answer1 || !answer2 || !answer3|| !answer4) {
            resultDiv.innerHTML = '<p>Please answer all questions.</p>';
            return;
        }

        // Calculating score
        let score = 0;
        if (answer1.value === 'no') score++;
        if (answer2.value === 'yes') score++;
        if (answer3.value === 'yes') score++;
		if (answer4.value === 'yes') score++;

        // Displaying result
        let resultText = '';
        if (score === 4) {
            resultText = 'Congratulations! You are worthy for the moose.';
        } else {
            window.location.href = "NotWorthy.html";
        }
        resultDiv.innerHTML = '<p>' + resultText + '</p>';
    });
});
