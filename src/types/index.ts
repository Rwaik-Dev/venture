export interface NewsItem {
  id: number;
  img: string;
  title: string;
  summary: string;
  body: string;
}

export interface Testimonial {
  id: number;
  gender: "feminino" | "masculino";
  name: string;
  daysAsCustomer: number;
  comment: string;
}

export interface CompanyStat {
  id: string;
  title: string;
  description: string;
  icon: "fleet" | "offices" | "investment" | "people";
}

export interface ValuePillar {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ComplaintFormData {
  nome: string;
  sobrenome: string;
  email: string;
  numeroOnibus: string;
  linha: string;
  message: string;
}

export type BusLine = "Linha 1" | "Linha 2" | "Linha 3" | "Linha 4";
