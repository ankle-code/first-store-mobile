import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import FormCreateProduct from '../../components/FormCreateProduct';

export default function Profile() {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateProduct = () => {
    setIsCreating((isCreating) => !isCreating);
  };

  const createProductButton = (
    <View style={styles.createProductContainer}>
      <TouchableOpacity
        style={styles.createProductButton}
        onPress={handleCreateProduct}
      >
        <Text style={styles.createProductText}>Criar Produto</Text>
        <FontAwesome style={styles.createProductIcon} name="plus-circle" />
      </TouchableOpacity>
    </View>
  );

  const handleRanderCreateProduct = isCreating ? (
    <FormCreateProduct onCreate={handleCreateProduct} />
  ) : (
    createProductButton
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: 'center' }}
    >
      <View>
        <Text style={styles.text}>Júlio Cesar</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatarImage}
          source={require('../../assets/images/avatar.jpg')}
          resizeMode="cover"
        />
      </View>
      {handleRanderCreateProduct}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    borderRadius: 100,
    width: 200,
    height: 200,
  },
  text: {
    color: '#c9240a',
    fontSize: 22,
    width: 300,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 25,
  },
  createProductContainer: {
    margin: 30,
  },
  createProductButton: {
    backgroundColor: '#c9240a',
    flexDirection: 'row',
    gap: 10,
    padding: 20,
    borderRadius: 4,
    alignItems: 'center',
  },
  createProductText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  createProductIcon: {
    color: 'white',
    fontSize: 18,
  },
});
