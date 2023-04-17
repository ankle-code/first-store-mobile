import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';

import Card from '../../components/Card';

import { getUsersCart, getProductById, deleteCartProduct } from '../../api';
import { useState } from 'react';

import Loading from '../../components/Loading';

const Cart = () => {
  const [userCart, setUserCart] = useState<any>();
  const [data, setData] = useState<any>([]);

  const getUserCart = async () => {
    const response = await getUsersCart();

    const userCart = [...response[0].id_produtos.trim().split(',')];

    const userCartFormat = userCart.map((id) => Number(id));

    setUserCart(userCartFormat);
  };

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
      getUserCart();
      return <Loading />;
    }

    getProductsToCart();

    return <Loading />;
  }

  console.log(data, 'data');

  console.log(userCart, 'userCart');

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
