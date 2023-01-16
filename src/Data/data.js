const date = new Date();
const dia = date.getDate();
const mes = date.getMonth() + 1;
const ano = date.getFullYear();

const fakeDate = dia + "/" + mes + "/" + ano;

export const dataCards = [
  {
    img: "http://www.rodap.com.br/wp-content/uploads/2015/02/Quadrodehorrios.png",
    title: "Tempo de espera elevado",
    materiaCompleta:
      "A Venture está ciente da demora entre cada ônibus e estamos trabalhando para melhorar a qualidade e otimizar o serviço. Estamos comprometidos em oferecer um serviço de qualidade que satisfaça os nossos clientes.Para garantir que os nossos passageiros cheguem ao seu destino de forma pontual, a Venture tem investido tanto tempo quanto recursos para melhorar a qualidade e otimizar o serviço. Estamos investindo em novas tecnologias, melhorando a manutenção dos nossos veículos e desenvolvendo novas soluções para aumentar a eficiência operacional. Incentivamos também os nossos motoristas a seguirem o horário previamente determinado para cada ônibus. Estamos comprometidos em trabalhar para otimizar o serviço de transporte e proporcionar aos nossos passageiros uma viagem segura e confortável. Agradecemos a compreensão e apoio dos nossos clientes. Se você tiver alguma dúvida ou sugestão, por favor, não hesite em contactar-nos. Estamos à disposição para ajudar. Obrigado pela sua preferência. Atenciosamente",
    textInformation:
      "Informativo sobre a demora de 10 minutos entre cada viagem. Saiba mais",
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-thumb.jpg",
    title: "Horarios de Onibus",
    textInformation:
      "A Venture informa que os horários de ônibus serão alterados a partir do próximo dia " +
      fakeDate +
      ". Os usuários devem verificar os novos horários para não perder os ônibus. Aproveite!",
    materiaCompleta:
      "Prezado passageiro, A Venture informa que, a partir do dia " +
      fakeDate +
      ", haverá alterações nos horários de algumas de suas linhas de ônibus. Estas alterações são realizadas de acordo com as necessidades e demandas dos passageiros, visando oferecer um serviço ainda melhor para todos.As linhas que passarão por mudanças nos horários são:- Linha 1: Passará a sair às 6h30 e chegar às 21h. - Linha 2: Os ônibus sairão às 7h e chegarão às 22h. - Linha 3: Os ônibus passarão a sair às 7h30 e chegarão às 22h30. - Linha 4: Os ônibus passarão a sair às 8h e chegarão às 23h. Lembramos que estas alterações entrarão em vigor a partir de " +
      fakeDate +
      ". Aproveitamos para informar que a Venture disponibiliza aos seus passageiros, além dos horários de ônibus, informações a respeito de tarifas, itinerários, entre outros.Agradecemos a sua preferência e esperamos que continuemos a servi-lo da melhor forma possível.Atenciosamente,Venture",
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-thumb.jpg",
    title: "Nossas sedes",
    materiaCompleta:
      "A Venture é uma empresa de transporte público que oferece serviços de transporte para todo o Brasil. A empresa conta com 35 sedes espalhadas por todo o país, incluindo grandes cidades como São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, Brasília, Recife e Porto Alegre.\nA empresa oferece serviços de transporte com ônibus, micro-ônibus, vans e carros, além de serviços de aluguel de veículos para eventos, turismo, transferências e outros. Todos os veículos são equipados com ar-condicionado, wi-fi e outras comodidades para garantir o conforto dos passageiros.\nA Venture Transporte Público também oferece serviços de fretamento para empresas, com tarifas especiais. Os veículos são equipados com sistemas de monitoramento e rastreamento, garantindo segurança e confiabilidade para os passageiros.\nAlém disso, a Venture Transporte Público oferece serviços de manutenção para garantir que os veículos estejam sempre em plenas condições de uso. Os serviços incluem revisão, substituição de peças, lubrificação, troca de óleo e outros serviços de manutenção.\nA Venture tem como compromisso oferecer serviços de transporte de qualidade, seguros e confiáveis para todos os seus passageiros e clientes.",
    textInformation:
      "A Venture Transporte conta com 35 sedes espalhadas pelo Brasil. Elas estão localizadas nos estados de São Paulo, Rio de Janeiro, Minas Gerais, Paraná, Bahia, Goiás, Santa Catarina e muitas outras. Confira aqui",
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-thumb.jpg",
    title: "Reajuste da passagem",
    textInformation:
      "A Venture acaba de anunciar um aumento na tarifa de ônibus, que passará de R$3,00 para R$3,35. Saiba mais",
    materiaCompleta:
      "A Venture acaba de anunciar um aumento na tarifa de ônibus, que passará de R$3,00 para R$3,35.\n O aumento visa a melhorar o serviço de transporte oferecido pela empresa, garantindo maior segurança e conforto aos usuários.\n Com a tarifa aumentada, será possível realizar melhorias na frota de ônibus como: instalação de câmeras de segurança, aquisição de veículos mais modernos e ampliação de itinerários.\n Além disso, a Venture também está trabalhando para garantir aos usuários serviços como acesso à internet, wifi gratuito, ar-condicionado e tomadas para carregar dispositivos eletrônicos.\n Com o objetivo de melhorar a qualidade do serviço e oferecer mais comodidade aos passageiros, a Venture acredita que o aumento da tarifa vale a pena.\n A nova tarifa entrará em vigor a partir do dia 8 de julho. Esperamos que os usuários possam desfrutar dos benefícios de uma melhor experiência de viagem.",
  },
];

export const endereçoSedes = [
  {
    endereco: "Rua Gomes Carneiro, 24, Rio de Janeiro, RJ",
    cep: "20020-140",
  },
  {
    endereco: "Avenida Paulista, 1785, São Paulo, SP",
    cep: "01415-001",
  },
  {
    endereco: "Rua Dr. Alexandre Rossi, 551, Curitiba, PR",
    cep: "80420-580",
  },
  {
    endereco: "Rua Professor João Soares, 249, Porto Alegre, RS",
    cep: "90420-150",
  },
  {
    endereco: "Rua da Palha, 1144, Salvador, BA",
    cep: "40250-070",
  },
  {
    endereco: "Rua Desembargador Mota, 34, Recife, PE",
    cep: "50050-360",
  },
  {
    endereco: "Rua do Comércio, 1541, Belo Horizonte, MG",
    cep: "30190-001",
  },
  {
    endereco: "Rua 15 de Novembro, 990, Goiânia, GO",
    cep: "74230-320",
  },
  {
    endereco: "Rua Antonio de Godoi, 1625, Florianópolis, SC",
    cep: "88025-320",
  },
  {
    endereco: "Rua Padre Valdevino, 1389, São Luís, MA",
    cep: "65090-650",
  },
  {
    endereco: "Avenida do Contorno, 1150, Fortaleza, CE",
    cep: "60811-040",
  },
  {
    endereco: "Rua das Acácias, 1177, Teresina, PI",
    cep: "64010-280",
  },
  {
    endereco: "Rua Vereador Faria Lima, 867, Campinas, SP",
    cep: "13020-400",
  },
  {
    endereco: "Rua José Alencar, 1122, Natal, RN",
    cep: "59022-080",
  },
  {
    endereco: "Rua do Rodeio, 1625, Belém, PA",
    cep: "66050-100",
  },
  {
    endereco: "Rua Eurico Gaspar Dutra, 1219, Maceió, AL",
    cep: "57051-170",
  },
  {
    endereco: "Rua Ceará, 891, João Pessoa, PB",
    cep: "58010-200",
  },
  {
    endereco: "Rua do Triunfo, 1564, Vitória, ES",
    cep: "29040-150",
  },
  {
    endereco: "Rua dos Alpes, 973, Porto Velho, RO",
    cep: "76801-420",
  },
  {
    endereco: "Rua Wilhelmina Cruz, 1627, Boa Vista, RR",
    cep: "69305-230",
  },
  {
    endereco: "Rua Rio Grande do Norte, 932, Macapá, AP",
    cep: "68900-810",
  },
  {
    endereco: "Rua Visconde de Souza Franco, 1116, Palmas, TO",
    cep: "77015-110",
  },
  {
    endereco: "Rua Professor José de Oliveira, 1717, Cuiabá, MT",
    cep: "78040-262",
  },
  {
    endereco: "Rua Coronel Quirino, 1401, Aracaju, SE",
    cep: "49010-520",
  },
  {
    endereco: "Avenida Santa Catarina, 1431, Campo Grande, MS",
    cep: "79022-180",
  },
  {
    endereco: "Rua Visconde do Rio Branco, 1775, Rio Branco, AC",
    cep: "69900-104",
  },
  {
    endereco: "Rua Pedro I, 1021, São José do Rio Preto, SP",
    cep: "15090-400",
  },
  {
    endereco: "Rua General Glicério, 1222, Campos dos Goytacazes, RJ",
    cep: "28040-040",
  },
  {
    endereco: "Rua Capitão Francisco, 890, Bauru, SP",
    cep: "17018-170",
  },
  {
    endereco: "Rua Doutor João Lúcio, 541, Ribeirão Preto, SP",
    cep: "14082-310",
  },
  {
    endereco: "Rua João Batista, 910, Uberlândia, MG",
    cep: "38400-282",
  },
  {
    endereco: "Rua Professor Vicente Ráo, 675, Curitiba, PR",
    cep: "80620-120",
  },
  {
    endereco: "Rua Itororó, 834, João Pessoa, PB",
    cep: "58063-150",
  },
  {
    endereco: "Rua Presidente Costa e Silva, 1020, Salvador, BA",
    cep: "40220-440",
  },
  {
    endereco: "Rua Maria de Souza, 1076, Teresina, PI",
    cep: "64030-320",
  },
  {
    endereco: "Rua João Barbosa, 1183, Natal, RN",
    cep: "59035-530",
  },
  {
    endereco: "Rua José Bonifácio, 1490, Goiânia, GO",
    cep: "74245-270",
  },
  {
    endereco: "Rua Tenente Francisco de Sales, 902, Fortaleza, CE",
    cep: "60850-560",
  },
];

export const comentario = [
  {
    nome: "Joana Pereira",
    comentario:
      "O Venture Transporte Publico é uma empresa muito segura, confiável e com ótimos serviços. Recomendo",
  },
  {
    nome: "Antonio Almeida",
    comentario:
      "Gostei muito do serviço prestado pelo Venture Transporte Publico, eles são super atenciosos e prestativos.",
  },
  {
    nome: "Miguel Silva",
    comentario:
      "Os motoristas do Venture Transporte Publico são incríveis, sempre atentos e responsáveis.",
  },
  {
    nome: "José Carvalho",
    comentario:
      "Recomendo o Venture Transporte Publico, eles são muito profissionais e competentes.",
  },
  {
    nome: "Rita Martins",
    comentario:
      "Achei o Venture Transporte Publico muito confiável e prestativo. Super recomendo.",
  },
  {
    nome: "Ana Costa",
    comentario:
      "O Venture Transporte Publico é uma empresa muito segura e responsável. Adorei.",
  },
  {
    nome: "Francisco Gomes",
    comentario:
      "Gostei muito da experiência com o Venture Transporte Publico, eles são muito profissionais.",
  },
  {
    nome: "Luísa Reis",
    comentario:
      "O serviço oferecido pelo Venture Transporte Publico é incrível, eles são muito prestativos e atenciosos.",
  },
  {
    nome: "Pedro Costa",
    comentario:
      "O Venture Transporte Publico é muito confiável. Recomendo a todos.",
  },
  {
    nome: "Sandra Pinto",
    comentario:
      "O Venture Transporte Publico oferece ótimos serviços, são muito responsáveis e comprometidos.",
  },
];

export const dataImagesCarrosel = [
  "https://i.pinimg.com/originals/bd/a5/be/bda5be61177acdb5fd46c3219f8b81a0.jpg",
  "https://cdn.stocksnap.io/img-thumbs/960w/passenger-vehicle_06H84R1IBB.jpg",
  "https://www.10wallpaper.com/wallpaper/3840x2160/1803/Astronaut_stars_space_galaxy_4K_HD_3840x2160.jpg",
  "https://static.vecteezy.com/ti/fotos-gratis/p2/1235937-4k-uhd-ilustrado-espaco-triangulos-gratis-foto.jpg",
  "https://wallpaperaccess.com/full/361074.jpg",
];
