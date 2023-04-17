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

export const getProductById = async (id: number) => {
  const request = await axios.get(`http://localhost:13700/produtos/${id}`);

  return request.data;
};

export const createProduct = (product: any) => {
  axios.post('http://localhost:13700/produtos/', product);
};

export const getUsersCart = async () => {
  const request = await axios.get('http://localhost:13700/carrinhos');

  return request.data;
};

export const deleteCartProduct = async (id: number) => {
  const request = await axios.delete(`http://localhost:13700/carrinhos/${id}`);

  return request.data;
};

export const addToCart = async (id_produto: number, id_usuario: number) => {
  const request = await axios.post('http://localhost:13700/carrinhos', {
    id_produto,
    id_usuario,
  });
};
