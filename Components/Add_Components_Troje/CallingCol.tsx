import * as React from 'react';
import { View } from "react-native";
import { stylesAddCallingCol } from "../../styles";

import { zvanja, scores } from '../Add_Troje';

import Calling from './Calling';

type Props={
  id: "firstPlayer" | "secondPlayer" | "thirdPlayer"
  newZvanja: zvanja
  setNewZvanja: React.Dispatch<React.SetStateAction<zvanja>>
  newScore: scores
  setNewScore: React.Dispatch<React.SetStateAction<scores>>
}

export default function CallingCol({id, newZvanja, setNewZvanja, newScore, setNewScore}: Props){
  return(
    <View style={stylesAddCallingCol.col}>
      <Calling id={id} calling="20" newZvanja={newZvanja} setNewZvanja={setNewZvanja} newScore={newScore} setNewScore={setNewScore}/>
      <Calling id={id} calling="50" newZvanja={newZvanja} setNewZvanja={setNewZvanja} newScore={newScore} setNewScore={setNewScore}/>
      <Calling id={id} calling="100" newZvanja={newZvanja} setNewZvanja={setNewZvanja} newScore={newScore} setNewScore={setNewScore}/>
      <Calling id={id} calling="BELOT" newZvanja={newZvanja} setNewZvanja={setNewZvanja} newScore={newScore} setNewScore={setNewScore}/>
      <Calling id={id} calling="STIGLJA" newZvanja={newZvanja} setNewZvanja={setNewZvanja} newScore={newScore} setNewScore={setNewScore}/>
    </View>
  )
}
