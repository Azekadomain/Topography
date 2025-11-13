document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("quiz-root");
  if (!root) return;

  const STORAGE_KEY = 'topo_attempts_v1';
  const TEST_SIZE = 30;

  function pickRandom(arr, n) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, n);
  }

  function saveAttempt(record) {
    const store = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    store.push(record);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }

  const questions = pickRandom(QUESTION_BANK, TEST_SIZE);
  let index = 0;
  const answers = new Array(questions.length).fill(null);

  root.innerHTML = `
    <div id="qbox"></div>
    <div id="opts" class="options"></div>
    <div id="nav" style="margin-top:12px; display:flex; gap:8px;">
      <button id="prevBtn">◀ Назад</button>
      <button id="nextBtn">Далее ▶</button>
    </div>
    <div id="result" style="margin-top:20px;"></div>
  `;

  const qbox = document.getElementById("qbox");
  const opts = document.getElementById("opts");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const resultEl = document.getElementById("result");

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      render();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (index < questions.length - 1) {
      index++;
      render();
    } else {
      finishQuiz();
    }
  });

  function render() {
    const Q = questions[index];
    qbox.innerHTML = `<h3>Вопрос ${index + 1} из ${questions.length}</h3><p>${Q.q}</p>`;
    opts.innerHTML = "";

    Q.choices.forEach((choice, i) => {
      const btn = document.createElement("button");
      btn.className = "option";


      btn.innerHTML = `
        <span style="font-weight:bold; margin-right:6px;">
          ${String.fromCharCode(65 + i)}.
        </span>
        ${choice}
      `;

      btn.onclick = () => {
        answers[index] = i;
        render();
      };

      if (answers[index] !== null && answers[index] === i) {
        btn.classList.add("selected");
      }

      opts.appendChild(btn);
    });

    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === questions.length - 1 ? "Завершить" : "Далее ▶";
  }

  function finishQuiz() {
    let score = 0;
    resultEl.innerHTML = `<h2>Результаты</h2>`;

    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });

resultEl.innerHTML += `<p>Правильных ответов: ${score} из ${questions.length}</p>`;


let grade;
const percent = (score / questions.length) * 100;

if (percent < 50) {
  grade = 2;
} else if (percent < 70) {
  grade = 3;
} else if (percent < 85) {
  grade = 4;
} else {
  grade = 5;
}

resultEl.innerHTML += `
  <div style="
    text-align: center;
    font-size: 2.5em;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
    color: ${grade === 5 ? 'green' : grade === 4 ? 'dodgerblue' : grade === 3 ? 'orange' : 'red'};
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  ">
    Оценка: ${grade}
  </div>
`;



questions.forEach((q, i) => {
  const userAns = answers[i] !== null ? q.choices[answers[i]] : "—";
  const correctAns = q.choices[q.answer];
  const isCorrect = answers[i] === q.answer;

  const div = document.createElement("div");
  div.className = "review-item";
  div.innerHTML = `
    <strong>Вопрос ${i + 1}:</strong> ${q.q}<br>
    Правильный: <em>${correctAns}</em><br>
    Ваш ответ: <span style="color:${isCorrect ? "green" : "red"}">${userAns}</span>
    <hr>
  `;
  resultEl.appendChild(div);
});


    const record = {
      at: Date.now(),
      score,
      total: questions.length,
      percent: Math.round((score / questions.length) * 100)
    };
    saveAttempt(record);

    qbox.style.display = "none";
    opts.style.display = "none";
    document.getElementById("nav").style.display = "none";
  }

  render();
});


function resetQuiz() {
  const quizRoot = document.getElementById('quiz-root');
  quizRoot.innerHTML = '<div class="loader">Нельзя списывать!</div>';

  if (typeof currentQuestion !== 'undefined') currentQuestion = 0;
  if (typeof userAnswers !== 'undefined') userAnswers = [];

  if (typeof initQuiz === 'function') initQuiz();
}


document.addEventListener('visibilitychange', () => {
  if (document.hidden) resetQuiz();
});
