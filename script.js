const quizData = [
    {
        question: "Qual a nossa data de aniversário de namoro?",
        options: ["14/02/2020", "12/06/2020", "01/01/2020", "25/12/2019"],
        correct: "14/02/2020"
    },
    {
        question: "Qual foi o nosso primeiro filme juntos?",
        options: ["La La Land", "Titanic", "O Rei Leão", "Top Gun"],
        correct: "La La Land"
    },
    {
        question: "Qual a cor da sua camisa no nosso primeiro encontro?",
        options: ["Azul", "Branca", "Vermelha", "Preta"],
        correct: "Azul"
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById('question').textContent = q.question;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = `❤️ ${option}`;
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });

    document.getElementById('feedback').textContent = '';
}

function checkAnswer(selected) {
    const correct = quizData[currentQuestion].correct;
    const feedback = document.getElementById('feedback');

    if (selected === correct) {
        feedback.textContent = "Acertou!";
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            setTimeout(loadQuestion, 1000);
        } else {
            document.getElementById('quiz-container').classList.add('hidden');
            document.getElementById('roulette-container').classList.remove('hidden');
        }
    } else {
        feedback.textContent = "Ops! Tenta de novo!";
    }
}

const dinnerOptions = ["🍕 Pizza", "🍣 Sushi", "🥩 Churrasco", "🍔 Hambúrguer", "🍝 Massas"];

function spinRoulette() {
    const randomIndex = Math.floor(Math.random() * dinnerOptions.length);
    const result = dinnerOptions[randomIndex];
    document.getElementById('roulette-result').textContent = `Vamos jantar: ${result}!`;

    setTimeout(() => {
        document.getElementById('roulette-container').classList.add('hidden');
        document.getElementById('slideshow-container').classList.remove('hidden');
        startSlideshow();
    }, 3000);
}

const slides = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentSlide = 0;

function startSlideshow() {
    document.getElementById('music-container').classList.remove('hidden');
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        document.getElementById('slide').src = slides[currentSlide];
    }, 3000);
}

window.onload = loadQuestion;
