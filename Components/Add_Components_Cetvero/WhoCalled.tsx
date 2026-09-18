import * as React from 'react';
import { View, Text } from "react-native";
import { stylesAddWhoCalled } from "../../styles";

import { belaCetvero_t } from '../../types';
import { scores, whoCalled } from '../Add_Cetvero';

import WhoCalledComponent from './WhoCalledComponent';

type Props={
  belaCetvero: belaCetvero_t
  newWhoCalled: whoCalled
  setNewWhoCalled: React.Dispatch<React.SetStateAction<whoCalled>>
}

export default function WhoCalled({belaCetvero, newWhoCalled, setNewWhoCalled}: Props){
  return(
    <View style={stylesAddWhoCalled.container}>
      <View style={stylesAddWhoCalled.top_container}>
        <Text style={stylesAddWhoCalled.who_called_text}>Zvao je:</Text>
      </View>
      <View style={stylesAddWhoCalled.bottom_container}>
        <WhoCalledComponent id="firstTeam" belaCetvero={belaCetvero} newWhoCalled={newWhoCalled} setNewWhoCalled={setNewWhoCalled}/>
        <WhoCalledComponent id="secondTeam" belaCetvero={belaCetvero} newWhoCalled={newWhoCalled} setNewWhoCalled={setNewWhoCalled}/>
      </View>
    </View>
  )
}
