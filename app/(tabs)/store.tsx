import { StyleSheet, View, FlatList, Text } from 'react-native';

import Card from '../../components/Card';
import { getProducts } from '../../api';
import { useState } from 'react';
import Loading from '../../components/Loading';

const Store = () => {
  const [data, setData] = useState<any>();

  const getProductsToStore = async () => {
    const response = await getProducts();
    setData(response);
  };

  if (!data) {
    getProductsToStore();
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha seu jogo favorito:</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card type="store" {...item} />}
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
