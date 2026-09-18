import * as React from 'react';
import { View, TextInput } from "react-native";
import { stylesAddInput } from "../../styles";

import { scores } from '../Add_Troje';

type Props={
  id: 'first' | 'second' | 'third'
  newScore: scores
  setNewScore: React.Dispatch<React.SetStateAction<scores>>
}

export default function Input({id, newScore, setNewScore}: Props){
  const [firstOtherId, secondOtherId]: ['first' | 'second' | 'third', 'first' | 'second' | 'third']= 
  id==='first'? ['second', 'third']:
  id==='second'? ['first', 'third']: ['first', 'second'];

  const hadleTextChange=(text: string)=>{
    if(/^(0|[1-9]\d*)$|^$/.test(text)){
      const maxAllowed=newScore.maxScore-newScore[firstOtherId]-newScore[secondOtherId];
      const value=Math.min(Number(text) || 0, maxAllowed);
      setNewScore(prev=>({
        ...prev, 
        [id]: value
      }));
    }
  }
  return(
    <View style={stylesAddInput.text_container}>
      <TextInput
        style={[stylesAddInput.input,(newScore.stiglja && {color: 'gray', borderColor: 'gray'})]}
        placeholder='0'
        placeholderTextColor={newScore.stiglja? 'gray': 'white'}
        value={newScore[id]!==0? String(newScore[id]): ''}
        onChangeText={hadleTextChange}
        selectionColor='white'
        editable={!newScore.stiglja}
        maxLength={3}
        keyboardType="numeric"
      />
    </View>
  )
}
