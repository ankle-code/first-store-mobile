import axios from 'axios';

type Products = {
  ativo: boolean;
  caminho_imagem: string;
  criado_em: string;
  descricao_produto: string;
  descricao_tipo_produto: string;
  id: number;
  id_tipo_produto: number;
  id_usuario: number;
  nome_produto: string;
  nome_usuario: string;
  preco: string;
  quantidade: number;
  rating: number;
};

type getProductsResponse = {
  data: Products[];
};

export const getProducts = async (): Promise<getProductsResponse> => {
  const request = await axios.get('http://localhost:13700/produtos');

  return request.data;
};
