import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { stylesBottomBar } from "../../styles";

import { RootStackParamList, belaCetvero_t } from '../../types';

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>,
  belaCetvero: belaCetvero_t,
  showWhoDeals: boolean,
  setShowWhoDeals: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BottomBar({navigation, belaCetvero, showWhoDeals, setShowWhoDeals}: Props){

  return(
    <View style={stylesBottomBar.bar}>
      <View style={stylesBottomBar.left_container_image}>
        <TouchableOpacity onPress={()=>setShowWhoDeals(!showWhoDeals)} activeOpacity={1}>
          <Image style={stylesBottomBar.image} source={require('../icons_and_images/pen.png')}/>
        </TouchableOpacity>
        <Text style={stylesBottomBar.text}>{`Dijeli: ${belaCetvero.turn}`}</Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Add_Cetvero', {it: -1})} activeOpacity={1}>
        <Image style={[stylesBottomBar.image, {width: 40}]} source={require('../icons_and_images/plus.png')}/>
      </TouchableOpacity>
    </View>
  )
}
