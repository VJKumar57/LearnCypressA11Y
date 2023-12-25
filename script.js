// Sample quiz questions and answers
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Paris"
    },
    // Add more questions here...
];

let currentQuestion = 0;
let userAnswers = [];
let attemptCount = 0;
const maxAttempts = 3;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = `Question ${currentQuestion + 1}: ${quizData[currentQuestion].question}`;
    optionsElement.innerHTML = "";

    quizData[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        optionsElement.appendChild(li);
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        userAnswers.push(selectedOption.value);
        currentQuestion++;

        if (currentQuestion < quizData.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    } else {
        alert("Please select an option before moving to the next question.");
    }
}

function displayResult() {
    const resultContainer = document.getElementById("result-container");
    const resultMessage = document.getElementById("result-message");

    const score = calculateScore();

    resultMessage.textContent = `You scored ${score} out of ${quizData.length}.`;

    if (score >= quizData.length / 2) {
        resultContainer.style.color = "green";
        resultMessage.textContent += " Well done!";
    } else {
        resultContainer.style.color = "red";
        resultMessage.textContent += " Keep practicing.";
    }

    document.getElementById("button-container").style.display = "none";
    resultContainer.style.display = "block";
}

function calculateScore() {
    let score = 0;

    for (let i = 0; i < quizData.length; i++) {
        if (userAnswers[i] === quizData[i].correctAnswer) {
            score++;
        }
    }

    return score;
}

function retakeQuiz() {
    if (attemptCount < maxAttempts - 1) {
        attemptCount++;
        currentQuestion = 0;
        userAnswers = [];
        displayQuestion();
        document.getElementById("button-container").style.display = "block";
        document.getElementById("result-container").style.display = "none";
    } else {
        alert("You have reached the maximum number of attempts.");
    }
}

function submitQuiz() {
    alert("Quiz submitted!");
    // Additional logic for submitting the quiz to a server or storing results.
}
