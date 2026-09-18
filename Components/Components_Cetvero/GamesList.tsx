import * as React from 'react';
import { ScrollView } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList, belaCetvero_t } from '../../types';

import Game from './Game';


type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>
  belaCetvero: belaCetvero_t,
  setBelaCetvero: React.Dispatch<React.SetStateAction<belaCetvero_t>>
}

export default function GamesList({navigation, belaCetvero, setBelaCetvero}: Props){
  
  return(
    <ScrollView>
      {belaCetvero.displayScores.map((scores,index)=>(
        <Game key={index} index={index} scores={scores} navigation={navigation} belaCetvero={belaCetvero} setBelaCetvero={setBelaCetvero}/>
      ))}
    </ScrollView>
  )
}
