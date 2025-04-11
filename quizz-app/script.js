const questions = [
        {
            question: "What is the biggest animal in the world?",
            answers: [
                { text: "Lion", correct: false },
                { text: "Blue whale", correct: true },
                { text: "Elephant", correct: false },
                { text: "Giraffe", correct: false },
            ]
        },
        {
            question: "What is the full form of HTML?",
            answers: [
                { text: "Hyper Text Markup Language", correct: true },
                { text: "High Text Management Language", correct: false },
                { text: "Hyper Transmission Management Language", correct: false },
                { text: "High Transmission Management Language", correct: false },
            ]
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: "Earth", correct: false },
                { text: "Mars", correct: true },
                { text: "Jupiter", correct: false },
                { text: "Venus", correct: false },
            ]
        },
        {
            question: "Who wrote the play 'Romeo and Juliet'?",
            answers: [
                { text: "William Shakespeare", correct: true },
                { text: "Leo Tolstoy", correct: false },
                { text: "Mark Twain", correct: false },
                { text: "Charles Dickens", correct: false },
            ]
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Nitrogen", correct: false },
                { text: "Carbon Dioxide", correct: true },
                { text: "Hydrogen", correct: false },
            ]
        },
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Paris", correct: true },
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false },
                { text: "Rome", correct: false },
            ]
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            answers: [
                { text: "Gold", correct: false },
                { text: "Oxygen", correct: true },
                { text: "Osmium", correct: false },
                { text: "Iron", correct: false },
            ]
        },
        {
            question: "How many continents are there on Earth?",
            answers: [
                { text: "5", correct: false },
                { text: "6", correct: false },
                { text: "7", correct: true },
                { text: "8", correct: false },
            ]
        },
        {
            question: "Who is known as the 'Father of Computers'?",
            answers: [
                { text: "Alan Turing", correct: false },
                { text: "Bill Gates", correct: false },
                { text: "Charles Babbage", correct: true },
                { text: "Steve Jobs", correct: false },
            ]
        },
        {
            question: "Which ocean is the largest?",
            answers: [
                { text: "Atlantic Ocean", correct: false },
                { text: "Indian Ocean", correct: false },
                { text: "Pacific Ocean", correct: true },
                { text: "Arctic Ocean", correct: false },
            ]
        }
];

const questionElement = document.querySelector(".question");
const answerButtons = document.querySelector(".answer-btns");
const nextButton = document.querySelector(".next");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionNumber = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo+". "+currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectedAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectedAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";
}
function handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
};

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handelNextButton();
    }else{
        startQuiz();
    }
});

function showScore(){
    resetState();
    questionElement.innerHTML=  `You scored ${score} out of ${questions.length}`;
}
startQuiz();
