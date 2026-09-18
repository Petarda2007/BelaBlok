import * as React from 'react';
import Navigaton from './Navigation.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useState, useEffect } from 'react';

import { belaDvoje_t, belaTroje_t, belaCetvero_t, SaveData } from './types.tsx'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App(){
  const defaultBelaDvoje: belaDvoje_t={
    firstPlayer: "",
    secondPlayer: "",
    zvanja: [],
    scores: [],
    whoCalled: [],
    partijaScores: {firstPlayer: 0, secondPlayer: 0},
    displayScores: [],
    turn: "Ja",
  };
  const defaultBelaTroje: belaTroje_t={
    firstPlayer: "",
    secondPlayer: "",
    thirdPlayer: "",
    zvanja: [],
    scores: [],
    whoCalled: [],
    partijaScores: {firstPlayer: 0, secondPlayer: 0, thirdPlayer: 0},
    displayScores: [],
    turn: "Ja",
  };
  const defaultBelaCetvero: belaCetvero_t={
    firstTeam: "",
    secondTeam: "",
    zvanja: [],
    scores: [],
    whoCalled: [],
    partijaScores: {firstTeam: 0, secondTeam: 0},
    displayScores: [],
    turn: "Ja",
  };
  const defaultSaveData={
    cetvero: [],
    troje: [],
    dvoje: [],
    smjerKazaljkeNaSatu: true
  };

  const [belaDvoje,setBelaDvoje]=useState<belaDvoje_t>(defaultBelaDvoje);
  const [belaTroje,setBelaTroje]=useState<belaTroje_t>(defaultBelaTroje);
  const [belaCetvero,setBelaCetvero]=useState<belaCetvero_t>(defaultBelaCetvero);
  const [saveData,setSaveData]=useState<SaveData>(defaultSaveData);

  useEffect(()=>{
    async function loadDate(){  
      try{
        const storedDvoje=await AsyncStorage.getItem('belaDvoje');
        const storedTroje=await AsyncStorage.getItem('belaTroje');
        const storedCetvero=await AsyncStorage.getItem('belaCetvero');
        const storedSaveData=await AsyncStorage.getItem('SaveData');

        if(storedDvoje) setBelaDvoje(JSON.parse(storedDvoje));
        if(storedTroje) setBelaTroje(JSON.parse(storedTroje));
        if(storedCetvero) setBelaCetvero(JSON.parse(storedCetvero));
        if(storedSaveData) setSaveData(JSON.parse(storedSaveData));
      }catch(err){
        console.error('Failed to load data:',err);
        setBelaDvoje(defaultBelaDvoje);
        setBelaTroje(defaultBelaTroje);
        setBelaCetvero(defaultBelaCetvero);
        setSaveData(defaultSaveData);
      }
    };
    loadDate();
  },[]);

  useEffect(()=>{
    async function SaveData(){
      try{
        await AsyncStorage.setItem('belaDvoje', JSON.stringify(belaDvoje));
        await AsyncStorage.setItem('belaTroje', JSON.stringify(belaTroje));
        await AsyncStorage.setItem('belaCetvero', JSON.stringify(belaCetvero));
        await AsyncStorage.setItem('SaveData', JSON.stringify(saveData));
      }catch(err){
        console.error('Failed to load data:', err);
      }
    }
    SaveData();
  },[belaDvoje, belaTroje, belaCetvero, saveData]);

  return(
    <SafeAreaProvider>
      <Navigaton 
        belaDvoje={belaDvoje}
        setBelaDvoje={setBelaDvoje}
        belaTroje={belaTroje}
        setBelaTroje={setBelaTroje}
        belaCetvero={belaCetvero}
        setBelaCetvero={setBelaCetvero}
        saveData={saveData}
        setSaveData={setSaveData}
      />
    </SafeAreaProvider>
  )
}