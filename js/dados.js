/* ==========================================================
   by.b — dados
   ========================================================== */

const PROJETOS = [
  {
    id: 'chapa',
    marca: 'Chapa &amp; Forno',
    tipo: 'Hamburgueria e pizzaria',
    titulo: 'Cardápio digital com pedido e pagamento',
    desc: 'Site completo com 27 itens, filtro por categoria, busca, carrinho que não se perde ao navegar e finalização com PIX, cartão ou dinheiro. Inclui a página que abre na placa NFC da mesa.',
    paleta: ['#17120F', '#E8501F', '#F2B233', '#B8241C', '#F5EBDC'],
    fundo: '#17120F', corTexto: '#F5EBDC',
    etiquetas: ['7 páginas', 'Carrinho', 'Checkout', 'Página NFC'],
    link: 'https://chapaeforno.byb.dev.br'
  },
  {
    id: 'aurora',
    marca: 'Clínica Aurora',
    tipo: 'Odontologia',
    titulo: 'Agendamento online e tabela de preços aberta',
    desc: 'Oito páginas com 12 tratamentos, equipe, planos de manutenção e agendamento com grade de horários. A abertura traz um arco dentário interativo desenhado em código, não uma imagem.',
    paleta: ['#FBFAF7', '#1C2B2D', '#2E6E6B', '#A8D5CE', '#C9A961'],
    fundo: '#1C2B2D', corTexto: '#FBFAF7',
    etiquetas: ['8 páginas', 'Agendamento', 'Arco interativo', 'FAQ'],
    link: 'https://clinica.byb.dev.br'
  },
  {
    id: 'jabuticaba',
    marca: 'Jabuticaba',
    tipo: 'Sorveteria artesanal',
    titulo: 'Montador de pote com preço ao vivo',
    desc: 'Vinte e quatro sabores, cada um com sua cor real. O cliente escolhe tamanho e sabores, o pote se desenha na tela e o preço é recalculado na hora. O limite de bolas é respeitado automaticamente.',
    paleta: ['#2E1437', '#8FC93A', '#E8447C', '#FFC93C', '#FFF8EE'],
    fundo: '#2E1437', corTexto: '#FFF8EE',
    etiquetas: ['8 páginas', 'Montador', 'Preço ao vivo', '3 unidades'],
    link: 'https://jabuticaba.byb.dev.br'
  },
  {
    id: 'fio',
    marca: 'Barbearia Fio',
    tipo: 'Barbearia',
    titulo: 'Agenda por barbeiro e guia visual de cortes',
    desc: 'O cliente escolhe o barbeiro, o serviço e o horário, com o resumo atualizando em tempo real. Inclui um guia com oito cortes desenhados, para quem não sabe o nome do que quer pedir.',
    paleta: ['#221A17', '#B5462F', '#C2955A', '#2C5F8A', '#F0EAE1'],
    fundo: '#221A17', corTexto: '#F0EAE1',
    etiquetas: ['8 páginas', 'Agendamento', 'Guia de estilos', 'Poste animado'],
    link: 'https://barbearia.byb.dev.br'
  }
];

const SERVICOS = [
  { n: '01', nome: 'Site completo',
    desc: 'Várias páginas, construído especificamente para o seu negócio. Não é template com a cor trocada: a identidade vem do que você faz.' },
  { n: '02', nome: 'Cardápio digital',
    desc: 'Abre por QR Code ou por aproximação NFC. Você atualiza preços e itens quando quiser, sem precisar imprimir nada novamente.' },
  { n: '03', nome: 'Placa NFC impressa em 3D',
    desc: 'Feita por nós, na medida do seu balcão. O cliente aproxima o celular e é levado direto à avaliação do Google, ao seu Instagram ou ao cardápio.' },
  { n: '04', nome: 'WhatsApp configurado',
    desc: 'Mensagem automática de saudação, resposta fora do horário e atalhos prontos. O botão do site abre a conversa com o pedido já preenchido.' },
  { n: '05', nome: 'Hospedagem incluída',
    desc: 'Seu site no ar sem mensalidade de servidor. Você paga apenas o endereço, uma vez por ano.' },
  { n: '06', nome: 'Manutenção mensal',
    desc: 'Trocar preços, adicionar itens, mudar fotos e ajustar horários. Você chama no WhatsApp e resolvemos no mesmo dia.' }
];

const PACOTES = [
  {
    fita: 'Entrada',
    nome: 'Básico',
    valor: 'R$ 350',
    obs: 'A partir de, pagamento único',
    itens: [
      'Cardápio digital de uma página',
      'Abre por QR Code e por NFC',
      'Duas placas NFC impressas em 3D',
      'Hospedagem incluída',
      'Uma rodada de ajustes'
    ],
    destaque: false
  },
  {
    fita: 'Mais escolhido',
    nome: 'Completo',
    valor: 'R$ 950',
    obs: 'A partir de, ou 3× sem juros',
    itens: [
      'Site completo com várias páginas',
      'Cardápio digital com busca e filtro',
      'Quatro placas NFC impressas em 3D',
      'Placa de avaliação do Google',
      'WhatsApp configurado e ligado ao site',
      'Hospedagem incluída',
      'Três rodadas de ajustes'
    ],
    destaque: true
  },
  {
    fita: 'Projeto próprio',
    nome: 'Sob medida',
    valor: 'Sob consulta',
    obs: 'Orçamento fechado após a conversa',
    itens: [
      'Para quem precisa de algo específico',
      'Sistema de pedido com fluxo próprio',
      'Mais de uma unidade ou filial',
      'Integração com ferramenta que você já usa',
      'Quantidade de placas conforme o espaço',
      'Rodadas de ajuste combinadas no escopo'
    ],
    destaque: false,
    semPreco: true
  }
];

const PROCESSO = [
  { n: '01', titulo: 'Conversa',
    desc: 'Vamos até você, observamos o negócio em funcionamento e fazemos uma pergunta central: qual é a dúvida que mais aparece antes de o cliente comprar. É ela que o site precisa responder.' },
  { n: '02', titulo: 'Proposta por escrito',
    desc: 'Em até dois dias você recebe o escopo do que será feito, o prazo e o valor fechado. Sem letras miúdas e sem reajuste posterior.' },
  { n: '03', titulo: 'Construção',
    desc: 'Entre uma e três semanas, conforme o tamanho do projeto. Enviamos prévias durante o processo para você acompanhar, não apenas ao final.' },
  { n: '04', titulo: 'Ajustes',
    desc: 'Você aponta o que deseja diferente e nós alteramos. As rodadas de ajuste já estão incluídas no preço — não cobramos por mudança de ideia.' },
  { n: '05', titulo: 'No ar',
    desc: 'Colocamos o site no ar, entregamos as placas NFC e configuramos o WhatsApp. Também ensinamos a atualizar o que você pode alterar por conta própria.' }
];

const PERGUNTAS = [
  { p: 'Vocês têm 15 anos. Por que eu contrataria vocês?',
    r: 'Porque o trabalho fala por si: os projetos deste site estão no ar e você pode abrir e testar cada um agora. E porque somos da cidade — você manda uma mensagem e tem resposta no mesmo dia, com o site atualizado na mesma tarde. Serviços de assinatura com suporte em outro estado não conseguem isso. Se ainda assim houver receio, comece pelo pacote de entrada e avalie nosso trabalho antes de investir mais.' },
  { p: 'Quanto tempo demora?',
    r: 'Um cardápio simples fica pronto em até uma semana. Um site completo leva de duas a três semanas, dependendo de quanto conteúdo e quantas fotos você já tem em mãos. Com textos e imagens prontos, o prazo diminui.' },
  { p: 'Tem mensalidade obrigatória?',
    r: 'Não. Os pacotes Cardápio e Completo são de pagamento único e o site passa a ser seu. A manutenção mensal é opcional e existe para quem prefere não mexer em nada. Se você quiser atualizar por conta própria, ensinamos como fazer.' },
  { p: 'E a hospedagem, tem custo?',
    r: 'A hospedagem é gratuita e está incluída. O único custo recorrente é o endereço do site, como seunegocio.com.br, que custa cerca de R$ 40 por ano e é pago diretamente ao Registro.br, em seu nome. Não atuamos como intermediários nesse pagamento.' },
  { p: 'O site é meu mesmo?',
    r: 'Sim. O domínio fica registrado no seu nome, os arquivos são seus e entregamos tudo ao final. Se um dia você quiser que outra pessoa assuma a manutenção, pode levar sem restrição alguma.' },
  { p: 'Como funciona a placa NFC?',
    r: 'É uma peça pequena, modelada e impressa em 3D por nós, com um chip dentro. O cliente aproxima o celular e abre na hora o link que você escolher: a avaliação do Google, o Instagram ou o cardápio. Não é preciso instalar aplicativo, e funciona em qualquer celular com NFC — hoje, a grande maioria.' },
  { p: 'Vocês fazem para outros ramos além de alimentação?',
    r: 'Sim. Já desenvolvemos para clínica odontológica, oficina mecânica e barbearia. O que muda de um ramo para outro não é a parte técnica, mas entender qual é a objeção do cliente daquele setor e escrever o site a partir dela.' },
  { p: 'E se eu não gostar do resultado?',
    r: 'As rodadas de ajuste estão incluídas no preço justamente por isso. Se depois delas você ainda achar que não ficou bom, a gente devolve o valor. Preferimos isso a ter um trabalho ruim no portfólio com nosso nome.' }
];


const DUPLA = [
  {
    apelido: 'by.sevas',
    nome: 'Bruno Severino',
    papel: 'Desenvolvimento, design e atendimento',
    faz: [
      'Constrói os sites',
      'Define a identidade visual de cada projeto',
      'Primeiro contato e atendimento ao cliente',
      'Imprime as placas NFC',
      'Acompanha a entrega e os ajustes'
    ]
  },
  {
    apelido: 'by.ribeiro',
    nome: 'Bruno Ribeiro',
    papel: 'Desenvolvimento, modelagem 3D e testes',
    faz: [
      'Constrói os sites',
      'Modela as placas NFC em 3D',
      'Levanta o que cada negócio precisa',
      'Testa tudo antes de entregar',
      'Acompanha a entrega e os ajustes'
    ]
  }
];
