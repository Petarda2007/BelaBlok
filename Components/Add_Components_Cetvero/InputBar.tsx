import * as React from 'react';
import { View, Image, TouchableOpacity } from "react-native";
import { stylesAddInputBar } from "../../styles";

import { scores, zvanja } from '../Add_Cetvero';

import Input from './Input';

type Props={
  newScore: scores
  setNewScore: React.Dispatch<React.SetStateAction<scores>>
  setNewZvanja: React.Dispatch<React.SetStateAction<zvanja>>
}

export default function InputBar({newScore, setNewScore, setNewZvanja}: Props){
  const handleClick=()=>{
    setNewScore({first: 0, second: 0, stiglja: false});
    setNewZvanja({
      firstTeam:{
        dvadeset: 0,
        pedeset: 0,
        sto: 0,
        belot: 0,
        stiglja: 0
      },
      secondTeam:{
        dvadeset: 0,
        pedeset: 0,
        sto: 0,
        belot: 0,
        stiglja: 0
      }
    })
  }
  return(
    <View style={stylesAddInputBar.bar}>
      <Input id={'first'} newScore={newScore} setNewScore={setNewScore}/>
      <Input id={'second'} newScore={newScore} setNewScore={setNewScore}/>
      <View style={stylesAddInputBar.trash_bar}>
        <TouchableOpacity onPress={()=>handleClick()} activeOpacity={0.6}>
          <Image style={stylesAddInputBar.trash_bar_image} source={require('../icons_and_images/trash_white.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}
