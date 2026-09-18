import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { stylesChangePartijaScores } from "../../styles";

import { useState } from 'react';

import { belaDvoje_t } from '../../types';

import PartijaScores from './PartijaScore';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props={
  belaDvoje: belaDvoje_t,
  setBelaDvoje: React.Dispatch<React.SetStateAction<belaDvoje_t>>,
  showChangePartijaScores: boolean,
  setShowChangePartijaScores: React.Dispatch<React.SetStateAction<boolean>>
}

export type PartijaScores=belaDvoje_t['partijaScores'];

export default function ChangePartijaScoresTab({belaDvoje, setBelaDvoje, setShowChangePartijaScores}: Props){
  const [newPartijaScore, setNewPartijaScore]=useState<PartijaScores>({
    firstPlayer: belaDvoje.partijaScores.firstPlayer, 
    secondPlayer: belaDvoje.partijaScores.secondPlayer
  })
  const handelClick=()=>{
    setBelaDvoje(prev=>({
      ...prev,
      partijaScores: newPartijaScore
    }));
    setShowChangePartijaScores(false);
  }

  const insets=useSafeAreaInsets();
  
  return(
    <View style={[stylesChangePartijaScores.container, {marginTop: insets.top, marginBottom: insets.bottom}]}>
      <View style={stylesChangePartijaScores.scores_tab}>
        <View style={stylesChangePartijaScores.top_tab_container}>
          <PartijaScores id='firstPlayer' newPartijaScore={newPartijaScore} setNewPartijaScore={setNewPartijaScore}/>
          <PartijaScores id='secondPlayer' newPartijaScore={newPartijaScore} setNewPartijaScore={setNewPartijaScore}/>
        </View>
        <View style={stylesChangePartijaScores.bottom_tab_container}>
          <TouchableOpacity style={[stylesChangePartijaScores.bottom_tab_container_container, {borderRightWidth: 1}]} onPress={()=>setShowChangePartijaScores(false)} activeOpacity={0.8}>
            <Text style={stylesChangePartijaScores.bottom_tab_text}>Odustani</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[stylesChangePartijaScores.bottom_tab_container_container, {borderLeftWidth: 1}]} onPress={handelClick} activeOpacity={0.8}>
            <Text style={stylesChangePartijaScores.bottom_tab_text}>Spremi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}