import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';

import Card from '../../components/Card';

import { getProductById } from '../../api';
import { useState } from 'react';

import useCart from '../../hooks/useCart';

import Loading from '../../components/Loading';

const Cart = () => {
  const [data, setData] = useState<any>([]);

  const userCart = useCart();

  const getProduct = async (id: number) => {
    const response = await getProductById(id);

    const isProductValid = response.id ? true : false;
    console.log(response, isProductValid, 'getProduct');
    if (isProductValid) {
      setData((data: any) => [...data, response]);
    }
  };

  const getProductsToCart = () => {
    userCart.forEach((productId: number) => getProduct(productId));
  };

  if (!data.length) {
    if (!userCart) {
      return <Loading />;
    }
    getProductsToCart();

    return <Loading />;
  }

  return (
    <ScrollView>
      <Text style={styles.title}>Suas compras:</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          console.log(item, 'item');
          return <Card type="cart" {...item} />;
        }}
        keyExtractor={(product) => product.id}
        style={styles.listContainer}
        contentContainerStyle={{ alignItems: 'center', gap: 50 }}
      />
    </ScrollView>
  );
};

export default Cart;

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
    textAlign: 'center',
  },
});
