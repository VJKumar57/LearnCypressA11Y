function submitQuiz() {
    // Retrieve selected answers
    const answer1 = document.querySelector('input[name="q1"]:checked');
    const answer2 = document.querySelector('input[name="q2"]:checked');

    // Check if all questions are answered
    if (!answer1 || !answer2) {
        alert("Please answer all questions.");
        return;
    }

    // Check answers and display result
    const resultContainer = document.getElementById("result");
    let correctCount = 0;

    if (answer1.value === "Paris") {
        correctCount++;
    }

    if (answer2.value === "Jupiter") {
        correctCount++;
    }

    resultContainer.textContent = `You got ${correctCount} out of 2 questions correct.`;
}

document.getElementById("submit-btn").addEventListener("click", submitQuiz);
