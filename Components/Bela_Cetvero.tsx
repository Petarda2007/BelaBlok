import * as React from 'react';
import { View, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { commonStyles } from "../styles";

import { useState } from 'react';

import { RootStackParamList, belaCetvero_t, SaveData } from '../types';

import TopBar from './TopBar';
import PartijaScoreBar from './Components_Cetvero/PartijaScoreBar';
import NameBar from './Components_Cetvero/NameBar';
import GamesList from './Components_Cetvero/GamesList';
import GamesScoreBar from './Components_Cetvero/GamesScoreBar';
import BottomBar from './Components_Cetvero/BottomBar';

import ChangeWhoDeals from './Components_Cetvero/ChangeWhoDeals';
import ChangePartijaScoresTab from './Components_Cetvero/ChangePartijaScoresTab';
import ResumeSaveDelete from './ResumeSaveDelete';

import { SafeAreaView } from 'react-native-safe-area-context';

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>,
  belaCetvero: belaCetvero_t,
  setBelaCetvero: React.Dispatch<React.SetStateAction<belaCetvero_t>>,
  setSaveData: React.Dispatch<React.SetStateAction<SaveData>>
}

export default function Bela_Cetvero({navigation, belaCetvero, setBelaCetvero, setSaveData}: Props){
  const [showWhoDeals, setShowWhoDeals]=useState<boolean>(false);
  const [showChangePartijaScores, setShowChangePartijaScores]=useState<boolean>(false);
  const [showResumeSaveDelete, setShowResumeSaveDelete]=useState<boolean>(false);
  
  return(
      <SafeAreaView style={commonStyles.page}>
        <TopBar priv="4" navigation={navigation} belaCetvero={belaCetvero} setBelaCetvero={setBelaCetvero} setShowResumeSaveDelete={setShowResumeSaveDelete}/>
        <PartijaScoreBar first={belaCetvero?.partijaScores?.firstTeam ?? 0} second={belaCetvero?.partijaScores?.secondTeam ?? 0} setShowWhoDeals={setShowChangePartijaScores}/>
        <NameBar belaCetvero={belaCetvero} setBelaCetvero={setBelaCetvero}/> 
        <GamesList navigation={navigation} belaCetvero={belaCetvero} setBelaCetvero={setBelaCetvero}/>
        <GamesScoreBar belaCetvero={belaCetvero}/>
        <BottomBar navigation={navigation} belaCetvero={belaCetvero} showWhoDeals={showWhoDeals} setShowWhoDeals={setShowWhoDeals}/> 

        ({showWhoDeals && <ChangeWhoDeals belaCetvero={belaCetvero} setBelaCetvero={setBelaCetvero} showWhoDeals={showWhoDeals} setShowWhoDeals={setShowWhoDeals}/>})

        ({showChangePartijaScores && <ChangePartijaScoresTab belaCetvero={belaCetvero} setBelaCetvero={setBelaCetvero} showChangePartijaScores={showChangePartijaScores} setShowChangePartijaScores={setShowChangePartijaScores}/>})

        ({showResumeSaveDelete && <ResumeSaveDelete navigation={navigation} id='cetvero' setShowResumeSaveDelete={setShowResumeSaveDelete} belaCetvero={belaCetvero} setBelaCetvero={setBelaCetvero} setSaveData={setSaveData}/>})

      </SafeAreaView>
  )
}