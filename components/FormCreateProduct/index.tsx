import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { createProduct } from '../../api';

const FormCreateProduct = ({ onCreate }: { onCreate: () => void }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const createProductForm = () => {
    const productData = {
      nome_produto: name,
      descricao_produto: description,
      id_tipo_produto: 1,
      preco: `R$ ${price}`,
      raiting: 0,
      quantidade: Number(amount),
      caminho_imagem: '',
      id_usuario: 1,
    };

    console.log(productData);

    createProduct(productData);
    onCreate();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie o seu produto:</Text>
      <View>
        <View>
          <Text style={styles.label}>Nome do produto</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>

        <View>
          <Text style={styles.label}>Descrição do produto</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <View style={styles.amountContainer}>
          <View>
            <Text style={styles.label}>Quantidade</Text>
            <TextInput
              style={[styles.input, styles.rowInputs]}
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
          </View>

          <View>
            <Text style={styles.label}>Preço</Text>
            <TextInput
              style={[styles.input, styles.rowInputs]}
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View>
          <Text style={styles.label}>Imagem</Text>
          <TextInput
            style={styles.input}
            value={image}
            onChangeText={setImage}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={createProductForm}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormCreateProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d9d8d4',
    padding: 20,
    borderRadius: 4,
    margin: 25,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    gap: 25,
  },
  input: {
    borderColor: '#c9240a',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    backgroundColor: 'white',
    fontSize: 20,
    marginTop: 10,
    padding: 10,
    outlineStyle: 'none',
    minWidth: 200,
  },
  amountContainer: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-between',
  },
  rowInputs: {
    maxWidth: 200,
  },
  title: {
    textAlign: 'center',
    color: '#c9240a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    color: '#124387',
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#c9240a',
    width: 150,
    padding: 20,
    borderRadius: 4,
  },
});
