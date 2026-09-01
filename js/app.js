/* ============================================================
   app.js — Renderização da grade de referência (vowels,
   diphthongs, consonants) na parte estática da página.
   Depende de sounds-data.js já carregado.
   ============================================================ */

function speakWord(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.85;
  window.speechSynthesis.speak(utter);
}

function renderCards(containerId, data, colorClass) {
  const container = document.getElementById(containerId);
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const firstWord = item.words[0];

    card.innerHTML = `
      <div class="card-top">
        <span class="symbol ${colorClass}">/${item.sym}/</span>
        <button class="card-audio-btn" aria-label="Ouvir exemplo de pronúncia de ${firstWord}" title="Ouvir">🔊</button>
      </div>
      <div class="examples">${item.ex}</div>
      <div class="pt-hint">${item.hint}</div>
      ${item.approx ? `<div class="approx-note">${item.approx}</div>` : ''}
    `;

    const audioBtn = card.querySelector('.card-audio-btn');
    audioBtn.addEventListener('click', () => speakWord(firstWord));

    container.appendChild(card);
  });
}

renderCards('vowels-grid', vowels, 'vowel-color');
renderCards('diphthongs-grid', diphthongs, 'diphthong-color');
renderCards('consonants-grid', consonants, 'consonant-color');

// Registro do service worker (PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
