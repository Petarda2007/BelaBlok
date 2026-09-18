import * as React from 'react';
import { ScrollView } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { commonStyles } from "../styles";

import { useState, useEffect } from 'react';

import { RootStackParamList, belaTroje_t, zvanja as ImportedZvanje } from '../types';

import InputBar from './Add_Components_Troje/InputBar';
import CallingScoreBar from './Add_Components_Troje/CallingScoreBar';
import CallingTable from './Add_Components_Troje/CallingsTable';
import WhoCalled from './Add_Components_Troje/WhoCalled';
import BottomBar from './Add_Components_Troje/BottomBar';

import { SafeAreaView } from 'react-native-safe-area-context';

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>
  belaTroje: belaTroje_t
  setBelaTroje: React.Dispatch<React.SetStateAction<belaTroje_t>>
  smjerKazaljkeNaSatu: boolean
  route: {params: {it?: number}}
}

export type scores={
  first: number
  second: number
  third: number
  maxScore: 162 | 152 | 142
  stiglja: boolean
}
export type zvanja={
  firstPlayer: ImportedZvanje
  secondPlayer: ImportedZvanje
  thirdPlayer: ImportedZvanje
}
export type whoCalled={
  firstPlayer: boolean
  secondPlayer: boolean
  thirdPlayer: boolean
}
export type displayScores={
  firstPlayer: number
  secondPlayer: number
  thirdPlayer: number
}

export default function Add_Troje({navigation, belaTroje, setBelaTroje, smjerKazaljkeNaSatu, route}: Props){
  const it=route.params.it ?? -1;
  const [newScore,setNewScore]=useState<scores>({
    first: 0,
    second: 0,
    third: 0,
    maxScore: 162,
    stiglja: false
  });
  const [newZvanja,setNewZvanja]=useState<zvanja>({
    firstPlayer: {dvadeset: 0, pedeset: 0, sto: 0, belot: 0, stiglja: 0},
    secondPlayer: {dvadeset: 0, pedeset: 0, sto: 0, belot: 0, stiglja: 0},
    thirdPlayer: {dvadeset: 0, pedeset: 0, sto: 0, belot: 0, stiglja: 0}
  });
  const [newWhoCalled,setNewWhoCalled]=useState<whoCalled>({
    firstPlayer: true,
    secondPlayer: false,
    thirdPlayer: false
  });
  useEffect(()=>{
    if(it!==undefined && it!==-1){
      setNewScore(belaTroje.scores[it]);
      setNewZvanja(belaTroje.zvanja[it]);
      setNewWhoCalled(belaTroje.whoCalled[it]);
    }
  },[it]);

  return(
      <SafeAreaView style={commonStyles.page}>
        <InputBar newScore={newScore} setNewScore={setNewScore} setNewZvanja={setNewZvanja}/>
        <CallingScoreBar newZvanja={newZvanja}/>
        <CallingTable newZvanja={newZvanja} setNewZvanja={setNewZvanja} newScore={newScore} setNewScore={setNewScore}/>
        <WhoCalled belaTroje={belaTroje} newScore={newScore} newWhoCalled={newWhoCalled} setNewWhoCalled={setNewWhoCalled}/>

        <ScrollView></ScrollView>

        <BottomBar navigation={navigation} setBelaTroje={setBelaTroje} newScore={newScore} newZvanja={newZvanja} newWhoCalled={newWhoCalled} smjerKazaljkeNaSatu={smjerKazaljkeNaSatu} it={it}/>
      </SafeAreaView>
  )
}