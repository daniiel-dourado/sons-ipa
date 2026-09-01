/* ============================================================
   sounds-data.js
   Dados fonéticos de referência — inglês americano (General American)

   Convenção de transcrição adotada:
   - Transcrição FONÊMICA (entre / /), não fonética detalhada.
   - Sistema rótico (o /r/ pós-vocálico é pronunciado e mantido).
   - Vogais R-coloridas representadas como /ɝ/ (tônica) e /ɚ/ (átona),
     em vez do símbolo britânico /ɜː/.
   - Sem uso do diacrítico de duração /ː/, já que o inglês americano
     não distingue vogais por duração da mesma forma que o britânico —
     a diferença entre pares como /i/ e /ɪ/ é de QUALIDADE, não só duração.
   - Fonte de referência: IPA da American English (General American),
     alinhado ao padrão usado em referências como americanipachart.com
     e easypronunciation.com/en/american-english-pronunciation-ipa-chart.

   IMPORTANTE: estas são transcrições FONÊMICAS (categorias de som).
   A realização exata pode variar de sotaque para sotaque dentro dos
   EUA, e a voz sintetizada usada no áudio deste app depende do
   navegador/sistema operacional — não é uma gravação humana controlada.
   ============================================================ */

const vowels = [
  {
    sym: "i",
    ex: "s<b>ee</b>, m<b>e</b>, f<b>ee</b>l",
    hint: "vogal alta e frontal, lábios espalhados",
    approx: "aproximação p/ falante de português: parecido com 'i' de 'vi', mas mais tenso",
    words: ["see", "me", "feel", "tea", "green", "need", "eat", "read", "key", "team"]
  },
  {
    sym: "ɪ",
    ex: "sh<b>i</b>p, s<b>i</b>t, b<b>i</b>t",
    hint: "vogal alta-frontal relaxada, mais curta e mais baixa que /i/",
    approx: "aproximação: entre o 'i' e o 'e' do português, mais solto",
    words: ["ship", "sit", "bit", "fish", "gym", "big", "him", "this", "in", "win"]
  },
  {
    sym: "ɛ",
    ex: "b<b>e</b>d, s<b>ai</b>d, m<b>e</b>n",
    hint: "vogal média-frontal",
    approx: "aproximação: parecido com o 'é' aberto do português",
    words: ["bed", "said", "men", "red", "pen", "get", "yes", "ten", "best", "help"]
  },
  {
    sym: "æ",
    ex: "c<b>a</b>t, b<b>a</b>d, m<b>a</b>n",
    hint: "vogal baixa-frontal, boca bem aberta",
    approx: "aproximação: entre 'é' e 'á', mais espalhado que qualquer vogal do português",
    words: ["cat", "bad", "man", "hat", "apple", "that", "have", "and", "can", "hand"]
  },
  {
    sym: "ɑ",
    ex: "f<b>a</b>ther, h<b>o</b>t, st<b>o</b>p",
    hint: "vogal baixa-posterior, sem arredondamento dos lábios",
    approx: "aproximação: 'a' aberto, parecido com 'fá'",
    words: ["father", "hot", "stop", "not", "top", "got", "job", "lot", "body", "office"]
  },
  {
    sym: "ɔ",
    ex: "th<b>ou</b>ght, l<b>aw</b>, w<b>al</b>k",
    hint: "vogal média-posterior arredondada — em muitos falantes americanos, próxima ou igual a /ɑ/ (cot–caught merger)",
    approx: "aproximação: 'ó' aberto",
    words: ["thought", "law", "walk", "talk", "ball", "call", "small", "tall", "door", "four"]
  },
  {
    sym: "ʊ",
    ex: "b<b>oo</b>k, p<b>u</b>t, c<b>ou</b>ld",
    hint: "vogal alta-posterior relaxada, lábios levemente arredondados",
    approx: "aproximação: 'u' curto e solto",
    words: ["book", "put", "could", "good", "full", "look", "took", "cook", "foot", "would"]
  },
  {
    sym: "u",
    ex: "f<b>oo</b>d, bl<b>ue</b>, wh<b>o</b>",
    hint: "vogal alta-posterior tensa, lábios arredondados",
    approx: "aproximação: 'u' fechado e mais longo",
    words: ["food", "blue", "who", "moon", "true", "school", "room", "soon", "move", "two"]
  },
  {
    sym: "ʌ",
    ex: "c<b>u</b>p, l<b>o</b>ve, m<b>o</b>ney",
    hint: "vogal média-central, boca relaxada",
    approx: "aproximação: 'â' curto, parecido com 'punho'",
    words: ["cup", "love", "money", "sun", "come", "up", "but", "much", "run", "fun"]
  },
  {
    sym: "ɝ",
    ex: "b<b>ir</b>d, w<b>or</b>k, l<b>ear</b>n",
    hint: "vogal R-colorida TÔNICA — a língua se curva para trás enquanto a vogal é produzida",
    approx: "não existe equivalente em português; é o som de 'r' e vogal fundidos numa só sílaba",
    words: ["bird", "work", "learn", "girl", "first", "word", "world", "turn", "early", "earth"]
  },
  {
    sym: "ɚ",
    ex: "teach<b>er</b>, doct<b>or</b>, sug<b>ar</b>",
    hint: "vogal R-colorida ÁTONA — versão sem acento do som anterior, comum em finais de palavra",
    approx: "não existe equivalente em português; é um schwa com coloração de R",
    words: ["teacher", "doctor", "sugar", "water", "better", "mother", "father", "letter", "under", "over"]
  },
  {
    sym: "ə",
    ex: "<b>a</b>bout, sof<b>a</b>, banan<b>a</b>",
    hint: "schwa — vogal central reduzida, som mais comum do inglês, ocorre apenas em sílabas não-acentuadas",
    approx: "aproximação: um 'a' bem fraco e neutro",
    words: ["about", "sofa", "banana", "again", "upon", "support", "common", "famous", "picture", "camera"]
  },
];

const diphthongs = [
  {
    sym: "eɪ",
    ex: "d<b>ay</b>, r<b>ai</b>n, <b>ei</b>ght",
    hint: "desliza de vogal média-frontal para /ɪ/",
    approx: "aproximação: 'ei' como em 'lei'",
    words: ["day", "rain", "eight", "name", "late", "make", "take", "play", "say", "way"]
  },
  {
    sym: "aɪ",
    ex: "m<b>y</b>, t<b>i</b>me, l<b>i</b>ke",
    hint: "desliza de vogal baixa-central para /ɪ/",
    approx: "aproximação: 'ai' como em 'pai'",
    words: ["my", "time", "like", "five", "night", "light", "right", "find", "kind", "mind"]
  },
  {
    sym: "ɔɪ",
    ex: "b<b>oy</b>, v<b>oi</b>ce, ch<b>oi</b>ce",
    hint: "desliza de vogal média-posterior para /ɪ/",
    approx: "aproximação: 'ói' como em 'dói'",
    words: ["boy", "voice", "choice", "toy", "noise", "join", "point", "enjoy", "coin", "oil"]
  },
  {
    sym: "aʊ",
    ex: "n<b>ow</b>, h<b>ou</b>se, c<b>ow</b>",
    hint: "desliza de vogal baixa-central para /ʊ/",
    approx: "aproximação: 'au' como em 'mau'",
    words: ["now", "house", "cow", "town", "out", "about", "found", "sound", "around", "down"]
  },
  {
    sym: "oʊ",
    ex: "g<b>o</b>, h<b>o</b>me, sh<b>ow</b>",
    hint: "desliza de vogal média-posterior para /ʊ/ — nota: no sistema americano este é o equivalente ao /əʊ/ britânico",
    approx: "aproximação: 'ou' como em 'sou'",
    words: ["go", "home", "show", "know", "boat", "road", "coat", "open", "close", "most"]
  },
];

const consonants = [
  {
    sym: "p",
    ex: "<b>p</b>en, cu<b>p</b>",
    hint: "oclusiva bilabial surda — aspirada no início de sílaba tônica (ex: 'pen'), não-aspirada após /s/ (ex: 'spin')",
    approx: null,
    words: ["pen", "cup", "park", "stop", "paper", "people", "play", "put", "place", "point"]
  },
  {
    sym: "b",
    ex: "<b>b</b>ig, ca<b>b</b>",
    hint: "oclusiva bilabial sonora",
    approx: null,
    words: ["big", "cab", "book", "bad", "boy", "best", "before", "between", "about", "table"]
  },
  {
    sym: "t",
    ex: "<b>t</b>ea, ca<b>t</b>",
    hint: "oclusiva alveolar surda — aspirada no início de sílaba tônica; entre vogais costuma virar 'flap' (soa como /d/ rápido), como em 'water'",
    approx: null,
    words: ["tea", "cat", "time", "top", "talk", "take", "tell", "test", "two", "today"]
  },
  {
    sym: "d",
    ex: "<b>d</b>og, ba<b>d</b>",
    hint: "oclusiva alveolar sonora",
    approx: null,
    words: ["dog", "bad", "day", "door", "dark", "did", "down", "during", "word", "hard"]
  },
  {
    sym: "k",
    ex: "<b>c</b>at, ba<b>ck</b>",
    hint: "oclusiva velar surda — aspirada no início de sílaba tônica",
    approx: null,
    words: ["cat", "back", "key", "car", "clock", "come", "could", "call", "class", "kind"]
  },
  {
    sym: "ɡ",
    ex: "<b>g</b>o, ba<b>g</b>",
    hint: "oclusiva velar sonora",
    approx: null,
    words: ["go", "bag", "girl", "good", "game", "get", "give", "great", "ground", "glass"]
  },
  {
    sym: "tʃ",
    ex: "<b>ch</b>eese, wa<b>tch</b>",
    hint: "africada pós-alveolar surda",
    approx: "aproximação: 'tch' como em 'tchau'",
    words: ["cheese", "watch", "chair", "teach", "much", "child", "church", "change", "choose", "chance"]
  },
  {
    sym: "dʒ",
    ex: "<b>j</b>ob, brid<b>ge</b>",
    hint: "africada pós-alveolar sonora",
    approx: "aproximação: 'dj' como em 'adjetivo'",
    words: ["job", "bridge", "juice", "jump", "large", "just", "joy", "enjoy", "danger", "manage"]
  },
  {
    sym: "f",
    ex: "<b>f</b>ish, lau<b>gh</b>",
    hint: "fricativa labiodental surda",
    approx: null,
    words: ["fish", "laugh", "food", "fun", "phone", "family", "find", "first", "for", "from"]
  },
  {
    sym: "v",
    ex: "<b>v</b>ery, lo<b>v</b>e",
    hint: "fricativa labiodental sonora — atenção: não confundir com /b/",
    approx: null,
    words: ["very", "love", "voice", "van", "give", "live", "have", "move", "never", "every"]
  },
  {
    sym: "θ",
    ex: "<b>th</b>ink, ba<b>th</b>",
    hint: "fricativa dental surda, língua entre os dentes — não existe em português",
    approx: null,
    words: ["think", "bath", "three", "math", "thanks", "thing", "through", "throw", "month", "north"]
  },
  {
    sym: "ð",
    ex: "<b>th</b>is, mo<b>th</b>er",
    hint: "fricativa dental sonora, mesma posição de /θ/ mas com vibração das cordas vocais",
    approx: null,
    words: ["this", "mother", "that", "other", "there", "the", "they", "them", "then", "than"]
  },
  {
    sym: "s",
    ex: "<b>s</b>un, bu<b>s</b>",
    hint: "fricativa alveolar surda",
    approx: null,
    words: ["sun", "bus", "see", "stop", "sister", "school", "some", "start", "say", "same"]
  },
  {
    sym: "z",
    ex: "<b>z</b>oo, ro<b>s</b>e",
    hint: "fricativa alveolar sonora",
    approx: null,
    words: ["zoo", "rose", "zero", "buzz", "zone", "is", "was", "these", "those", "because"]
  },
  {
    sym: "ʃ",
    ex: "<b>sh</b>e, wi<b>sh</b>",
    hint: "fricativa pós-alveolar surda",
    approx: "aproximação: 'ch' como em 'chave'",
    words: ["she", "wish", "shop", "fish", "sheep", "show", "should", "short", "share", "shape"]
  },
  {
    sym: "ʒ",
    ex: "vi<b>si</b>on, mea<b>s</b>ure",
    hint: "fricativa pós-alveolar sonora",
    approx: "aproximação: 'j' como em 'jamais'",
    words: ["vision", "measure", "usually", "treasure", "pleasure", "decision", "occasion", "casual", "garage", "usual"]
  },
  {
    sym: "h",
    ex: "<b>h</b>ouse, <b>h</b>ello",
    hint: "fricativa glotal surda — som de respiração",
    approx: null,
    words: ["house", "hello", "happy", "hand", "home", "have", "help", "here", "how", "hope"]
  },
  {
    sym: "m",
    ex: "<b>m</b>an, su<b>m</b>",
    hint: "nasal bilabial",
    approx: null,
    words: ["man", "sum", "money", "mother", "make", "most", "much", "many", "must", "move"]
  },
  {
    sym: "n",
    ex: "<b>n</b>o, su<b>n</b>",
    hint: "nasal alveolar",
    approx: null,
    words: ["no", "sun", "name", "night", "near", "need", "next", "never", "new", "now"]
  },
  {
    sym: "ŋ",
    ex: "si<b>ng</b>, thi<b>n</b>k",
    hint: "nasal velar",
    approx: "aproximação: 'ng' nasal, tipo final de 'manga' sem soar o 'g'",
    words: ["sing", "think", "song", "long", "king", "thing", "bring", "during", "morning", "evening"]
  },
  {
    sym: "l",
    ex: "<b>l</b>eg, be<b>ll</b>",
    hint: "lateral alveolar — no final de sílaba, costuma ser velarizado ('dark L')",
    approx: null,
    words: ["leg", "bell", "look", "love", "light", "live", "life", "little", "last", "long"]
  },
  {
    sym: "ɹ",
    ex: "<b>r</b>ed, ca<b>r</b>",
    hint: "aproximante alveolar (frequentemente simplificado como /r/ em dicionários) — sem contato entre língua e céu da boca, diferente do 'r' do português",
    approx: null,
    words: ["red", "car", "right", "room", "run", "real", "read", "really", "road", "rest"]
  },
  {
    sym: "j",
    ex: "<b>y</b>es, <b>y</b>ellow",
    hint: "aproximante palatal",
    approx: "aproximação: 'i' rápido, como em 'iogurte'",
    words: ["yes", "yellow", "you", "year", "young", "yet", "yesterday", "use", "usual", "university"]
  },
  {
    sym: "w",
    ex: "<b>w</b>e, <b>w</b>ant",
    hint: "aproximante labiovelar",
    approx: "aproximação: 'u' rápido, lábios arredondados",
    words: ["we", "want", "work", "water", "will", "was", "one", "week", "world", "way"]
  },
];

// Exporta pra uso em outros módulos (game.js, app.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { vowels, diphthongs, consonants };
}
