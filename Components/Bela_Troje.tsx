import * as React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { commonStyles } from "../styles";

import { useState } from 'react';

import { RootStackParamList, belaTroje_t, SaveData } from '../types';

import TopBar from './TopBar';
import PartijaScoreBar from './Components_Troje/PartijaScoreBar';
import NameBar from './Components_Troje/NameBar';
import GamesList from './Components_Troje/GamesList';
import GamesScoreBar from './Components_Troje/GamesScoreBar';
import BottomBar from './Components_Troje/BottomBar';

import ChangeWhoDeals from './Components_Troje/ChangeWhoDeals';
import ChangePartijaScoresTab from './Components_Troje/ChangePartijaScoresTab';
import ResumeSaveDelete from './ResumeSaveDelete';

import { SafeAreaView } from 'react-native-safe-area-context';

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>,
  belaTroje: belaTroje_t,
  setBelaTroje: React.Dispatch<React.SetStateAction<belaTroje_t>>,
  setSaveData: React.Dispatch<React.SetStateAction<SaveData>>
}

export default function Bela_Troje({navigation, belaTroje, setBelaTroje, setSaveData}: Props){
  const [showWhoDeals, setShowWhoDeals]=useState<boolean>(false);
  const [showChangePartijaScores, setShowChangePartijaScores]=useState<boolean>(false);
  const [showResumeSaveDelete, setShowResumeSaveDelete]=useState<boolean>(false);

  return(
      <SafeAreaView style={commonStyles.page}>
        <TopBar priv="3" navigation={navigation} belaTroje={belaTroje} setBelaTroje={setBelaTroje} setShowResumeSaveDelete={setShowResumeSaveDelete}/> 
        <PartijaScoreBar first={belaTroje?.partijaScores?.firstPlayer ?? 0} second={belaTroje?.partijaScores?.secondPlayer ?? 0} third={belaTroje?.partijaScores?.thirdPlayer ?? 0} setShowWhoDeals={setShowChangePartijaScores}/>
        <NameBar belaTroje={belaTroje} setBelaTroje={setBelaTroje}/>  
        <GamesList navigation={navigation} belaTroje={belaTroje} setBelaTroje={setBelaTroje}/>
        <GamesScoreBar belaTroje={belaTroje}/>
        <BottomBar navigation={navigation} belaTroje={belaTroje} showWhoDeals={showWhoDeals} setShowWhoDeals={setShowWhoDeals}/>

        ({showWhoDeals && <ChangeWhoDeals belaTroje={belaTroje} setBelaTroje={setBelaTroje} showWhoDeals={showWhoDeals} setShowWhoDeals={setShowWhoDeals}/>})

        ({showChangePartijaScores && <ChangePartijaScoresTab belaTroje={belaTroje} setBelaTroje={setBelaTroje} showChangePartijaScores={showChangePartijaScores} setShowChangePartijaScores={setShowChangePartijaScores}/>}) 

        ({showResumeSaveDelete && <ResumeSaveDelete navigation={navigation} id='troje' setShowResumeSaveDelete={setShowResumeSaveDelete} belaTroje={belaTroje} setBelaTroje={setBelaTroje} setSaveData={setSaveData}/>})

      </SafeAreaView>
  )
}