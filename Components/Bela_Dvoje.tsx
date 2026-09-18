import * as React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { commonStyles } from "../styles";

import { RootStackParamList, belaDvoje_t, SaveData } from '../types';

import { useState } from 'react';

import TopBar from './TopBar';
import PartijaScoreBar from './Components_Dvoje/PartijaScoreBar';
import NameBar from './Components_Dvoje/NameBar';
import GamesList from './Components_Dvoje/GamesList';
import GamesScoreBar from './Components_Dvoje/GamesScoreBar';
import BottomBar from './Components_Dvoje/BottomBar';

import ChangePartijaScoresTab from './Components_Dvoje/ChangePartijaScoresTab';
import ResumeSaveDelete from './ResumeSaveDelete';

import { SafeAreaView } from 'react-native-safe-area-context';

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>,
  belaDvoje: belaDvoje_t,
  setBelaDvoje: React.Dispatch<React.SetStateAction<belaDvoje_t>>,
  setSaveData: React.Dispatch<React.SetStateAction<SaveData>>
}

export default function Bela_Dvoje({navigation, belaDvoje, setBelaDvoje, setSaveData}: Props){
  const [showChangePartijaScores, setShowChangePartijaScores]=useState<boolean>(false);
  const [showResumeSaveDelete, setShowResumeSaveDelete]=useState<boolean>(false);

  return(
      <SafeAreaView style={commonStyles.page}>
        <TopBar priv="2" navigation={navigation} belaDvoje={belaDvoje} setBelaDvoje={setBelaDvoje} setShowResumeSaveDelete={setShowResumeSaveDelete}/>  
        <PartijaScoreBar first={belaDvoje?.partijaScores?.firstPlayer ?? 0} second={belaDvoje?.partijaScores?.secondPlayer ?? 0} setShowWhoDeals={setShowChangePartijaScores}/>  
        <NameBar belaDvoje={belaDvoje} setBelaDvoje={setBelaDvoje}/>
        <GamesList navigation={navigation} belaDvoje={belaDvoje} setBelaDvoje={setBelaDvoje}/>
        <GamesScoreBar belaDvoje={belaDvoje}/>
        <BottomBar navigation={navigation} belaDvoje={belaDvoje} setBelaDvoje={setBelaDvoje}/>

        ({showChangePartijaScores && <ChangePartijaScoresTab belaDvoje={belaDvoje} setBelaDvoje={setBelaDvoje} showChangePartijaScores={showChangePartijaScores} setShowChangePartijaScores={setShowChangePartijaScores}/>})

        ({showResumeSaveDelete && <ResumeSaveDelete navigation={navigation} id='dvoje' setShowResumeSaveDelete={setShowResumeSaveDelete} belaDvoje={belaDvoje} setBelaDvoje={setBelaDvoje} setSaveData={setSaveData}/>})

      </SafeAreaView>
  )
}