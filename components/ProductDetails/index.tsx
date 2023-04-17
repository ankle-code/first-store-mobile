import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { getProductById, addToCart } from '../../api';
import Loading from '../Loading';

type ProductDetailsProps = {
  id: number;
  onExit: () => void;
};

type ProductDetailsResponse = {
  alterado_em: string;
  ativo: boolean;
  criado_em: string;
  descricao_produto: string;
  descricao_tipo_produto: string;
  id: number;
  nome_produto: string;
  nome_usuario: string;
  preco: string;
  quantidade: number;
  raiting: number;
};

const ProductDetails = ({ id, onExit }: ProductDetailsProps) => {
  const [data, setData] = useState<ProductDetailsResponse | null>(null);

  const getProductDetails = async () => {
    const response = await getProductById(id);
    setData(response);
  };

  if (!data) {
    getProductDetails();
    return <Loading />;
  }

  console.log(data, 'Detalhes do produto');

  return (
    <View>
      <Text style={styles.title}>Detalhes do Produto</Text>
      <View>
        <Text style={[styles.title, styles.productTitle]}>
          {data.nome_produto}
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/cyberpunk.jpeg')}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text>{data.descricao_produto}</Text>
          <View style={styles.amountDescription}>
            <Text>Quantidade disponível: {data.quantidade}</Text>
            <Text style={styles.priceText}>Preço: {data.preco}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onExit}>
          <Text>Ver todos os Produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buyButton]}
          onPress={() => addToCart(id, 1)}
        >
          <Text style={styles.textBuyButton}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: '80%',
    height: 200,
    borderRadius: 15,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    margin: 20,
  },
  productTitle: {
    color: '#c9240a',
    fontSize: 32,
  },
  descriptionContainer: {
    backgroundColor: '#d9d8d4',
    padding: 20,
    margin: 20,
    borderRadius: 4,
  },
  amountDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
    paddingLeft: 10,
  },
  priceText: {
    backgroundColor: '#c9240a',
    padding: 10,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  button: {
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
  },
  buyButton: {
    backgroundColor: '#c9240a',
  },
  textBuyButton: {
    color: 'white',
    fontSize: 20,
  },
});
