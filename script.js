const quizData = [
    {
        question: "Qual a nossa data de aniversário de namoro?",
        options: ["25/07/2024", "12/06/2024", "04/05/2024", "12/07/2024"],
        correct: "12/07/2024"
    },
    {
        question: "Onde foi nosso primeiro encontro (No nosso 5º reencontro kkk)?",
        options: ["Save the Burger", "Praça Silvio (Silva) Romero", "Cabana Burger", "Jardim de Napoli"],
        correct: "Cabana Burger"
    },
    {
        question: "Qual é nosso dia preferido da semana?",
        options: ["Sexta", "Domingo", "Quarta", "Sábado"],
        correct: "Quarta"
    },
    {
        question: "Quem é o mais lindo, gostoso, cheiroso, engraçado, amor da sua vida?",
        options: ["Cristiano Ronaldo", "Rodrigo Lombardi", "Dennys", "Michael B. Jordan"],
        correct: "Dennys"
    },
    {
        question: "Quem é o amor da vida do Dennys?",
        options: ["Ester", "Neymar Jr.", "SPFC", "Call of Duty"],
        correct: "Ester"
    }
];

let currentQuestion = 0;
const quizContainer = document.getElementById('quiz-container');

function loadQuestion() {
    quizContainer.innerHTML = "";
    const q = quizData[currentQuestion];
    const title = document.createElement('h2');
    title.textContent = q.question;
    quizContainer.appendChild(title);

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(opt);
        quizContainer.appendChild(btn);
    });
}

function checkAnswer(selectedOption) {
    const currentQuiz = quizData[currentQuestion];
    if (selectedOption === currentQuiz.correct) {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            setTimeout(loadQuestion, 500);
        } else {
            quizContainer.classList.add('hidden');
            document.getElementById('gift-container').classList.remove('hidden');
        }
    } else {
        alert("Resposta errada! Tente novamente ❤️");
    }
}

function revealRoulette() {
    document.getElementById('gift-container').classList.add('hidden');
    document.getElementById('roulette-container').classList.remove('hidden');
}

const dinnerOptions = ["🍕 Pizza", "🍣 Sushi", "🍔 Hamburguer", "🥗 Salada"];

function spinRoulette() {
    const rouletteResult = document.getElementById('roulette-result');
    const totalSpins = 20;
    let spinCount = 0;

    const spinInterval = setInterval(() => {
        const random = dinnerOptions[Math.floor(Math.random() * dinnerOptions.length)];
        rouletteResult.textContent = `Girando... ${random}`;
        spinCount++;
        if (spinCount >= totalSpins) {
            clearInterval(spinInterval);
            rouletteResult.textContent = `Vamos jantar: 🍕 Pizza!`;
            setTimeout(() => {
                document.getElementById('roulette-container').classList.add('hidden');
                document.getElementById('slideshow-container').classList.remove('hidden');
                startSlideshow();
            }, 3000);
        }
    }, 100);
}

const slideshowImages = [
    { src: "img1.jpg", caption: "Nossa noite perfeita" },
    { src: "img2.jpg", caption: "Aquela viagem especial" },
    { src: "img3.jpg", caption: "Dia perfeito com você 🌅" },
    { src: "img4.jpg", caption: "Você é a mais Gata ❤️" },
    { src: "img5.jpg", caption: "Nossa Casinha" }

];

function startSlideshow() {
    const slideshow = document.getElementById('slideshow');
    slideshow.innerHTML = "";
    slideshowImages.forEach(img => {
        const div = document.createElement('div');
        const image = document.createElement('img');
        image.src = img.src;
        const caption = document.createElement('p');
        caption.textContent = img.caption;
        div.appendChild(image);
        div.appendChild(caption);
        slideshow.appendChild(div);
    });
    document.getElementById('love-letter-container').classList.remove('hidden');
    document.getElementById('kiss-roulette-container').classList.remove('hidden');
}

function showLoveLetter() {
    const letter = "Amor, nossa história daria o enredo perfeito de um livro, estar com você é simplesmente incrível, nosso amor é inefável. Obrigado por ser essa mulher tão incrível, cheia de amor, carinho, caráter, lealdade, um pouquinho (MUITO) de loucura kkkk. Você é maravilhosa, por dentro e por fora, toda linda, cheirosa, vaidosa, estilosa, gostosa, perfeita. Além de ser muito parceira, engraçada, inteligente e a melhor companhia que eu poderia ter. Não vejo a hora de estar contigo pra sempre, no nosso lar. Construir nossa família e ser feliz com você. Obrigado por nunca desistir de mim e do nosso amor, porque isso é que fez a nossa vida estar tão feliz hoje em dia. Nunca vou poder agradecer o suficiente, você me salvou de várias formas. Eu te amo muito!";
    let i = 0;
    const output = document.getElementById('love-letter');
    output.textContent = "";
    const typeWriter = () => {
        if (i < letter.length) {
            output.textContent += letter.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    typeWriter();
}

const kissOptions = ["💋 Beijo na boca", "💕 Abraço Apertado", "😘 Beijo no pescoço", "🎁 Surpresa especial"];
function spinKissRoulette() {
    const kissResult = document.getElementById('kiss-result');
    const totalSpins = 15;
    let spinCount = 0;

    const spinInterval = setInterval(() => {
        const random = kissOptions[Math.floor(Math.random() * kissOptions.length)];
        kissResult.textContent = `Girando... ${random}`;
        spinCount++;
        if (spinCount >= totalSpins) {
            clearInterval(spinInterval);
            kissResult.textContent = `Você ganhou: 🎁 Surpresa especial`;
        }
    }, 100);
}

window.onload = () => {
    const startDate = new Date("2024-07-12");
    const today = new Date();
    const diff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById("day-counter").textContent = `Estamos juntos há ${diff} dias 💘`;
    loadQuestion();
};
