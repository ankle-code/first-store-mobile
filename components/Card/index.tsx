import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';

const Card = ({ type }: { type: 'cart' | 'store' }) => {
  const storeCard = (
    <View>
      <TouchableOpacity style={styles.cardContainer}>
        <Image
          source={require('../../assets/images/cyberpunk.jpeg')}
          resizeMode="cover"
          style={styles.cardImage}
        />
        <View style={styles.cardSection}>
          <Text style={styles.cardTitle}>Cyberpunk</Text>
          <FontAwesome name="ellipsis-v" />
        </View>

        <View style={styles.cardSection}>
          <Text style={styles.cardTitle}>Price</Text>
          <Text style={styles.cardPriceText}>R$ 199,99</Text>
        </View>

        <View style={styles.cardRating}>
          <View style={styles.raitingIconContainer}>
            <FontAwesome style={styles.raitingIcon} name="star" />
          </View>
          <Text>5</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyButton}>
        <FontAwesome style={styles.cardIcon} name="shopping-bag" />
        <Text style={styles.buyText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );

  const cartCard = (
    <View>
      <TouchableOpacity style={styles.cardContainer}>
        <TouchableOpacity style={styles.trashButton}>
          <FontAwesome style={styles.trashIcon} name="trash" />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/cyberpunk.jpeg')}
          resizeMode="cover"
          style={styles.cardImage}
        />

        <View style={styles.cardSection}>
          <Text style={styles.cardTitle}>Cyberpunk</Text>
          <FontAwesome name="ellipsis-v" />
        </View>

        <View style={styles.cardSection}>
          <Text style={styles.cardTitle}>Price</Text>
          <Text style={styles.cardPriceText}>R$ 199,99</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.cartButtons}>
        <TouchableOpacity style={styles.plusButtonContainer}>
          <FontAwesome style={styles.cardIcon} name="plus" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.minusButtonContainer}>
          <FontAwesome style={styles.cardIcon} name="minus" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const CARDS = {
    cart: cartCard,
    store: storeCard,
  };

  return CARDS[type];
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#f8f9fc',
    maxWidth: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    gap: 15,
    position: 'relative',
  },
  cardImage: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  cardSection: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    flexDirection: 'row',
  },
  cardTitle: {
    fontSize: 18,
    margin: 0,
  },
  cardPriceText: {
    color: '#7c7d7e',
    fontWeight: 'bold',
  },
  cardRating: {
    gap: 10,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: 'absolute',
    top: 25,
    left: 130,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  raitingIconContainer: {
    height: 22,
    width: 22,
    borderRadius: 9,
    backgroundColor: '#c9240a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  raitingIcon: { color: 'white' },
  buyButton: {
    backgroundColor: '#c9240a',
    justifyContent: 'center',
    gap: 10,
    width: 200,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  cardIcon: {
    color: 'white',
  },
  buyText: {
    color: 'white',
    fontWeight: 'bold',
  },
  plusButtonContainer: {
    backgroundColor: '#c9240a',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomLeftRadius: 15,
  },
  minusButtonContainer: {
    backgroundColor: '#c9240a',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomRightRadius: 15,
  },
  cartButtons: {
    flexDirection: 'row',
  },
  trashIcon: {
    color: 'white',
    fontSize: 20,
  },
  trashButton: {
    backgroundColor: '#c9240a',
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
