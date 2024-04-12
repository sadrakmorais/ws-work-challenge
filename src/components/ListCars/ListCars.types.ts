export type Car = {
  id: number;
  timestamp_cadastro: number;
  modelo_id: number;
  ano: number;
  combustivel: string;
  num_portas: number;
  cor: string;
  nome_modelo: string;
  valor: string;
  brand?: number;
};

export type Brand = {
  id: number;
  brand_name: string;
};
