import * as React from 'react';
import { View, TextInput } from "react-native";
import { stylesAddInput } from "../../styles";

import { scores } from '../Add_Cetvero';

type Props={
  id: 'first' | 'second'
  newScore: scores
  setNewScore: React.Dispatch<React.SetStateAction<scores>>
}

export default function Input({id, newScore, setNewScore}: Props){
  const maxScore=162;
  const otherId=(id==="first")? "second": "first";

  const hadleTextChange=(text: string)=>{
    if(/^(0|[1-9]\d*)$|^$/.test(text)){
      if(Number(text)>maxScore)
        text=String(maxScore);
      setNewScore(prev=>({
        ...prev, 
        [id]: Number(text),
        [otherId]: maxScore-Number(text)
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
