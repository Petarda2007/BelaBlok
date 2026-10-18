import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { stylesAddWhoCalled } from "../../styles";

import { belaCetvero_t } from '../../types';
import { whoCalled } from '../Add_Cetvero';

type Props={
  id: "firstTeam" | "secondTeam"
  belaCetvero: belaCetvero_t
  newWhoCalled: whoCalled
  setNewWhoCalled: React.Dispatch<React.SetStateAction<whoCalled>>
}

export default function WhoCalledComponent({id, belaCetvero, newWhoCalled, setNewWhoCalled}: Props){
  const fallBack=(id==="firstTeam"? "Team 1": "Team 2")

  const handleClick=()=>{
    setNewWhoCalled({
      firstTeam: (id==="firstTeam")? true: false,
      secondTeam: (id==="secondTeam")? true: false,
    })
  }
  return(
    <View style={stylesAddWhoCalled.player_container}>
      <Text style={stylesAddWhoCalled.top_bottom_player_container}>
        {belaCetvero[id] || fallBack}
      </Text>
      <View style={stylesAddWhoCalled.bottom_bottom_player_container}>
        <TouchableOpacity style={stylesAddWhoCalled.outer_circle} onPress={handleClick} activeOpacity={1}>
          <View style={(newWhoCalled[id] && [stylesAddWhoCalled.outer_circle,{backgroundColor: 'white'}])}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}
