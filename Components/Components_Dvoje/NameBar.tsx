import * as React from 'react';
import { View} from "react-native";
import { stylesNameBar } from "../../styles";

import { belaDvoje_t } from '../../types';

import NameInput from './NameInput';

type Props={
  belaDvoje: belaDvoje_t,
  setBelaDvoje: React.Dispatch<React.SetStateAction<belaDvoje_t>>
}

export default function NameBar({belaDvoje, setBelaDvoje}: Props){

  return(
    <View style={stylesNameBar.bar}>
      <NameInput palceHolderProp={"Player 1"} belaDvoje={belaDvoje} setBelaDvoje={setBelaDvoje}/>
      <NameInput palceHolderProp={"Player 2"} belaDvoje={belaDvoje} setBelaDvoje={setBelaDvoje}/>
    </View>
  )
}
