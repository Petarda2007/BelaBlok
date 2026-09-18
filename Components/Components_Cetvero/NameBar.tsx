import * as React from 'react';
import { View } from "react-native";
import { stylesNameBar } from "../../styles";

import { belaCetvero_t } from '../../types';

import NameInput from './NameInput';

type Props={
  belaCetvero: belaCetvero_t,
  setBelaCetvero: React.Dispatch<React.SetStateAction<belaCetvero_t>>
}

export default function NameBar({belaCetvero, setBelaCetvero}: Props){

  return(
    <View style={stylesNameBar.bar}>
      <NameInput palceHolderProp={"Team 1"} belaCetvero={belaCetvero} setBelaCetvero={setBelaCetvero}/>
      <NameInput palceHolderProp={"Team 2"} belaCetvero={belaCetvero} setBelaCetvero={setBelaCetvero}/>
    </View>
  )
}
