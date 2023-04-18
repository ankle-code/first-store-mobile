import { StyleSheet, View, FlatList, Text } from 'react-native';

import Card from '../../components/Card';
import { getProducts, addToCart } from '../../api';
import { useState } from 'react';
import Loading from '../../components/Loading';
import ProductDetails from '../../components/ProductDetails';

import useCart from '../../hooks/useCart';

const Store = () => {
  const [data, setData] = useState<any>();
  const [selectedProductId, setSelectedProductsId] = useState<number | null>(
    null
  );

  const userCart = useCart();

  const addProductToCart = (id: number) => {
    const produtosToCart = [...userCart, id].join(', ');

    addToCart(produtosToCart, 1);
  };

  const getProductsToStore = async () => {
    const response = await getProducts();
    setData(response);
  };

  const clearSelectedProduct = () => {
    setSelectedProductsId(null);
  };

  if (!data) {
    getProductsToStore();
    return <Loading />;
  }

  if (selectedProductId) {
    return (
      <ProductDetails id={selectedProductId} onExit={clearSelectedProduct} />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha seu jogo favorito:</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <Card
              onPress={setSelectedProductsId}
              onBuy={addProductToCart}
              type="store"
              {...item}
            />
          );
        }}
        keyExtractor={(product) => product.id.toString()}
        style={styles.listContainer}
        contentContainerStyle={{ alignItems: 'center', gap: 50 }}
      />
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: '100%',
  },
  title: {
    color: '#124387',
    fontWeight: 'bold',
    paddingVertical: 30,
    fontSize: 22,
  },
});
