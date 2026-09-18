import * as React from 'react';
import { View, TextInput } from "react-native";
import { stylesAddInput } from "../../styles";

import { scores, zvanja } from '../Add_Dvoje';

type Props={
  id: 'first' | 'second'
  newScore: scores
  setNewScore: React.Dispatch<React.SetStateAction<scores>>
  newZvanja: zvanja
}

export default function Input({id, newScore, setNewScore, newZvanja}: Props){
  const maxScore=160;
  const otherId=(id==="first")? "second": "first";
  let stigljaId: "firstPlayer" | "secondPlayer";
  stigljaId=(id!=="first")? "firstPlayer": "secondPlayer";

  const hadleTextChange=(text: string)=>{
    if(/^(0|[1-9]\d*)$|^$/.test(text)){
      if(Number(text)>(maxScore-newScore[otherId]))
        text=String(maxScore-newScore[otherId]);
      setNewScore(prev=>({
        ...prev, 
        [id]: Number(text)
      }));
    }
  }
  return(
    <View style={stylesAddInput.text_container}>
      <TextInput
        style={[stylesAddInput.input,(newZvanja[stigljaId].stiglja===1 && {color: 'gray', borderColor: 'gray'})]}
        placeholder='0'
        placeholderTextColor={newZvanja[stigljaId].stiglja===1? 'gray': 'white'}
        value={newScore[id]!==0? String(newScore[id]): ''}
        onChangeText={hadleTextChange}
        selectionColor='white'
        editable={newZvanja[stigljaId].stiglja!==1}
        maxLength={3}
        keyboardType="numeric"
      />
    </View>
  )
}
