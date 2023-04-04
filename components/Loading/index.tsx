import { View, Text, StyleSheet } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carregando...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: '#000',
    padding: 20,
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    fontWeight: 'bold',
  },
});
