import * as React from 'react';
import { ScrollView } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList, belaDvoje_t } from '../../types';

import Game from './Game';

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>
  belaDvoje: belaDvoje_t,
  setBelaDvoje: React.Dispatch<React.SetStateAction<belaDvoje_t>>
}

export default function GamesList({navigation, belaDvoje, setBelaDvoje}: Props){

  return(
    <ScrollView>
      {belaDvoje.displayScores.map((scores,index)=>(
        <Game key={index} index={index} scores={scores} navigation={navigation} belaDvoje={belaDvoje} setBelaDvoje={setBelaDvoje}/>
      ))}
    </ScrollView>
  )
}
