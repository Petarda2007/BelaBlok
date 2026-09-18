import * as React from 'react';
import { ScrollView } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { commonStyles } from "../styles";

import { useState, useEffect } from 'react';

import { RootStackParamList, belaDvoje_t, zvanja as ImportedZvanje} from '../types';

import InputBar from './Add_Components_Dvoje/InputBar';
import CallingScoreBar from './Add_Components_Dvoje/CallingScoreBar';
import CallingTable from './Add_Components_Dvoje/CallingsTable';
import WhoCalled from './Add_Components_Dvoje/WhoCalled';
import BottomBar from './Add_Components_Dvoje/BottomBar';

import { SafeAreaView } from 'react-native-safe-area-context';

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>,
  belaDvoje: belaDvoje_t,
  setBelaDvoje: React.Dispatch<React.SetStateAction<belaDvoje_t>>,
  smjerKazaljkeNaSatu: boolean,
  route: {params: {it?: number}}
}

export type scores={
  first: number,
  second: number,
  stiglja: boolean
}
export type zvanja={
  firstPlayer: ImportedZvanje,
  secondPlayer: ImportedZvanje
}
export type whoCalled={
  firstPlayer: boolean,
  secondPlayer: boolean,
}
export type displayScores={
  firstPlayer: number,
  secondPlayer: number,
}

export default function Add_Dvoje({navigation, belaDvoje, setBelaDvoje, smjerKazaljkeNaSatu, route}: Props){
  const it=route.params.it ?? -1;
  const [newScore,setNewScore]=useState<scores>({
    first: 0,
    second: 0,
    stiglja: false
  });
  const [newZvanja,setNewZvanja]=useState<zvanja>({
    firstPlayer: {dvadeset: 0, pedeset: 0, sto: 0, belot: 0, stiglja: 0},
    secondPlayer: {dvadeset: 0, pedeset: 0, sto: 0, belot: 0, stiglja: 0}
  });
  const [newWhoCalled,setNewWhoCalled]=useState<whoCalled>({
    firstPlayer: true,
    secondPlayer: false
  });
  useEffect(()=>{
    if(it!==undefined && it!==-1){
      setNewScore(belaDvoje.scores[it]);
      setNewZvanja(belaDvoje.zvanja[it]);
      setNewWhoCalled(belaDvoje.whoCalled[it]);
    }
  },[it]);

  return(
      <SafeAreaView style={commonStyles.page}>
        <InputBar newScore={newScore} setNewScore={setNewScore} newZvanja={newZvanja} setNewZvanja={setNewZvanja}/>
        <CallingScoreBar newZvanja={newZvanja}/>
        <CallingTable newZvanja={newZvanja} setNewZvanja={setNewZvanja} newScore={newScore} setNewScore={setNewScore}/>
        <WhoCalled belaDvoje={belaDvoje} newScore={newScore} newWhoCalled={newWhoCalled} setNewWhoCalled={setNewWhoCalled}/>

        <ScrollView></ScrollView>

        <BottomBar navigation={navigation} setBelaDvoje={setBelaDvoje} newScore={newScore} newZvanja={newZvanja} newWhoCalled={newWhoCalled} smjerKazaljkeNaSatu={smjerKazaljkeNaSatu} it={it}/>
      </SafeAreaView>
  )
}