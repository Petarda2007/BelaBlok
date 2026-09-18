import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { stylesResumeSaveDelete } from "../styles";

import { RootStackParamList, belaCetvero_t, belaTroje_t, belaDvoje_t, SaveData } from '../types';

import { Delete, FullDelete } from './functions';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props={
  id: 'cetvero' | 'troje' | 'dvoje'
  navigation: NativeStackNavigationProp<RootStackParamList>,
  setShowResumeSaveDelete: React.Dispatch<React.SetStateAction<boolean>>,
  belaDvoje?: belaDvoje_t,
  setBelaDvoje?: React.Dispatch<React.SetStateAction<belaDvoje_t>>,
  belaTroje?: belaTroje_t,
  setBelaTroje?: React.Dispatch<React.SetStateAction<belaTroje_t>>,
  belaCetvero?: belaCetvero_t,
  setBelaCetvero?: React.Dispatch<React.SetStateAction<belaCetvero_t>>,
  setSaveData: React.Dispatch<React.SetStateAction<SaveData>>
}

function addSave<K extends 'cetvero' | 'troje' | 'dvoje'>(
  key: K,
  bela: SaveData[K][number]['bela'],
  setSaveData: React.Dispatch<React.SetStateAction<SaveData>>
){
  const now=new Date();
  setSaveData(prev=>({
    ...prev,
    [key]: [
      ...prev[key],
      {
        bela,
        timestamp: `${now.toLocaleDateString('hr-HR')} ${now.toLocaleTimeString('hr-HR')}`,
      },
    ],
  }));
}

export default function ResumeSaveDelete({navigation, id, setShowResumeSaveDelete, belaCetvero, setBelaCetvero, belaTroje, setBelaTroje, belaDvoje, setBelaDvoje, setSaveData}: Props){

  const handleDelete=()=>{
    Delete(id, {setBelaCetvero, setBelaTroje, setBelaDvoje});
    setShowResumeSaveDelete(false);
  }
  const handleFullDelete=()=>{
    FullDelete(id, {setBelaCetvero, setBelaTroje, setBelaDvoje});
    setShowResumeSaveDelete(false);
  }

  const handleSave=()=>{
    switch(id){
      case 'cetvero':
        if(!belaCetvero) return;
        addSave('cetvero', belaCetvero, setSaveData);
        break;
      case 'troje':
        if(!belaTroje) return;
        addSave('troje', belaTroje, setSaveData);
        break;
      case 'dvoje':
        if(!belaDvoje) return;
        addSave('dvoje', belaDvoje, setSaveData);
        break;
    }
    setShowResumeSaveDelete(false);
  }

  const handleLoad=()=>{
    navigation.navigate('Load', {id});
  }

  const handleSettings=()=>{
    navigation.navigate('Settings', {id});
  }


  const insets=useSafeAreaInsets();

  return(
    <SafeAreaView style={[stylesResumeSaveDelete.container, {marginTop: insets.top, marginBottom: insets.bottom}]}>
      <View style={stylesResumeSaveDelete.tab}>
        <TouchableOpacity style={stylesResumeSaveDelete.cards} onPress={()=>setShowResumeSaveDelete(false)} activeOpacity={0.8}>
          <Text style={stylesResumeSaveDelete.text}>Nastavi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesResumeSaveDelete.cards} onPress={handleSave} activeOpacity={0.8}>
          <Text style={stylesResumeSaveDelete.text}>Spremi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesResumeSaveDelete.cards} onPress={handleLoad} activeOpacity={0.8}>
          <Text style={stylesResumeSaveDelete.text}>Ucitaj</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesResumeSaveDelete.cards} onPress={handleDelete} activeOpacity={0.8}>
          <Text style={stylesResumeSaveDelete.text}>Izbrisi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesResumeSaveDelete.cards} onPress={handleFullDelete} activeOpacity={0.8}>
          <Text style={stylesResumeSaveDelete.text}>Izbrisi Sve</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesResumeSaveDelete.cards} onPress={handleSettings} activeOpacity={0.8}>
          <Text style={stylesResumeSaveDelete.text}>Postavke</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}