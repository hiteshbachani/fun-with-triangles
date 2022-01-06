const quizContainer = document.querySelector(".quiz-container");
const submitButton = document.querySelector("#submit-button");
const output = document.querySelector("#output");

const correctAnswers = ['90°', 'right angled'];

function calculateScore() {
    let score = 0;
    let index = 0;

    const data = new FormData(quizContainer);
    for (let values of data.values()) {
        if (values === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = `Your score is ${score}`;
}


submitButton.addEventListener("click", calculateScore)