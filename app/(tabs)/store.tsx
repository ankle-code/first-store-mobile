import { StyleSheet, View } from 'react-native';

import Card from '../../components/Card';

export default function Store() {
  return (
    <View style={styles.container}>
      <Card type="store" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
