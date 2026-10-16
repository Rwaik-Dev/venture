import type { CompanyStat, ValuePillar } from "@/types";
import { localImages } from "@/data/images";

export const companyStats: CompanyStat[] = [
  {
    id: "fleet",
    title: "Frota",
    icon: "fleet",
    description:
      "Ônibus modernos com tecnologia para segurança e conforto, reduzindo custos operacionais e melhorando a experiência do passageiro.",
  },
  {
    id: "offices",
    title: "Sedes",
    icon: "offices",
    description:
      "35 sedes em todo o Brasil — Nordeste, Sudeste, Sul e Centro-Oeste — próximas das necessidades de quem viaja conosco.",
  },
  {
    id: "investment",
    title: "Investimentos",
    icon: "investment",
    description:
      "Ampliação da frota, processos mais eficientes e melhores condições para colaboradores, elevando a qualidade do serviço.",
  },
  {
    id: "people",
    title: "Colaboradores",
    icon: "people",
    description:
      "Nosso maior patrimônio: ambiente seguro e motivador para desenvolver habilidades e entregar o melhor resultado.",
  },
];

export const valuePillars: ValuePillar[] = [
  {
    id: "mission",
    title: "Missão",
    image: localImages.values.mission,
    imageAlt: "Ilustração da missão Venture",
    description:
      "Oferecer transporte seguro, ágil e acessível, conectando pessoas e destinos com tecnologia e cuidado com quem viaja e trabalha conosco.",
  },
  {
    id: "vision",
    title: "Visão",
    image: localImages.values.vision,
    imageAlt: "Ilustração da visão Venture",
    description:
      "Ser a referência em transporte de passageiros no país, com excelência operacional e responsabilidade socioambiental.",
  },
  {
    id: "values",
    title: "Valores",
    image: localImages.values.values,
    imageAlt: "Ilustração dos valores Venture",
    description:
      "Segurança em primeiro lugar, preços justos, respeito ao meio ambiente e trabalho em equipe para realizar os sonhos de quem depende de nós.",
  },
];

export const aboutStory = [
  {
    title: "Fundação",
    text: "Fundada em 10 de janeiro de 1980, a Venture nasceu para oferecer transporte seguro, confiável e acessível em todo o país.",
  },
  {
    title: "Expansão",
    text: "Na década de 80, expandimos para vários estados. Em 1990, já contávamos com mais de cem veículos atendendo a maioria dos bairros das cidades onde atuávamos.",
  },
  {
    title: "Hoje",
    text: "Somos mais de quinhentos veículos, com apps para o passageiro, pagamento digital e o programa social “Crianças na Estrada”, com descontos para estudantes e idosos.",
  },
];
