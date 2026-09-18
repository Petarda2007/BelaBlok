import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { stylesScoreBar } from "../../styles";

type Props={
  first: number,
  second: number,
  setShowWhoDeals: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PartijaScoreBar({first, second, setShowWhoDeals}: Props){
  
  return(
    <TouchableOpacity style={stylesScoreBar.bar} onPress={()=>setShowWhoDeals(true)} activeOpacity={1}>
      <Text style={stylesScoreBar.score_text}>{first}</Text>
      <Text style={stylesScoreBar.score_text}> - </Text>
      <Text style={stylesScoreBar.score_text}>{second}</Text>
    </TouchableOpacity>
  )
}