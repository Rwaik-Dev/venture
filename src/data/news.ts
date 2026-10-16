import type { NewsItem } from "@/types";
import { localImages } from "@/data/images";

const today = new Date();
const fakeDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

export const newsItems: NewsItem[] = [
  {
    id: 1,
    img: localImages.news.wait,
    title: "Tempo de espera elevado",
    summary:
      "Informativo sobre a demora de 10 minutos entre cada viagem. Saiba mais.",
    body: "A Venture está ciente da demora entre cada ônibus e estamos trabalhando para melhorar a qualidade e otimizar o serviço. Estamos comprometidos em oferecer um serviço de qualidade que satisfaça os nossos clientes. Para garantir que os nossos passageiros cheguem ao seu destino de forma pontual, a Venture tem investido tempo e recursos em novas tecnologias, manutenção da frota e soluções operacionais. Incentivamos nossos motoristas a seguirem o horário determinado. Agradecemos a compreensão e o apoio dos nossos clientes.",
  },
  {
    id: 2,
    img: localImages.news.schedule,
    title: "Horários de ônibus",
    summary: `A Venture informa que os horários serão alterados a partir de ${fakeDate}. Verifique os novos horários.`,
    body: `Prezado passageiro, a Venture informa que, a partir do dia ${fakeDate}, haverá alterações nos horários de algumas linhas. Linha 1: saída às 6h30. Linha 2: saída às 7h. Linha 3: saída às 7h30. Linha 4: saída às 8h. Estas mudanças visam melhor atender a demanda. Consulte também tarifas e itinerários nos canais oficiais.`,
  },
  {
    id: 3,
    img: localImages.news.offices,
    title: "Nossas sedes",
    summary:
      "A Venture conta com 35 sedes pelo Brasil. Confira a presença nacional da empresa.",
    body: "A Venture é uma empresa de transporte público com 35 sedes no país, incluindo São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, Brasília, Recife e Porto Alegre. Oferecemos ônibus, micro-ônibus e vans com ar-condicionado e wi-fi, além de fretamento corporativo e manutenção da frota. Nosso compromisso é transporte seguro, confiável e de qualidade.",
  },
  {
    id: 4,
    img: localImages.news.fare,
    title: "Reajuste da passagem",
    summary:
      "A tarifa passará de R$ 3,00 para R$ 3,35. Saiba o que muda no serviço.",
    body: "A Venture anuncia aumento da tarifa de R$ 3,00 para R$ 3,35, visando melhorias como câmeras de segurança, veículos mais modernos e ampliação de itinerários. Também trabalhamos para manter wi-fi, ar-condicionado e tomadas USB. A nova tarifa entra em vigor a partir da data publicada nos canais oficiais.",
  },
];
