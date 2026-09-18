import * as React from 'react';
import { View, Text } from "react-native";
import { stylesAddCallingScoreBar } from "../../styles";

import { zvanja } from '../Add_Troje';

import { SumZvanja } from '../functions';

type Props={
  newZvanja: zvanja
}

export default function CallingScoreBar({newZvanja}: Props){
  return(
    <View style={stylesAddCallingScoreBar.bar}>
      <View style={stylesAddCallingScoreBar.text_container}>
        <Text style={stylesAddCallingScoreBar.text}>{SumZvanja(newZvanja.firstPlayer)}</Text>
      </View>
      <View style={stylesAddCallingScoreBar.text_container}>
        <Text style={stylesAddCallingScoreBar.text}>{SumZvanja(newZvanja.secondPlayer)}</Text>
      </View>
      <View style={stylesAddCallingScoreBar.text_container}>
        <Text style={stylesAddCallingScoreBar.text}>{SumZvanja(newZvanja.thirdPlayer)}</Text>
      </View>
    </View>
  )
}
