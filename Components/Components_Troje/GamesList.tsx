import * as React from 'react';
import { ScrollView } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { belaTroje_t, RootStackParamList } from '../../types';

import Game from './Game';

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>
  belaTroje: belaTroje_t,
  setBelaTroje: React.Dispatch<React.SetStateAction<belaTroje_t>>
}

export default function GamesList({navigation, belaTroje, setBelaTroje}: Props){



  return(
    <ScrollView>
      {belaTroje.displayScores.map((scores,index)=>(
        <Game key={index} index={index} scores={scores} navigation={navigation} belaTroje={belaTroje} setBelaTroje={setBelaTroje}/>
      ))}
    </ScrollView>
  )
}
