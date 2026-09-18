import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { stylesAddWhoCalled } from "../../styles";

import { belaTroje_t } from '../../types';
import {  whoCalled } from '../Add_Troje';



type Props={
  id: "firstPlayer" | "secondPlayer" | "thirdPlayer" 
  belaTroje: belaTroje_t
  newWhoCalled: whoCalled
  setNewWhoCalled: React.Dispatch<React.SetStateAction<whoCalled>>
}

export default function WhoCalledComponent({id, belaTroje, newWhoCalled, setNewWhoCalled}: Props){
  const fallBack=(id==="firstPlayer"? "Player 1": (id==="secondPlayer")? "Player 2": "Player 3")

  const handleClick=()=>{
    setNewWhoCalled({
      firstPlayer: (id==="firstPlayer")? true: false,
      secondPlayer: (id==="secondPlayer")? true: false,
      thirdPlayer: (id==="thirdPlayer")? true: false
    })
  }

  return(
    <View style={stylesAddWhoCalled.player_container}>
      <Text style={stylesAddWhoCalled.top_bottom_player_container}>
        {belaTroje[id] || fallBack}
      </Text>
      <View style={stylesAddWhoCalled.bottom_bottom_player_container}>
        <TouchableOpacity style={stylesAddWhoCalled.outer_circle} onPress={handleClick} activeOpacity={1}>
          <View style={(newWhoCalled[id] && [stylesAddWhoCalled.outer_circle,{backgroundColor: 'white'}])}>

          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
