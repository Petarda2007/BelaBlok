import * as React from 'react';
import { View } from "react-native";
import { stylesAddCallingTable } from "../../styles";

import { zvanja, scores } from '../Add_Dvoje';

import CallingCol from './CallingCol';

type Props={
  newZvanja: zvanja
  setNewZvanja: React.Dispatch<React.SetStateAction<zvanja>>
  newScore: scores
  setNewScore: React.Dispatch<React.SetStateAction<scores>>
}

export default function CallingTable({newZvanja, setNewZvanja, newScore, setNewScore}: Props){
  return(
    <View style={stylesAddCallingTable.container}>
      <CallingCol id="firstPlayer" newZvanja={newZvanja} setNewZvanja={setNewZvanja} newScore={newScore} setNewScore={setNewScore}/>
      <CallingCol id="secondPlayer" newZvanja={newZvanja} setNewZvanja={setNewZvanja} newScore={newScore} setNewScore={setNewScore}/>
    </View>
  )
}
