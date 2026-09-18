import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { stylesAddWhoCalled } from "../../styles";

import { belaDvoje_t } from '../../types';
import { scores, whoCalled } from '../Add_Dvoje';

type Props={
  id: "firstPlayer" | "secondPlayer"
  belaDvoje: belaDvoje_t
  newScore: scores
  newWhoCalled: whoCalled
  setNewWhoCalled: React.Dispatch<React.SetStateAction<whoCalled>>
}

export default function WhoCalledComponent({id, belaDvoje, newScore, newWhoCalled, setNewWhoCalled}: Props){
  const fallBack=(id==="firstPlayer"? "Player 1": "Player 2")

  const handleClick=()=>{
    setNewWhoCalled({
      firstPlayer: (id==="firstPlayer")? true: false,
      secondPlayer: (id==="secondPlayer")? true: false,
    })
  }

  const handleSave=()=>{
    if(newScore.first+newScore.second!==162)
      return;

  }

  return(
    <View style={stylesAddWhoCalled.player_container}>
      <Text style={stylesAddWhoCalled.top_bottom_player_container}>
        {belaDvoje[id] || fallBack}
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
