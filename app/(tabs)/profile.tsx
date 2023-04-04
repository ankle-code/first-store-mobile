import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
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
      {/* <View>
        <Text style={styles.text}>Meus Produtos:</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
