import * as React from 'react';
import { TextInput } from "react-native";
import { stylesNameBar } from "../../styles";

import { belaTroje_t } from '../../types';

type Props={
  palceHolderProp: "Player 1" | "Player 2" | "Player 3",
  belaTroje: belaTroje_t,
  setBelaTroje: React.Dispatch<React.SetStateAction<belaTroje_t>>
}

export default function NameInput({palceHolderProp, belaTroje, setBelaTroje}: Props){
  
  return(
    <TextInput 
      style={stylesNameBar.name_bar_text}
      placeholder={palceHolderProp}
      placeholderTextColor='white'
      value={palceHolderProp==="Player 1"? belaTroje.firstPlayer: (palceHolderProp==="Player 2")? belaTroje.secondPlayer: belaTroje.thirdPlayer}
      onChangeText={(text)=>
        setBelaTroje(prev=>({
          ...prev, 
          [palceHolderProp==="Player 1"? "firstPlayer": palceHolderProp==="Player 2"? "secondPlayer": "thirdPlayer"]: text
        }))
      }
      selectionColor='white'
      maxLength={8}   
    />
  )
}