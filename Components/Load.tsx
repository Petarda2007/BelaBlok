import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { commonStyles, stylesSavesBottomBar, stylesSaves } from "../styles";

import { useState } from 'react';

import { RootStackParamList, belaCetvero_t, belaTroje_t, belaDvoje_t, SaveData } from '../types';

import { SafeAreaView } from 'react-native-safe-area-context';

import Save from './Save';

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>,
  setBelaCetvero?: React.Dispatch<React.SetStateAction<belaCetvero_t>>,
  setBelaTroje?: React.Dispatch<React.SetStateAction<belaTroje_t>>,
  setBelaDvoje?: React.Dispatch<React.SetStateAction<belaDvoje_t>>,
  saveData: SaveData,
  setSaveData: React.Dispatch<React.SetStateAction<SaveData>>,
  route: {params: {id: 'cetvero' | 'troje' | 'dvoje'}}
}

export default function Load({navigation, setBelaCetvero, setBelaTroje, setBelaDvoje, saveData, setSaveData, route}: Props){
  const id=route.params.id;
  const [selectedIndex, setSelectedIndex]=useState(-1);

  const handleOdustani=()=>{
    switch(id){
      case 'cetvero': return navigation.navigate('Bela_Cetvero');
      case 'troje': return navigation.navigate('Bela_Troje');
      case 'dvoje': return navigation.navigate('Bela_Dvoje');
    }
  }

  return(
    <SafeAreaView style={[commonStyles.page, {alignItems: 'center', justifyContent: 'center'}]}>

      <ScrollView style={stylesSaves.scrollview}>
        {saveData[id].map((_, index)=>(
          <Save id={id} navigation={navigation} saveData={saveData} index={index} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} setSaveData={setSaveData} setBelaCetvero={setBelaCetvero} setBelaTroje={setBelaTroje} setBelaDvoje={setBelaDvoje}/>
        ))}
      </ScrollView>

      <View style={stylesSavesBottomBar.bar}>
        <TouchableOpacity style={stylesSavesBottomBar.left_container} activeOpacity={1} onPress={handleOdustani}>
          <Text style={stylesSavesBottomBar.text_cancle}>Odbaci</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}