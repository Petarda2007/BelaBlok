import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { stylesChangeWhoDeals } from "../../styles";

import { belaCetvero_t } from '../../types';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props={
  belaCetvero: belaCetvero_t,
  setBelaCetvero: React.Dispatch<React.SetStateAction<belaCetvero_t>>,
  showWhoDeals: boolean,
  setShowWhoDeals: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ChangeWhoDeals({belaCetvero, setBelaCetvero, setShowWhoDeals}: Props){
  const selected=require('../icons_and_images/selected_player.png');
  const notSelected=require('../icons_and_images/not_selected_player.png');

  const insets=useSafeAreaInsets();

  return(
    <View style={[stylesChangeWhoDeals.container, {bottom: insets.bottom}]}>
      <Text style={stylesChangeWhoDeals.who_deals_text_bar}>{`Dijeli: ${belaCetvero.turn}`}</Text>
      <View style={[stylesChangeWhoDeals.row, {alignItems: 'center'}]}>
        <TouchableOpacity onPress={()=>{setBelaCetvero(prev=>({...prev, turn: "Partner"})); setShowWhoDeals(false)}} activeOpacity={1}>
          <Image style={stylesChangeWhoDeals.image} source={belaCetvero.turn==="Partner"? selected: notSelected}/>
        </TouchableOpacity>
      </View>
      <View style={[stylesChangeWhoDeals.row, {alignItems: 'center'}]}>
        <TouchableOpacity onPress={()=>{setBelaCetvero(prev=>({...prev, turn: "Lijevi Protivnik"})); setShowWhoDeals(false)}} activeOpacity={1}>
          <Image style={stylesChangeWhoDeals.image} source={belaCetvero.turn==="Lijevi Protivnik"? selected: notSelected}/>
        </TouchableOpacity>
        <View>
          <Image style={stylesChangeWhoDeals.image} source={require('../icons_and_images/table.png')}/>
        </View>
        <TouchableOpacity onPress={()=>{setBelaCetvero(prev=>({...prev, turn: "Desni Protivnik"})); setShowWhoDeals(false)}} activeOpacity={1}>
          <Image style={stylesChangeWhoDeals.image} source={belaCetvero.turn==="Desni Protivnik"? selected: notSelected}/>
        </TouchableOpacity>
      </View>
      <View style={[stylesChangeWhoDeals.row, {alignItems: 'center'}]}>
        <TouchableOpacity onPress={()=>{setBelaCetvero(prev=>({...prev, turn: "Ja"})); setShowWhoDeals(false)}} activeOpacity={1}>
          <Image style={stylesChangeWhoDeals.image} source={belaCetvero.turn==="Ja"? selected: notSelected}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}
