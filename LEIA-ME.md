# by.b

Site do estúdio. HTML, CSS e JavaScript puros — sem framework, sem build.

## Como rodar

Abre a pasta no VS Code → botão direito no `index.html` → **Open with Live Server**.

## As 5 páginas

| Página | O que tem |
|---|---|
| `index.html` | Assinatura animada, contadores, prévia de 2 projetos, serviços |
| `projetos.html` | Os 3 projetos completos com paleta de cada um |
| `servicos.html` | 6 serviços, 3 pacotes com preço, processo em 5 etapas, FAQ |
| `sobre.html` | Quem são vocês, a dupla e "o que não fazemos" |
| `contato.html` | Formulário de orçamento |

---

## As decisões de design

**O site é monocromático de propósito.** Fundo quase preto, texto off-white,
zero cor decorativa. A cor aparece só nos cards de projeto, usando a paleta real
de cada um. O estúdio é neutro; quem tem cor é o cliente.

**A assinatura do hero se desenha.** É SVG com `stroke-dasharray` animado —
traço por traço, como caneta no papel. Faz sentido porque `by.b` é literalmente
a assinatura que vocês já usam.

**Tipografia:** Instrument Serif no display (com itálico nos destaques) e
Instrument Sans no corpo.

**Animações:** revelação ao rolar via IntersectionObserver, contadores que sobem
ao entrar na tela, faixa corrida. Tudo respeita `prefers-reduced-motion`.

---

## Antes de publicar — o que trocar

### 1. Os links dos projetos

Em `js/dados.js`, cada projeto tem `link: '#'`. Assim que subir os três sites
no Netlify, troca pelos endereços reais:

```js
link: 'https://chapaeforno.byb.dev.br'
```

E em `js/app.js`, dentro de `cartaoProjeto()`, transforma o card em link
envolvendo com `<a href="${p.link}" target="_blank">`.

### 2. Os números da home

Estão em `index.html`, nos atributos `data-conta`. Atualiza conforme entregarem
mais projetos.

### 3. O WhatsApp

O formulário hoje só mostra confirmação na tela. Para receber de verdade sem
backend, troca o `submit` em `js/app.js` por:

```js
const texto = `Olá! Sou ${nome}, do ${negocio}. Preciso de: ${pacote}. ${msg}`;
window.open(`https://wa.me/55379XXXXXXXX?text=${encodeURIComponent(texto)}`);
```

Aí o pedido chega formatado no WhatsApp de vocês.

### 4. Contatos

Procure por `devv.byb@gmail.com` e `byb.dev.br` nos arquivos.

---

## Um aviso sobre o conteúdo

Escrevi o texto assumindo que vocês **entregaram três projetos** — mas eles são
exemplos, não clientes reais ainda.

Isso importa. Se um dono de lanchonete perguntar "quem foi o cliente do
Chapa & Forno?", vocês precisam responder a verdade: que é um projeto de
demonstração, feito para mostrar o que sabem fazer.

Isso não é fraqueza. "Montamos esses três do zero para mostrar nosso trabalho"
é uma resposta boa e honesta. O que destruiria a confiança de vocês seria
deixar ele achar que era cliente real e descobrir depois.

Assim que tiverem o primeiro cliente de verdade, troquem um dos exemplos por ele.
