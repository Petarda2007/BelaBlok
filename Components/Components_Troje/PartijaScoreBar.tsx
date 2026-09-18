import * as React from 'react';
import { Text, TouchableOpacity } from "react-native";
import { stylesScoreBar } from "../../styles";

type Props={
  first: number,
  second: number,
  third: number,
  setShowWhoDeals: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PartijaScoreBar({first, second, third, setShowWhoDeals}: Props){
  return(
    <TouchableOpacity style={[stylesScoreBar.bar, {width: '47%'}]} onPress={()=>setShowWhoDeals(true)} activeOpacity={1}>
      <Text style={stylesScoreBar.score_text}>{first}</Text>
      <Text style={stylesScoreBar.score_text}> - </Text>
      <Text style={stylesScoreBar.score_text}>{second}</Text>
      <Text style={stylesScoreBar.score_text}> - </Text>
      <Text style={stylesScoreBar.score_text}>{third}</Text>
    </TouchableOpacity>
  )
}