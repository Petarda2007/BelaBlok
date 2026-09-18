import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { stylesAddCalling } from "../../styles";

import { zvanja, scores } from '../Add_Dvoje';

import { useEffect } from 'react';

type Props={
  id: "firstPlayer" | "secondPlayer"
  calling: "20" | "50" | "100" | "BELOT" | "STIGLJA"
  newZvanja: zvanja
  setNewZvanja: React.Dispatch<React.SetStateAction<zvanja>>
  newScore: scores
  setNewScore: React.Dispatch<React.SetStateAction<scores>>
}

export default function Calling({id, calling, newZvanja, setNewZvanja, newScore, setNewScore}: Props){
  let callingId: keyof (typeof newZvanja)[typeof id];
  let maxValue: 8 | 7 | 6 | 2 | 1;
  switch(calling){
    case "20":
      callingId="dvadeset";
      maxValue=8;
      break;
    case "50":
      callingId="pedeset";
      maxValue=7;
      break;
    case "100":
      callingId="sto";
      maxValue=6;
      break;
    case "BELOT":
      callingId="belot";
      maxValue=2;
      break;
    case "STIGLJA":
      callingId="stiglja";
      maxValue=1;
      break;
  }

  useEffect(()=>{
    if(newZvanja[id].stiglja===1)
      setNewScore({
        first: (id==="firstPlayer")? newScore.first: 0,
        second: (id==="secondPlayer")? newScore.second: 0,
        stiglja: true
      })
    else
      setNewScore(prev=>({...prev, stiglja: false}))
  },[newZvanja[id].stiglja])

  return(
    <View style={stylesAddCalling.container}>
      <View style={stylesAddCalling.left_container}>
        <Text style={stylesAddCalling.left_text}>
          {newZvanja[id][callingId]!==0 && `${newZvanja[id][callingId]}x`}
        </Text>
      </View>
      <TouchableOpacity 
        style={stylesAddCalling.middle_container}
        onPress={()=>{
          if(newZvanja[id][callingId]<maxValue){
            if(callingId==='stiglja' && newScore.stiglja)
              return;
            setNewZvanja(prev=>({
              ...prev,
              [id]: {
                ...prev[id],
                [callingId]: prev[id][callingId]+1
              }
            }))
          }
        }}
        activeOpacity={1}
      >
        <Text style={stylesAddCalling.middle_text}>{calling}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={stylesAddCalling.image_container}
        onPress={()=>{
          if(newZvanja[id][callingId]>0)
            setNewZvanja(prev=>({
              ...prev,
              [id]: {
                ...prev[id],
                [callingId]: prev[id][callingId]-1
              }
            }))
        }}
        activeOpacity={1}
      >
        {newZvanja[id][callingId] && (
        <Image style={stylesAddCalling.image} source={require('../icons_and_images/trash_white.png')}/>)}
      </TouchableOpacity>
    </View>
  )
}
