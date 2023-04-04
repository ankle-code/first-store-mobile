import { Text, View, StyleSheet, FlatList } from 'react-native';

import Card from '../../components/Card';

const MOCKED_DATA = [
  {
    id: 1,
    name: 'cyberpunk',
    price: 199,
    raiting: 5,
  },
  {
    id: 2,
    name: 'cyberpunk',
    price: 199,
    raiting: 5,
  },
  {
    id: 3,
    name: 'cyberpunk',
    price: 199,
    raiting: 5,
  },
  {
    id: 4,
    name: 'cyberpunk',
    price: 199,
    raiting: 5,
  },
];

const Cart = () => {
  return (
    <View>
      <Text style={styles.title}>Suas compras:</Text>
      <FlatList
        data={MOCKED_DATA}
        renderItem={({ item }) => <Card type="cart" {...item} />}
        keyExtractor={(product) => product.id.toString()}
        style={styles.listContainer}
        contentContainerStyle={{
          gap: 30,
          alignItems: 'center',
        }}
      />
    </View>
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
