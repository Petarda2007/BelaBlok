import * as React from 'react';
import { ScrollView } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { commonStyles } from "../styles";

import { useState, useEffect } from 'react';

import { RootStackParamList, belaCetvero_t, zvanja as ImportedZvanje } from '../types';

import InputBar from './Add_Components_Cetvero/InputBar';
import CallingScoreBar from './Add_Components_Cetvero/CallingScoreBar';
import CallingTable from './Add_Components_Cetvero/CallingsTable';
import WhoCalled from './Add_Components_Cetvero/WhoCalled';
import BottomBar from './Add_Components_Cetvero/BottomBar';

import { SafeAreaView } from 'react-native-safe-area-context';

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>,
  belaCetvero: belaCetvero_t,
  setBelaCetvero: React.Dispatch<React.SetStateAction<belaCetvero_t>>,
  smjerKazaljkeNaSatu: boolean,
  route: {params: {it?: number}}
}

export type scores={
  first: number,
  second: number,
  stiglja: boolean
}
export type zvanja={
  firstTeam: ImportedZvanje,
  secondTeam: ImportedZvanje
}
export type whoCalled={
  firstTeam: boolean,
  secondTeam: boolean,
}
export type displayScores={
  firstTeam: number,
  secondTeam: number,
}

export default function Add_Cetvero({navigation, belaCetvero, setBelaCetvero, smjerKazaljkeNaSatu, route}: Props){
  const it=route.params.it ?? -1;
  const [newScore,setNewScore]=useState<scores>({
    first: 0,
    second: 0,
    stiglja: false
  });
  const [newZvanja,setNewZvanja]=useState<zvanja>({
    firstTeam: {dvadeset: 0, pedeset: 0, sto: 0, belot: 0, stiglja: 0},
    secondTeam: {dvadeset: 0, pedeset: 0, sto: 0, belot: 0, stiglja: 0}
  });
  const [newWhoCalled,setNewWhoCalled]=useState<whoCalled>({
    firstTeam: true,
    secondTeam: false
  });

  useEffect(()=>{
    if(it!==undefined && it!==-1){
      setNewScore(belaCetvero.scores[it]);
      setNewZvanja(belaCetvero.zvanja[it]);
      setNewWhoCalled(belaCetvero.whoCalled[it]);
    }
  },[it]);

  return(
      <SafeAreaView style={commonStyles.page}>
        <InputBar newScore={newScore} setNewScore={setNewScore} setNewZvanja={setNewZvanja}/>
        <CallingScoreBar newZvanja={newZvanja}/>
        <CallingTable newZvanja={newZvanja} setNewZvanja={setNewZvanja} newScore={newScore} setNewScore={setNewScore}/>
        <WhoCalled belaCetvero={belaCetvero} newWhoCalled={newWhoCalled} setNewWhoCalled={setNewWhoCalled}/>

        <ScrollView></ScrollView>
        
        <BottomBar navigation={navigation} setBelaCetvero={setBelaCetvero} newScore={newScore} newZvanja={newZvanja} newWhoCalled={newWhoCalled} smjerKazaljkeNaSatu={smjerKazaljkeNaSatu} it={it}/>
      </SafeAreaView>
  )
}