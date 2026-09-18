import * as React from 'react';
import { TextInput } from "react-native";
import { stylesChangePartijaScores } from "../../styles";

import { belaDvoje_t } from '../../types';

type Props={
  id: 'firstPlayer' | 'secondPlayer',
  newPartijaScore: PartijaScores,
  setNewPartijaScore: React.Dispatch<React.SetStateAction<PartijaScores>>,
}

export type PartijaScores=belaDvoje_t['partijaScores'];

export default function PartijaScores({id, newPartijaScore, setNewPartijaScore}: Props){

  const hadleTextChange=(text: string)=>{
    if(/^(0|[1-9]\d*)$|^$/.test(text)){
      setNewPartijaScore(prev=>({
        ...prev, 
        [id]: Number(text)
      }));
    }
  }
  return(
    <TextInput
      style={stylesChangePartijaScores.top_input}
      placeholder='0'
      value={newPartijaScore[id]!==0? String(newPartijaScore[id]): ''}
      onChangeText={hadleTextChange}
      placeholderTextColor='white'
      selectionColor='white'
      maxLength={2}
      keyboardType="numeric"
    />
  )
}