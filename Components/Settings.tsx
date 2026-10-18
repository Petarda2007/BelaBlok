import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { commonStyles, stylesSavesBottomBar, stylesSettings } from "../styles";

import { RootStackParamList, SaveData } from '../types';

import { SafeAreaView } from 'react-native-safe-area-context';

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>,
  saveData: SaveData,
  setSaveData: React.Dispatch<React.SetStateAction<SaveData>>,
  route: {params: {id: 'cetvero' | 'troje' | 'dvoje'}}
}

export default function Settings({navigation, saveData, setSaveData, route}: Props){
  const id=route.params.id;

  const handleOdustani=()=>{
    switch(id){
      case 'cetvero': return navigation.navigate('Bela_Cetvero');
      case 'troje': return navigation.navigate('Bela_Troje');
      case 'dvoje': return navigation.navigate('Bela_Dvoje');
    }
  }

  const handleClick=()=>{
    setSaveData(prev=>({
      ...prev,
      smjerKazaljkeNaSatu: !saveData.smjerKazaljkeNaSatu
    }))
  }

  return(
    <SafeAreaView style={[commonStyles.page, {alignItems: 'center', justifyContent: 'center'}]}>
      <View style={stylesSettings.setting}>
        <View style={stylesSettings.textContainer}>
          <Text style={stylesSettings.text}>Igra se igra u smjeru kazaljke na satu</Text>
        </View>
        <View style={stylesSettings.buttonContainer}>
          <TouchableOpacity style={[stylesSettings.button, (saveData.smjerKazaljkeNaSatu)&&{backgroundColor: 'green'}]} onPress={handleClick} disabled={saveData.smjerKazaljkeNaSatu} activeOpacity={0.7}>
            <Text style={[stylesSettings.text, {textAlign: 'center'}, (saveData.smjerKazaljkeNaSatu)&&{backgroundColor: 'green'}]}>DA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[stylesSettings.button, (!saveData.smjerKazaljkeNaSatu)&&{backgroundColor: 'green'}]} onPress={handleClick} disabled={!saveData.smjerKazaljkeNaSatu} activeOpacity={0.7}>
            <Text style={[stylesSettings.text, {textAlign: 'center'}]}>NE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView></ScrollView>

      <View style={stylesSavesBottomBar.bar}>
        <TouchableOpacity style={stylesSavesBottomBar.left_container} activeOpacity={1} onPress={handleOdustani}>
          <Text style={stylesSavesBottomBar.text_cancle}>Natrag</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}