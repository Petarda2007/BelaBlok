import * as React from 'react';
import { View, Text } from "react-native";
import { stylesAddWhoCalled } from "../../styles";

import { belaDvoje_t } from '../../types';
import { scores, whoCalled } from '../Add_Dvoje';

import WhoCalledComponent from './WhoCalledComponent';

type Props={
  belaDvoje: belaDvoje_t
  newScore: scores
  newWhoCalled: whoCalled
  setNewWhoCalled: React.Dispatch<React.SetStateAction<whoCalled>>
}

export default function WhoCalled({belaDvoje, newScore, newWhoCalled ,setNewWhoCalled}: Props){
  return(
    <View style={stylesAddWhoCalled.container}>
      <View style={stylesAddWhoCalled.top_container}>
        <Text style={stylesAddWhoCalled.who_called_text}>Zvao je:</Text>
      </View>
      <View style={stylesAddWhoCalled.bottom_container}>
        <WhoCalledComponent id="firstPlayer" belaDvoje={belaDvoje} newScore={newScore} newWhoCalled={newWhoCalled} setNewWhoCalled={setNewWhoCalled}/>
        <WhoCalledComponent id="secondPlayer" belaDvoje={belaDvoje} newScore={newScore} newWhoCalled={newWhoCalled} setNewWhoCalled={setNewWhoCalled}/>
      </View>
    </View>
  )
}
