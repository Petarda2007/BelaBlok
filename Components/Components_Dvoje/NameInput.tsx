import * as React from 'react';
import { TextInput } from "react-native";
import { stylesNameBar } from "../../styles";

import { belaDvoje_t } from '../../types';

type Props={
  palceHolderProp: "Player 1" | "Player 2",
  belaDvoje: belaDvoje_t,
  setBelaDvoje: React.Dispatch<React.SetStateAction<belaDvoje_t>>
}

export default function NameInput({palceHolderProp, belaDvoje, setBelaDvoje}: Props){
  return(
    <TextInput 
      style={stylesNameBar.name_bar_text}
      placeholder={palceHolderProp}
      placeholderTextColor='white'
      value={palceHolderProp==="Player 1"? belaDvoje.firstPlayer: belaDvoje.secondPlayer}
      onChangeText={(text)=>
        setBelaDvoje(prev=>({
          ...prev, 
          [palceHolderProp==="Player 1"? "firstPlayer": "secondPlayer"]: text
        }))
      }
      selectionColor='white'
      maxLength={8}   
    />
  )
}