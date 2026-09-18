import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { stylesNavPage } from "../styles";
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';

type NavigationProp=NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home(){
  const navigation=useNavigation<NavigationProp>();

  return(
      <SafeAreaView style={stylesNavPage.home_page}>

        <TouchableOpacity style={stylesNavPage.game_container} activeOpacity={0.70} onPress={()=>navigation.navigate('Bela_Cetvero')}>
          <View style={stylesNavPage.game_text_container}>
            <Text style={stylesNavPage.game_text}>2 vs 2</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={stylesNavPage.game_container} activeOpacity={0.70} onPress={()=>navigation.navigate('Bela_Troje')}>
          <View style={stylesNavPage.game_text_container}>
            <Text style={stylesNavPage.game_text}>1 vs 1 vs 1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={stylesNavPage.game_container} activeOpacity={0.70} onPress={()=>navigation.navigate('Bela_Dvoje')}>
          <View style={stylesNavPage.game_text_container}>
            <Text style={stylesNavPage.game_text}>1 vs 1</Text>
          </View>
        </TouchableOpacity>

      </SafeAreaView>
  )
}