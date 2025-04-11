const quizData = [
    {
        question: "Qual a nossa data de aniversário de namoro?",
        options: ["25/07/2024", "12/06/2024", "04/05/2024", "12/07/2024"],
        correct: "12/07/2024"
    },
    {
        question: "Onde foi nosso primeiro encontro (dessa vez)?",
        options: ["Save the Burger", "Praça Silvio (Silva) Romero", "Cabana Burger", "Jardim de Napoli"],
        correct: "Cabana Burger"
    },
    {
        question: "Quem é o amor da minha vida?",
        options: ["Ester", "Neymar Jr.", "SPFC", "Call of Duty"],
        correct: "Ester"
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

const slides = ["img1.heic", "img2.heic", "img3.jpg","img4.heic","img5.heic"];
let currentSlide = 0;

function startSlideshow() {
    document.getElementById('music-container').classList.remove('hidden');
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        document.getElementById('slide').src = slides[currentSlide];
    }, 3000);
}

window.onload = loadQuestion;
