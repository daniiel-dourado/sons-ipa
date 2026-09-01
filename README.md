# IPA Sound Trainer

Guia introdutório e treino interativo dos sons do **inglês americano** (General American), com transcrição fonêmica IPA, grade de referência e jogo de reconhecimento de som.

Projeto pessoal de estudo, desenvolvido por Daniel Dourado utilizando o Claude (Anthropic) como ferramenta para guiar o desenvolvimento do projeto e mentor técnico.

---

## O que o projeto faz

- **Grade de referência** com 12 vogais, 5 ditongos e 24 consoantes do inglês americano, cada uma com:
  - Transcrição fonêmica IPA
  - Exemplos de palavras
  - Dica articulatória (ponto e modo de articulação, quando relevante)
  - Áudio de pronúncia (voz sintetizada do navegador)
  - Aproximação em português, quando aplicável, sinalizada como aproximação e não como pronúncia exata
- **Seção explicativa** sobre o que é o IPA, a diferença entre transcrição fonêmica e fonética, e a convenção adotada nesta referência
- **Jogo de reconhecimento de som**, em dois modos:
  - Digitar uma palavra que contenha o som mostrado
  - Múltipla escolha entre 4 palavras
  - Feedback com a resposta correta, transcrição e áudio em caso de erro

---

## Convenção de transcrição adotada

Este projeto documenta o **inglês americano rótico (General American)**, não o inglês britânico. Isso inclui:

- O som de R é pronunciado mesmo no final de sílaba (ex: "car", "heart")
- Vogais R-coloridas representadas como `/ɝ/` (tônica) e `/ɚ/` (átona), em vez do símbolo britânico `/ɜː/`
- Sem uso do diacrítico de duração `/ː/` — pares como `/i/` e `/ɪ/` são tratados como diferentes por **qualidade**, e não apenas duração
- O aproximante do R é representado como `/ɹ/`, símbolo tecnicamente mais correto que o `/r/` genérico usado por muitos dicionários por simplicidade de digitação

A transcrição usada é **fonêmica** (entre barras `/ /`), representando categorias de som relevantes para diferenciar palavras — não uma transcrição fonética detalhada de cada realização possível.

**Fontes de referência para a convenção adotada:** padrões de fonética do inglês americano (General American) usados em materiais como americanipachart.com e easypronunciation.com/en/american-english-pronunciation-ipa-chart. Este é um projeto independente, sem afiliação com nenhum curso, canal ou professor específico.

---

## Estrutura de arquivos

```
ipa-sound-trainer/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── sounds-data.js      # Dados fonéticos (vogais, ditongos, consoantes)
│   ├── app.js                # Renderização da grade de referência
│   └── game.js                # Lógica do jogo de treino
├── assets/
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
├── manifest.json
├── sw.js
└── README.md
```

---

## Sobre o áudio

O áudio usado neste projeto é gerado pela **API nativa de síntese de voz do navegador** (`speechSynthesis` / Web Speech API), não por gravações humanas.

Implicações importantes:
- A voz e o sotaque exato variam conforme o navegador e o sistema operacional do usuário
- Alguns dispositivos podem não ter uma voz de inglês americano disponível, retornando outra variante
- A síntese de voz produz palavras completas — não é uma referência controlada para fonemas isolados, e não deve ser tratada como fonte definitiva de pronúncia
- Para pronúncia de referência mais confiável, recomenda-se complementar com dicionários de pronúncia ou gravações de falantes nativos

---

## Limitações conhecidas

- Este é um material **introdutório**, não uma referência exaustiva de fonética
- Não cobre alofones, variações regionais dentro dos EUA, nem todos os sistemas de transcrição em uso
- As aproximações em português são apenas pontos de partida e podem reforçar hábitos de pronúncia do português se usadas como única referência
- O jogo valida respostas contra uma lista de palavras cadastradas; uma palavra foneticamente correta mas fora da lista pode não ser reconhecida no modo de digitação (o modo de múltipla escolha não tem essa limitação)

---

## Como instalar como PWA

1. Abra o link gerado no Chrome do celular
2. Menu (⋮) → "Adicionar à tela inicial"
3. O app abre em tela cheia, com ícone próprio, funcionando offline depois do primeiro carregamento

---

## Licença e uso

Dados fonéticos, textos explicativos e código são conteúdo original deste projeto. Ícones gerados internamente. Fontes tipográficas via Google Fonts (Fraunces, Source Sans 3, JetBrains Mono), sob suas respectivas licenças abertas.
