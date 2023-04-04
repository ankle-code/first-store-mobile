import { View, SafeAreaView, ImageBackground } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#c9240a',
        headerTintColor: 'white',
        headerBackground: () => (
          <SafeAreaView>
            <ImageBackground
              source={require('../../assets/images/background.jpg')}
              style={{ height: 60 }}
            ></ImageBackground>
          </SafeAreaView>
        ),
        tabBarStyle: {
          backgroundColor: '#0F2b31',
          height: 70,
          opacity: 0.9,
          paddingBottom: 5,
        },
        tabBarBackground: () => (
          <View>
            <ImageBackground
              source={require('../../assets/images/background.jpg')}
              style={{ height: 70, width: '100%' }}
            ></ImageBackground>
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="store"
        options={{
          title: 'Loja',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="shopping-bag" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="shopping-cart" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
