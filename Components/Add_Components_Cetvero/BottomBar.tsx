import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { stylesAddBottomBar } from "../../styles";

import { RootStackParamList, belaCetvero_t } from '../../types';
import { scores, zvanja, whoCalled, displayScores } from '../Add_Cetvero';

import { useRef } from 'react';

import { SumZvanja } from '../functions';

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>
  setBelaCetvero: React.Dispatch<React.SetStateAction<belaCetvero_t>>
  newScore: scores
  newZvanja: zvanja
  newWhoCalled: whoCalled,
  smjerKazaljkeNaSatu: boolean,
  it: number
}

function CalcDisplayScore(newScore: scores, newZvanja: zvanja, newWhoCalled: whoCalled): displayScores{
  let firstTeam: number=0;
  let secondTeam: number=0;
  const fullIgra: number=162+SumZvanja(newZvanja.firstTeam)+SumZvanja(newZvanja.secondTeam);
  if(newZvanja.firstTeam.stiglja===1){
    firstTeam=fullIgra;
  }else if(newZvanja.secondTeam.stiglja===1){
    secondTeam=fullIgra;
  }else if((newScore.first+SumZvanja(newZvanja.firstTeam)>fullIgra/2 && newWhoCalled.firstTeam) || 
           (newScore.second+SumZvanja(newZvanja.secondTeam)>fullIgra/2 && newWhoCalled.secondTeam)){
    firstTeam=newScore.first+SumZvanja(newZvanja.firstTeam);
    secondTeam=newScore.second+SumZvanja(newZvanja.secondTeam);
  }else if(newScore.first+SumZvanja(newZvanja.firstTeam)<=fullIgra/2 && newWhoCalled.firstTeam){
    secondTeam=fullIgra;
  }else if(newScore.second+SumZvanja(newZvanja.secondTeam)<=fullIgra/2 && newWhoCalled.secondTeam){
    firstTeam=fullIgra;
  }
  return {firstTeam, secondTeam};
}

function NewTurn(turn: "Ja" | "Lijevi Protivnik" | "Desni Protivnik" | "Partner", smjerKazaljkeNaSatu: boolean){
  switch(turn){
    case "Ja":
      turn=(smjerKazaljkeNaSatu)? "Lijevi Protivnik": "Desni Protivnik";
      break;
    case "Desni Protivnik":
      turn=(smjerKazaljkeNaSatu)? "Ja": "Partner";
      break;
    case "Partner":
      turn=(smjerKazaljkeNaSatu)? "Desni Protivnik": "Lijevi Protivnik";
      break;
    case "Lijevi Protivnik":
      turn=(smjerKazaljkeNaSatu)? "Partner": "Ja";
      break;
  }
  return turn;
}

export default function BottomBar({navigation, setBelaCetvero, newScore, newZvanja, newWhoCalled, smjerKazaljkeNaSatu, it}: Props){
  const isSaving=useRef(false);
  
  const saveData=async()=>{
    if(isSaving.current) return;
    isSaving.current=true;
    try{
      await handleSave();
      navigation.navigate('Bela_Cetvero');
    }catch(e){
      console.error(e);
    }finally{
      isSaving.current=false;
    }
  }

  const handleSave=async()=>{
    if(newScore.first+newScore.second!==162)
      return;
    const displayScore=CalcDisplayScore(newScore, newZvanja, newWhoCalled);
    if(it===-1){
      setBelaCetvero(prev=>({
        ...prev,
        scores: [...prev.scores, {...newScore}],
        zvanja: [...prev.zvanja, {...newZvanja}],
        whoCalled: [...prev.whoCalled, {...newWhoCalled}],
        displayScores: [...prev.displayScores, displayScore],
        turn: NewTurn(prev.turn, smjerKazaljkeNaSatu)
      }));
    }else{
      setBelaCetvero(prev=>({
        ...prev,
        scores: prev.scores.map((item, index)=>index===it? {...newScore}: item),
        zvanja: prev.zvanja.map((item, index)=>index===it? {...newZvanja}: item),
        whoCalled: prev.whoCalled.map((item, index)=>index===it? {...newWhoCalled}: item),
        displayScores: prev.displayScores.map((item, index)=>index===it? displayScore: item)
      }));
    }
  }
  return(
    <View style={stylesAddBottomBar.bar}>
      <TouchableOpacity style={stylesAddBottomBar.left_container} activeOpacity={1} onPress={()=>navigation.navigate('Bela_Cetvero')}>
        <Text style={stylesAddBottomBar.text_cancle}>Odbaci</Text>
      </TouchableOpacity>
      <TouchableOpacity style={(newScore.first+newScore.second===162)? stylesAddBottomBar.right_container_yes: stylesAddBottomBar.right_container_not} onPress={()=>saveData()} disabled={isSaving.current || (newScore.first+newScore.second!==162)} activeOpacity={1}>
        <Text style={(newScore.first+newScore.second===162)? stylesAddBottomBar.text_save_yes: stylesAddBottomBar.text_save_not}>Spremi</Text>
      </TouchableOpacity>
    </View>
  )
}
