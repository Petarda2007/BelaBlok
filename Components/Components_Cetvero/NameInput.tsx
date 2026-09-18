import * as React from 'react';
import { TextInput } from "react-native";
import { stylesNameBar } from "../../styles";

import { belaCetvero_t } from '../../types';

type Props={
  palceHolderProp: "Team 1" | "Team 2",
  belaCetvero: belaCetvero_t,
  setBelaCetvero: React.Dispatch<React.SetStateAction<belaCetvero_t>>
}

export default function NameInput({palceHolderProp, belaCetvero, setBelaCetvero}: Props){

  const player: "firstTeam" | "secondTeam"=(palceHolderProp==='Team 1')?"firstTeam": "secondTeam";
  const handleInput=(text: string)=>{
    if(text.length>8)
      return;
    else
      setBelaCetvero(prev=>({
          ...prev, 
          [palceHolderProp==="Team 1"? "firstTeam": "secondTeam"]: text
      }));
  }

  return(
    <TextInput 
      style={stylesNameBar.name_bar_text}
      placeholder={palceHolderProp}
      placeholderTextColor='white'
      value={belaCetvero[player]}
      onChangeText={handleInput}
      selectionColor='white'
      maxLength={10}  
    />
  )
}