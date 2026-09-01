/* ============================================================
   game.js — Lógica do jogo de treino de sons
   Depende de sounds-data.js já carregado (vowels, diphthongs, consonants)
   ============================================================ */

const pools = {
  vowels: vowels,
  diphthongs: diphthongs,
  consonants: consonants,
  all: [...vowels, ...diphthongs, ...consonants],
};

let currentPool = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let answeredCount = 0;
let missed = [];
let awaitingNext = false;
let inputMode = 'type'; // 'type' ou 'mc' (múltipla escolha)
let mcOptions = [];

const symbolEl = document.getElementById('question-symbol');
const hintEl = document.getElementById('question-hint');
const approxEl = document.getElementById('question-approx');
const inputEl = document.getElementById('answer-input');
const answerRow = document.getElementById('answer-row');
const mcOptionsEl = document.getElementById('mc-options');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score-value');
const streakEl = document.getElementById('streak-value');
const progressFill = document.getElementById('progress-fill');
const progressLabel = document.getElementById('progress-label');
const missedListEl = document.getElementById('missed-list');
const submitBtn = document.getElementById('submit-btn');
const skipBtn = document.getElementById('skip-btn');
const retryBtn = document.getElementById('retry-btn');
const nextBtnGame = document.getElementById('next-btn-game');
const typeModeBtn = document.getElementById('type-mode-btn');
const mcModeBtn = document.getElementById('mc-mode-btn');

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.85;
  window.speechSynthesis.speak(utter);
}

function startMode(mode) {
  currentPool = shuffle(pools[mode]);
  currentIndex = 0;
  answeredCount = 0;
  missed = [];
  updateMissedDisplay();
  loadQuestion();
  updateProgress();
}

function setInputMode(mode) {
  inputMode = mode;
  typeModeBtn.classList.toggle('active', mode === 'type');
  mcModeBtn.classList.toggle('active', mode === 'mc');
  loadQuestion();
}

function buildMCOptions(correctItem) {
  // Pega 3 distratores de sons diferentes do mesmo pool atual
  const others = currentPool.filter(item => item.sym !== correctItem.sym);
  const distractors = shuffle(others).slice(0, 3);
  const options = shuffle([correctItem, ...distractors]);
  return options.map(item => ({
    word: item.words[0],
    sym: item.sym,
    isCorrect: item.sym === correctItem.sym,
  }));
}

function loadQuestion() {
  if (currentIndex >= currentPool.length) {
    currentPool = shuffle(currentPool);
    currentIndex = 0;
  }
  const q = currentPool[currentIndex];
  symbolEl.textContent = `/${q.sym}/`;
  hintEl.textContent = q.hint;
  approxEl.textContent = q.approx ? q.approx : '';
  approxEl.style.display = q.approx ? 'block' : 'none';

  feedbackEl.className = 'feedback';
  feedbackEl.innerHTML = '';
  nextBtnGame.classList.remove('show');
  awaitingNext = false;

  if (inputMode === 'type') {
    answerRow.style.display = 'flex';
    mcOptionsEl.style.display = 'none';
    inputEl.value = '';
    inputEl.disabled = false;
    inputEl.focus();
  } else {
    answerRow.style.display = 'none';
    mcOptionsEl.style.display = 'grid';
    mcOptions = buildMCOptions(q);
    renderMCOptions();
  }
}

function renderMCOptions() {
  mcOptionsEl.innerHTML = '';
  mcOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'mc-choice';
    btn.textContent = opt.word;
    btn.addEventListener('click', () => checkAnswerMC(opt, btn));
    mcOptionsEl.appendChild(btn);
  });
}

function checkAnswerMC(chosen, btnEl) {
  if (awaitingNext) return;
  const q = currentPool[currentIndex];

  document.querySelectorAll('.mc-choice').forEach(b => b.disabled = true);

  if (chosen.isCorrect) {
    btnEl.classList.add('correct');
    resolveAnswer(true, q, chosen.word);
  } else {
    btnEl.classList.add('incorrect');
    // destaca a opção correta também
    const correctBtn = [...document.querySelectorAll('.mc-choice')].find(b => b.textContent === currentPool[currentIndex].words[0]);
    document.querySelectorAll('.mc-choice').forEach((b, i) => {
      if (mcOptions[i].isCorrect) b.classList.add('correct');
    });
    resolveAnswer(false, q, chosen.word);
  }
}

function checkAnswerType() {
  if (awaitingNext) return;
  const q = currentPool[currentIndex];
  const raw = inputEl.value.trim().toLowerCase();
  if (!raw) return;

  const isCorrect = q.words.some(w => w.toLowerCase() === raw);
  inputEl.disabled = true;
  resolveAnswer(isCorrect, q, raw);
}

function resolveAnswer(isCorrect, q, givenWord) {
  if (isCorrect) {
    score += 10 + (streak * 2);
    streak += 1;
    if (streak > bestStreak) bestStreak = streak;
    feedbackEl.className = 'feedback show correct';
    feedbackEl.innerHTML = `<b>Certo!</b> "${givenWord}" tem o som /${q.sym}/.
      <span class="full-transcription">Outros exemplos: ${q.ex}</span>`;
    speak(givenWord);
  } else {
    streak = 0;
    if (!missed.find(m => m.sym === q.sym)) missed.push(q);
    const correctWord = q.words[0];
    feedbackEl.className = 'feedback show incorrect';
    feedbackEl.innerHTML = `<b>Não é esse som.</b> A resposta esperada era <b>"${correctWord}"</b> — transcrição completa: /${transcribeExampleWord(q)}/.
      <span class="full-transcription">Outros exemplos válidos: ${q.ex}</span>`;
    speak(correctWord);
  }

  answeredCount += 1;
  scoreEl.textContent = score;
  streakEl.textContent = streak;
  updateMissedDisplay();
  updateProgress();

  awaitingNext = true;
  nextBtnGame.classList.add('show');
}

function transcribeExampleWord(q) {
  // Aproximação simples: mostra o símbolo do som-alvo já que não temos
  // transcrição completa de cada palavra individualmente.
  return q.sym;
}

function goToNext() {
  currentIndex += 1;
  loadQuestion();
}

function updateProgress() {
  const total = currentPool.length;
  const done = total ? (answeredCount % total === 0 && answeredCount > 0 ? total : answeredCount % total) : 0;
  const pct = total ? (done / total) * 100 : 0;
  progressFill.style.width = `${pct}%`;
  progressLabel.textContent = `${done} / ${total} sons neste modo · ${answeredCount} respondidas no total`;
}

function updateMissedDisplay() {
  missedListEl.innerHTML = '';
  missed.forEach(m => {
    const chip = document.createElement('span');
    chip.className = 'missed-chip';
    chip.textContent = `/${m.sym}/ — revisar`;
    missedListEl.appendChild(chip);
  });
}

document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    startMode(btn.dataset.mode);
  });
});

typeModeBtn.addEventListener('click', () => setInputMode('type'));
mcModeBtn.addEventListener('click', () => setInputMode('mc'));

submitBtn.addEventListener('click', checkAnswerType);
inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (awaitingNext) { goToNext(); } else { checkAnswerType(); }
  }
});

skipBtn.addEventListener('click', () => {
  streak = 0;
  streakEl.textContent = streak;
  answeredCount += 1;
  updateProgress();
  goToNext();
});

nextBtnGame.addEventListener('click', goToNext);

// Inicializa
setInputMode('type');
startMode('vowels');
