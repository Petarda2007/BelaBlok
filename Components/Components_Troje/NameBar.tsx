import * as React from 'react';
import { View } from "react-native";
import { stylesNameBar } from "../../styles";

import { belaTroje_t } from '../../types';

import NameInput from './NameInput';

type Props={
  belaTroje: belaTroje_t,
  setBelaTroje: React.Dispatch<React.SetStateAction<belaTroje_t>>
}

export default function NameBar({belaTroje, setBelaTroje}: Props){



  return(
    <View style={stylesNameBar.bar}>
      <NameInput palceHolderProp={"Player 1"} belaTroje={belaTroje} setBelaTroje={setBelaTroje}/>
      <NameInput palceHolderProp={"Player 2"} belaTroje={belaTroje} setBelaTroje={setBelaTroje}/>
      <NameInput palceHolderProp={"Player 3"} belaTroje={belaTroje} setBelaTroje={setBelaTroje}/>
    </View>
  )
}
