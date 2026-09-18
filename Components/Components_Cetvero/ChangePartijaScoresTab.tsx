import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { stylesChangePartijaScores } from "../../styles";

import { useState } from 'react';

import { belaCetvero_t } from '../../types';

import PartijaScores from './PartijaScore';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props={
  belaCetvero: belaCetvero_t,
  setBelaCetvero: React.Dispatch<React.SetStateAction<belaCetvero_t>>,
  showChangePartijaScores: boolean,
  setShowChangePartijaScores: React.Dispatch<React.SetStateAction<boolean>>
}

export type PartijaScores=belaCetvero_t['partijaScores'];

export default function ChangePartijaScoresTab({belaCetvero, setBelaCetvero, setShowChangePartijaScores}: Props){
  const [newPartijaScore, setNewPartijaScore]=useState<PartijaScores>({
    firstTeam: belaCetvero.partijaScores.firstTeam, 
    secondTeam: belaCetvero.partijaScores.secondTeam
  })
  const handelClick=()=>{
    setBelaCetvero(prev=>({
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
          <PartijaScores id='firstTeam' newPartijaScore={newPartijaScore} setNewPartijaScore={setNewPartijaScore}/>
          <PartijaScores id='secondTeam' newPartijaScore={newPartijaScore} setNewPartijaScore={setNewPartijaScore}/>
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