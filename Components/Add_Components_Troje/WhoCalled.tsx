import * as React from 'react';
import { View, Text } from "react-native";
import { stylesAddWhoCalled } from "../../styles";

import { belaTroje_t } from '../../types';
import { scores, whoCalled } from '../Add_Troje';

import WhoCalledComponent from './WhoCalledComponent';

type Props={
  belaTroje: belaTroje_t
  newScore: scores
  newWhoCalled: whoCalled
  setNewWhoCalled: React.Dispatch<React.SetStateAction<whoCalled>>
}

export default function WhoCalled({belaTroje, newScore, newWhoCalled, setNewWhoCalled}: Props){
  return(
    <View style={stylesAddWhoCalled.container}>
      <View style={stylesAddWhoCalled.top_container}>
        <Text style={stylesAddWhoCalled.who_called_text}>Zvao je:</Text>
      </View>
      <View style={stylesAddWhoCalled.bottom_container}>
        <WhoCalledComponent id="firstPlayer" belaTroje={belaTroje} newWhoCalled={newWhoCalled} setNewWhoCalled={setNewWhoCalled}/>
        <WhoCalledComponent id="secondPlayer" belaTroje={belaTroje} newWhoCalled={newWhoCalled} setNewWhoCalled={setNewWhoCalled}/>
        <WhoCalledComponent id="thirdPlayer" belaTroje={belaTroje} newWhoCalled={newWhoCalled} setNewWhoCalled={setNewWhoCalled}/>
      </View>
    </View>
  )
}
