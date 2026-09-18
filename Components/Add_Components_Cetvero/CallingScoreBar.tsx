import * as React from 'react';
import { View, Text } from "react-native";
import { stylesAddCallingScoreBar } from "../../styles";

import { zvanja } from '../Add_Cetvero';
import { SumZvanja } from '../functions';

type Props={
  newZvanja: zvanja
}

export default function CallingScoreBar({newZvanja}: Props){
  return(
    <View style={stylesAddCallingScoreBar.bar}>
      <View style={stylesAddCallingScoreBar.text_container}>
        <Text style={stylesAddCallingScoreBar.text}>{SumZvanja(newZvanja.firstTeam)}</Text>
      </View>
      <View style={stylesAddCallingScoreBar.text_container}>
        <Text style={stylesAddCallingScoreBar.text}>{SumZvanja(newZvanja.secondTeam)}</Text>
      </View>
    </View>
  )
}
