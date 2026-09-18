import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { stylesBottomBar } from "../../styles";

import { RootStackParamList, belaDvoje_t } from '../../types';

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>
  belaDvoje: belaDvoje_t
  setBelaDvoje: React.Dispatch<React.SetStateAction<belaDvoje_t>>
}

export default function BottomBar({navigation, belaDvoje, setBelaDvoje}: Props){

  return(
    <View style={stylesBottomBar.bar}>
      <View style={stylesBottomBar.left_container_image}>
        <TouchableOpacity onPress={()=>setBelaDvoje(prev=>({...prev, turn: (belaDvoje.turn==="Ja")? "Protivnik": "Ja"}))} activeOpacity={1}>
          <Image style={stylesBottomBar.image} source={require('../icons_and_images/cycle.png')}/>
        </TouchableOpacity>
        <Text style={stylesBottomBar.text}>{`Dijeli: ${belaDvoje.turn}`}</Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Add_Dvoje', {it: -1})} activeOpacity={1}>
        <Image style={[stylesBottomBar.image, {width: 40}]} source={require('../icons_and_images/plus.png')}/>
      </TouchableOpacity>
    </View>
  )
}
