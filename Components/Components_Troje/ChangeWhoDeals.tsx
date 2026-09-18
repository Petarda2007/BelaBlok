import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { stylesChangeWhoDeals } from "../../styles";

import { belaTroje_t } from '../../types';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props={
  belaTroje: belaTroje_t,
  setBelaTroje: React.Dispatch<React.SetStateAction<belaTroje_t>>,
  showWhoDeals: boolean,
  setShowWhoDeals: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ChangeWhoDeals({belaTroje, setBelaTroje, setShowWhoDeals}: Props){
  const selected=require('../icons_and_images/selected_player.png');
  const notSelected=require('../icons_and_images/not_selected_player.png');

  const insets=useSafeAreaInsets();

  return(
    <View style={[stylesChangeWhoDeals.container, {bottom: insets.bottom}]}>
      <Text style={stylesChangeWhoDeals.who_deals_text_bar}>{`Dijeli: ${belaTroje.turn}`}</Text>
      <View style={[stylesChangeWhoDeals.row, {justifyContent: 'space-between'}]}>
        <TouchableOpacity onPress={()=>{setBelaTroje(prev=>({...prev, turn: "Lijevi Protivnik"})); setShowWhoDeals(false)}} activeOpacity={1}>
          <Image style={stylesChangeWhoDeals.image} source={belaTroje.turn==="Lijevi Protivnik"? selected: notSelected}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setBelaTroje(prev=>({...prev, turn: "Desni Protivnik"})); setShowWhoDeals(false)}} activeOpacity={1}>
          <Image style={stylesChangeWhoDeals.image} source={belaTroje.turn==="Desni Protivnik"? selected: notSelected}/>
        </TouchableOpacity>
      </View>
      <View style={[stylesChangeWhoDeals.row, {alignItems: 'center'}]}>
        <View>
          <Image style={stylesChangeWhoDeals.image} source={require('../icons_and_images/table.png')}/>
        </View>
      </View>
      <View style={[stylesChangeWhoDeals.row, {alignItems: 'center'}]}>
        <TouchableOpacity onPress={()=>{setBelaTroje(prev=>({...prev, turn: "Ja"})); setShowWhoDeals(false)}} activeOpacity={1}>
          <Image style={stylesChangeWhoDeals.image} source={belaTroje.turn==="Ja"? selected: notSelected}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}
