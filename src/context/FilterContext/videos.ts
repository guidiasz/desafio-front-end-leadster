export const videos = [
  {
    thumb: '/imgs/videos/chat-gpt-copywriter.webp',
    title: 'O ChatGPT vai automatizar o trabalho do Copywriter?',
    id: 'GZyDCW-F69I',
    tags: ['Marketing Digital', 'Agências'],
    views: 23,
    date: '2023-04-13',
  },
  {
    thumb: '/imgs/videos/tendencias-marketing.webp',
    title: 'Tendências de Marketing para 2024!',
    id: '8EKTUhF7yA8',
    tags: ['Agências', 'Marketing Digital'],
    views: 76,
    date: '2023-02-14',
  },
  {
    thumb: '/imgs/videos/marketing-conversacional.webp',
    title: 'O Marketing Conversacional funciona em todos os segmentos de negócio?',
    id: 'VZoPJxdu20c',
    tags: ['Marketing Digital'],
    views: 54,
    date: '2023-04-24',
  },
  {
    thumb: '/imgs/videos/quanto-investir-em-midia-paga.webp',
    title: 'Quanto investir em Mídia Paga? A pergunta de MILHÕES',
    id: 'GcvZ9dWhRks',
    tags: ['Mídia Paga'],
    views: 32,
    date: '2023-02-06',
  },
  {
    thumb: '/imgs/videos/como-criar-chatbot.webp',
    title: 'Como Criar um Chatbot Grátis em Menos de 10 Minutos com a Leadster',
    id: 'XIBdJjahUkM',
    tags: ['Chatbot'],
    views: 1900,
    date: '2022-09-02',
  },
  {
    thumb: '/imgs/videos/leads-futuro-sem-cookies.webp',
    title: 'Como saber de onde vêm os leads em um futuro sem cookies? ',
    id: 'cywm2tV1BCQ',
    tags: ['Geração de Leads', 'Agências'],
    views: 31,
    date: '2023-03-31',
  },
  {
    thumb: '/imgs/videos/por-que-voce-perde-leads.webp',
    title: 'Por que você perde 60% dos leads usando formulários de contato no site?',
    id: '0gma7MHghnM',
    tags: ['Geração de Leads', 'Marketing Digital'],
    views: 418,
    date: '2023-03-15',
  },
  {
    thumb: '/imgs/videos/o-que-e-a-leadster.webp',
    title: 'O que é a Leadster? Conheça a ferramenta de Marketing Conversacional',
    id: 'ouCGdcnxeu8',
    tags: ['Marketing Digital', 'Geração de Leads', 'Chatbot'],
    views: 140,
    date: '2023-02-16',
  },
  {
    thumb: '/imgs/videos/por-dentro-da-plataforma.webp',
    title: 'Leadster - Demonstração da plataforma de Marketing Conversacional',
    id: '94RY0tD4chE',
    tags: ['Marketing Digital', 'Geração de Leads', 'Chatbot'],
    views: 320,
    date: '2023-03-16',
  },
];

function fillVideoList() {
  for (let i = videos.length; i < 27; i++) {
    videos.push({
      thumb: '/imgs/videos/video-aleatorio.webp',
      title: `Vídeo Aleatório n° ${i - 8}`,
      id: 'kvZxxVLApxw',
      tags: [],
      views: 1,
      date: '2020-01-01',
    });
  }
}

fillVideoList();
