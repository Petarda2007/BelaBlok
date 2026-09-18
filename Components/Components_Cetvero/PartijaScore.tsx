import * as React from 'react';
import { TextInput } from "react-native";
import { stylesChangePartijaScores } from "../../styles";

import { belaCetvero_t } from '../../types';

type Props={
  id: 'firstTeam' | 'secondTeam',
  newPartijaScore: PartijaScores,
  setNewPartijaScore: React.Dispatch<React.SetStateAction<PartijaScores>>,
}

export type PartijaScores=belaCetvero_t['partijaScores'];

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