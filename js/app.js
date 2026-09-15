/* ==========================================================
   by.b — comportamento
   ========================================================== */

/* ---------- Menu ---------- */

function montarMenu() {
  const botao = document.querySelector('.btn-menu');
  const nav = document.querySelector('.nav');

  if (botao && nav) {
    function abrir(sim) {
      nav.classList.toggle('aberta', sim);
      botao.setAttribute('aria-expanded', String(sim));
      botao.setAttribute('aria-label', sim ? 'Fechar menu' : 'Abrir menu');
      document.body.classList.toggle('menu-aberto', sim);
    }

    botao.addEventListener('click', () => {
      abrir(botao.getAttribute('aria-expanded') !== 'true');
    });

    // clicar num link fecha
    nav.addEventListener('click', e => {
      if (e.target.closest('a')) abrir(false);
    });

    // Esc fecha
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && botao.getAttribute('aria-expanded') === 'true') {
        abrir(false);
        botao.focus();
      }
    });

    // voltar pro desktop fecha
    window.matchMedia('(min-width: 721px)').addEventListener('change', ev => {
      if (ev.matches) abrir(false);
    });
  }

  const topo = document.querySelector('.topo');
  if (topo) {
    const aoRolar = () => topo.classList.toggle('rolou', window.scrollY > 12);
    window.addEventListener('scroll', aoRolar, { passive: true });
    aoRolar();
  }
}

/* ---------- Revelacao ao rolar ---------- */

function montarRevelacao() {
  const alvos = document.querySelectorAll('.revela');
  if (!alvos.length) return;

  if (!('IntersectionObserver' in window)) {
    alvos.forEach(el => el.classList.add('visivel'));
    return;
  }

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visivel');
        observador.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  alvos.forEach(el => observador.observe(el));
}

/* ---------- Contadores ---------- */

function montarContadores() {
  const alvos = document.querySelectorAll('[data-conta]');
  if (!alvos.length || !('IntersectionObserver' in window)) {
    alvos.forEach(el => { el.textContent = el.dataset.conta; });
    return;
  }

  const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      observador.unobserve(el);

      const alvo = parseInt(el.dataset.conta, 10);
      const sufixo = el.dataset.sufixo || '';

      if (reduzido || isNaN(alvo)) {
        el.textContent = alvo + sufixo;
        return;
      }

      const duracao = 1100;
      const inicio = performance.now();

      function passo(agora) {
        const p = Math.min((agora - inicio) / duracao, 1);
        const suave = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(alvo * suave) + sufixo;
        if (p < 1) requestAnimationFrame(passo);
      }
      requestAnimationFrame(passo);
    });
  }, { threshold: 0.5 });

  alvos.forEach(el => observador.observe(el));
}

/* ---------- Projetos ---------- */

function cartaoProjeto(p, i) {
  return `
    <a class="projeto revela revela-${(i % 3) + 1}" href="${p.link}"
       target="_blank" rel="noopener">
      <div class="projeto-grade">
        <div class="projeto-visual" style="background:${p.fundo}">
          <div class="paleta-mini" aria-hidden="true">
            ${p.paleta.map(c => `<span style="background:${c}"></span>`).join('')}
          </div>
          <div class="projeto-marca" style="color:${p.corTexto}">${p.marca}</div>
        </div>
        <div class="projeto-corpo">
          <div class="projeto-tipo">${p.tipo}</div>
          <h3>${p.titulo}</h3>
          <p>${p.desc}</p>
          <div class="pontos-paleta" aria-hidden="true">
            ${p.paleta.map(c => `<span style="background:${c}"></span>`).join('')}
          </div>
          <div class="etiquetas">
            ${p.etiquetas.map(t => `<span class="etiqueta">${t}</span>`).join('')}
          </div>
          <div class="projeto-links">
            <span class="ver">Abrir o site <span class="seta">&rarr;</span></span>
          </div>
        </div>
      </div>
    </a>`;
}

function montarProjetos(seletor, quantos) {
  const alvo = document.querySelector(seletor);
  if (!alvo) return;
  const lista = quantos ? PROJETOS.slice(0, quantos) : PROJETOS;
  alvo.innerHTML = lista.map(cartaoProjeto).join('');
}

/* ---------- Servicos ---------- */

function montarServicos() {
  const alvo = document.querySelector('#lista-servicos');
  if (!alvo) return;
  alvo.innerHTML = SERVICOS.map((s, i) => `
    <article class="servico revela revela-${(i % 4) + 1}" id="s-${s.n}">
      <div class="num">${s.n}</div>
      <h3>${s.nome}</h3>
      <p>${s.desc}</p>
    </article>`).join('');
}

/* ---------- A dupla ---------- */

function montarDupla() {
  const alvo = document.querySelector('#grade-dupla');
  if (!alvo) return;
  alvo.innerHTML = DUPLA.map((p, i) => `
    <article class="pessoa revela revela-${i + 1}">
      <div class="apelido">${p.apelido}</div>
      <h3>${p.nome}</h3>
      <div class="papel">${p.papel}</div>
      <ul class="faz">
        ${p.faz.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </article>`).join('');
}

/* ---------- Pacotes ---------- */

function montarPacotes() {
  const alvo = document.querySelector('#grade-pacotes');
  if (!alvo) return;
  alvo.innerHTML = PACOTES.map((p, i) => `
    <article class="pacote ${p.destaque ? 'destaque' : ''} ${p.semPreco ? 'sem-preco' : ''} revela revela-${i + 1}">
      <div class="fita">${p.fita}</div>
      <h3>${p.nome}</h3>
      <div class="valor">${p.valor}</div>
      <div class="obs">${p.obs}</div>
      <ul class="lista-check">
        ${p.itens.map(t => `<li>${t}</li>`).join('')}
      </ul>
      <a class="btn ${p.destaque ? 'btn-claro' : 'btn-contorno'}" href="contato.html">
        ${p.semPreco ? 'Conversar sobre o projeto' : 'Pedir orçamento'}
      </a>
    </article>`).join('');
}

/* ---------- Processo ---------- */

function montarProcesso() {
  const alvo = document.querySelector('#trilha-processo');
  if (!alvo) return;
  alvo.innerHTML = PROCESSO.map((e, i) => `
    <div class="etapa revela revela-${(i % 4) + 1}">
      <div class="num">${e.n}</div>
      <div>
        <h3>${e.titulo}</h3>
        <p>${e.desc}</p>
      </div>
    </div>`).join('');
}

/* ---------- FAQ ---------- */

function montarFaq() {
  const alvo = document.querySelector('#lista-faq');
  if (!alvo) return;

  alvo.innerHTML = PERGUNTAS.map((q, i) => `
    <div class="acordeao revela">
      <button class="acordeao-botao" aria-expanded="false" aria-controls="faq-${i}">${q.p}</button>
      <div class="acordeao-corpo" id="faq-${i}"><div><p>${q.r}</p></div></div>
    </div>`).join('');

  alvo.addEventListener('click', e => {
    const botao = e.target.closest('.acordeao-botao');
    if (!botao) return;
    const aberto = botao.getAttribute('aria-expanded') === 'true';
    alvo.querySelectorAll('.acordeao-botao').forEach(b => b.setAttribute('aria-expanded', 'false'));
    botao.setAttribute('aria-expanded', String(!aberto));
  });
}

/* ---------- Formulario ---------- */

function avisar(texto) {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    document.body.appendChild(el);
  }
  el.textContent = texto;
  requestAnimationFrame(() => el.classList.add('aparece'));
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('aparece'), 2600);
}

function montarSeletor() {
  const caixa = document.querySelector('#seletor-interesse');
  if (!caixa) return;

  const gatilho = caixa.querySelector('.seletor-gatilho');
  const valor   = caixa.querySelector('.seletor-valor');
  const opcoes  = caixa.querySelector('.seletor-opcoes');

  function abrir(sim) {
    gatilho.setAttribute('aria-expanded', String(sim));
    opcoes.hidden = !sim;
  }

  gatilho.addEventListener('click', () => {
    abrir(gatilho.getAttribute('aria-expanded') !== 'true');
  });

  // escolher fecha e mostra o escolhido
  opcoes.addEventListener('change', e => {
    if (e.target.name !== 'interesse') return;
    valor.textContent = e.target.value;
    abrir(false);
    gatilho.focus();
  });

  // clicar fora fecha
  document.addEventListener('click', e => {
    if (!caixa.contains(e.target)) abrir(false);
  });

  // Esc fecha
  caixa.addEventListener('keydown', e => {
    if (e.key === 'Escape') { abrir(false); gatilho.focus(); }
  });
}

function montarFormulario() {
  const form = document.querySelector('#form-contato');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const botao = form.querySelector('button[type="submit"]');
    const textoOriginal = botao.innerHTML;
    botao.disabled = true;
    botao.textContent = 'Enviando...';

    const dados = new FormData(form);
    const nome = (dados.get('nome') || '').trim().split(' ')[0] || 'você';

    try {
      const resposta = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: dados
      });
      const json = await resposta.json();

      if (json.success) {
        mostrarConfirmacao(nome, dados);
      } else {
        throw new Error(json.message || 'falhou');
      }
    } catch (erro) {
      botao.disabled = false;
      botao.innerHTML = textoOriginal;
      oferecerWhatsapp(dados);
    }
  });
}

/* Se o envio falhar, leva a conversa para o WhatsApp em vez de perder o contato. */
function oferecerWhatsapp(dados) {
  const linhas = [
    'Oi! Mandei pelo site mas parece que não foi.',
    '',
    'Nome: ' + (dados.get('nome') || ''),
    dados.get('negocio') ? 'Negócio: ' + dados.get('negocio') : '',
    dados.get('interesse') ? 'Interesse: ' + dados.get('interesse') : '',
    dados.get('mensagem') ? '' : '',
    dados.get('mensagem') || ''
  ].filter(l => l !== '' || true);

  const texto = encodeURIComponent(linhas.filter(Boolean).join('\n'));
  avisar('Não deu para enviar. Abrindo o WhatsApp...');
  setTimeout(() => {
    window.open('https://wa.me/5537999071654?text=' + texto, '_blank', 'noopener');
  }, 900);
}

function mostrarConfirmacao(nome, dados) {
  const zap = 'https://wa.me/5537999071654';
  const resumo = [
    dados.get('negocio') ? `Negócio: ${dados.get('negocio')}` : '',
    dados.get('interesse') ? `Interesse: ${dados.get('interesse')}` : ''
  ].filter(Boolean).join(' · ');

  document.querySelector('#area-contato').innerHTML = `
    <section class="confirmacao">
      <div class="painel">
        <div class="marca-ok">Recebido</div>
        <p>Obrigado, ${nome}. Respondemos no WhatsApp em até um dia útil,
           normalmente bem antes disso.</p>
        ${resumo ? `<p style="font-size:.9rem;color:var(--giz-4)">${resumo}</p>` : ''}
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:24px">
          <a class="btn btn-zap" href="${zap}" target="_blank" rel="noopener">
            Chamar no WhatsApp
          </a>
          <a class="btn btn-contorno" href="index.html">Voltar ao início</a>
        </div>
      </div>
    </section>`;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- Destaque ao chegar por link ---------- */

function destacarAlvo() {
  const parametro = new URLSearchParams(window.location.search).get('s');
  if (!parametro) return;

  const alvo = document.getElementById('s-' + parametro);
  const lista = document.querySelector('.lista-servicos');
  if (!alvo || !lista) return;

  const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // a pagina abre no topo; so depois a gente leva ate o item
  window.scrollTo({ top: 0 });

  setTimeout(() => {
    alvo.classList.add('visivel');
    alvo.scrollIntoView({ behavior: reduzido ? 'auto' : 'smooth', block: 'center' });

    setTimeout(() => {
      lista.classList.add('focando');
      alvo.classList.add('destacado');

      setTimeout(() => {
        lista.classList.remove('focando');
        alvo.classList.remove('destacado');
      }, 1500);
    }, reduzido ? 0 : 330);
  }, 120);
}

/* ---------- Revelacao por palavra ---------- */

function montarFrase() {
  const alvos = document.querySelectorAll('.frase');
  if (!alvos.length) return;

  const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  alvos.forEach(el => {
    const bruto = el.innerHTML;
    // separa por palavra preservando as tags <em>
    const pedacos = bruto.split(/(<[^>]+>)/);
    let atraso = 0;
    let saida = '';

    pedacos.forEach(pedaco => {
      if (pedaco.startsWith('<')) { saida += pedaco; return; }
      pedaco.split(/(\s+)/).forEach(parte => {
        if (!parte.trim()) { saida += parte; return; }
        const d = reduzido ? 0 : atraso;
        saida += `<span class="palavra"><span style="animation-delay:${d}s">${parte}</span></span>`;
        atraso += 0.055;
      });
    });

    el.innerHTML = saida;
  });
}

/* ---------- Inicia ---------- */

document.addEventListener('DOMContentLoaded', () => {
  montarMenu();
  montarFrase();
  montarProjetos('#projetos-home', 2);
  montarProjetos('#projetos-todos');
  montarServicos();
  montarDupla();
  montarPacotes();
  montarProcesso();
  montarFaq();
  montarSeletor();
  montarFormulario();
  montarContadores();
  montarRevelacao();
  destacarAlvo();
});
