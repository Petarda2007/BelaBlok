import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { stylesTopBar } from "../styles";
import { RootStackParamList,  belaCetvero_t, belaDvoje_t, belaTroje_t } from '../types'

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>,
  setShowResumeSaveDelete: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TopBar({navigation, setShowResumeSaveDelete}: Props){

  return(
    <View style={stylesTopBar.top_bar}>
      <TouchableOpacity style={stylesTopBar.top_bar_left_container} onPress={()=>navigation.navigate('Home')} activeOpacity={0.8}>
        <Image style={stylesTopBar.top_bar_back_img} source={require('./icons_and_images/Back.png')}/>
        <Text style={stylesTopBar.top_bar_text}>Home</Text>
      </TouchableOpacity>
      <View style={stylesTopBar.top_bar_right_container}>
        <TouchableOpacity onPress={()=>setShowResumeSaveDelete(true)} activeOpacity={0.8}>
          <Image style={stylesTopBar.top_bar_trash_img} source={require('./icons_and_images/settings.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}