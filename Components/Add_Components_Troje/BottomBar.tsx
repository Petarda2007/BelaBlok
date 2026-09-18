import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { stylesAddBottomBar } from "../../styles";

import { RootStackParamList, belaTroje_t } from '../../types';
import { scores, zvanja, whoCalled, displayScores } from '../Add_Troje';

import { useRef } from 'react';

import { SumZvanja } from '../functions';

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>
  setBelaTroje: React.Dispatch<React.SetStateAction<belaTroje_t>>
  newScore: scores
  newZvanja: zvanja
  newWhoCalled: whoCalled
  smjerKazaljkeNaSatu: boolean,
  it: number  
}

function CalcDisplayScore(newScore: scores, newZvanja: zvanja, newWhoCalled: whoCalled): displayScores{
  let firstPlayer: number=0;
  let secondPlayer: number=0;
  let thirdPlayer: number=0;
  const fullIgra: number=newScore.maxScore+SumZvanja(newZvanja.firstPlayer)+SumZvanja(newZvanja.secondPlayer)+SumZvanja(newZvanja.thirdPlayer);
  if(newZvanja.firstPlayer.stiglja===1){
    firstPlayer=fullIgra;
  }else if(newZvanja.secondPlayer.stiglja===1){
    secondPlayer=fullIgra;
  }else if(newZvanja.thirdPlayer.stiglja===1){
    thirdPlayer=fullIgra;
  }else if((newScore.first+SumZvanja(newZvanja.firstPlayer)>fullIgra/2 && newWhoCalled.firstPlayer) ||
           (newScore.second+SumZvanja(newZvanja.secondPlayer)>fullIgra/2 && newWhoCalled.secondPlayer) ||
           (newScore.third+SumZvanja(newZvanja.thirdPlayer)>fullIgra/2 && newWhoCalled.thirdPlayer)){
    firstPlayer=newScore.first+SumZvanja(newZvanja.firstPlayer);
    secondPlayer=newScore.second+SumZvanja(newZvanja.secondPlayer);
    thirdPlayer=newScore.third+SumZvanja(newZvanja.thirdPlayer);
  }else if(newScore.first+SumZvanja(newZvanja.firstPlayer)<=fullIgra/2 && newWhoCalled.firstPlayer){
    secondPlayer=newScore.second+SumZvanja(newZvanja.secondPlayer);
    thirdPlayer=newScore.third+SumZvanja(newZvanja.thirdPlayer);
  }else if(newScore.second+SumZvanja(newZvanja.secondPlayer)<=fullIgra/2 && newWhoCalled.secondPlayer){
    firstPlayer=newScore.first+SumZvanja(newZvanja.firstPlayer);
    thirdPlayer=newScore.third+SumZvanja(newZvanja.thirdPlayer);
  }else if(newScore.third+SumZvanja(newZvanja.thirdPlayer)<=fullIgra/2 && newWhoCalled.thirdPlayer){
    firstPlayer=newScore.first+SumZvanja(newZvanja.firstPlayer);
    secondPlayer=newScore.second+SumZvanja(newZvanja.secondPlayer);
  }

  return {firstPlayer, secondPlayer, thirdPlayer}
}

function NewTurn(turn: "Ja" | "Lijevi Protivnik" | "Desni Protivnik", smjerKazaljkeNaSatu: boolean){
  switch(turn){
    case "Ja":
      turn=(smjerKazaljkeNaSatu)? "Lijevi Protivnik" : "Desni Protivnik";
      break;
    case "Desni Protivnik":
      turn=(smjerKazaljkeNaSatu)? "Ja" : "Lijevi Protivnik";
      break;
    case "Lijevi Protivnik":
      turn=(smjerKazaljkeNaSatu)? "Desni Protivnik" : "Ja";
      break;
  }
  return turn;
}

export default function BottomBar({navigation, setBelaTroje, newScore, newZvanja, newWhoCalled, smjerKazaljkeNaSatu, it}: Props){
  const isSaving=useRef(false);
  
  const saveData=async()=>{
    if(isSaving.current) return;
    isSaving.current=true;
    try{
      await handleSave();
      navigation.navigate('Bela_Troje');
    }catch(e){
      console.error(e);
    }finally{
      isSaving.current=false;
    }
  }

  const handleSave=async()=>{
    if(newScore.first+newScore.second+newScore.third!==newScore.maxScore)
      return;
    const displayScore=CalcDisplayScore(newScore, newZvanja, newWhoCalled);
    if(it===-1){
      setBelaTroje(prev=>({
        ...prev,
        scores: [...prev.scores, {...newScore}],
        zvanja: [...prev.zvanja, {...newZvanja}],
        whoCalled: [...prev.whoCalled, {...newWhoCalled}],
        displayScores: [...prev.displayScores, displayScore],
        turn: NewTurn(prev.turn, smjerKazaljkeNaSatu)
      }));
    }else{
      setBelaTroje(prev=>({
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
      <TouchableOpacity style={stylesAddBottomBar.left_container} activeOpacity={1} onPress={()=>navigation.navigate('Bela_Troje')}>
        <Text style={stylesAddBottomBar.text_cancle}>Odbaci</Text>
      </TouchableOpacity>
      <TouchableOpacity style={(newScore.first+newScore.second+newScore.third===newScore.maxScore)? stylesAddBottomBar.right_container_yes: stylesAddBottomBar.right_container_not} onPress={()=>saveData()} disabled={isSaving.current || (newScore.first+newScore.second+newScore.third!==newScore.maxScore)} activeOpacity={1}>
        <Text style={(newScore.first+newScore.second+newScore.third===newScore.maxScore)? stylesAddBottomBar.text_save_yes: stylesAddBottomBar.text_save_not}>Spremi</Text>
      </TouchableOpacity>
    </View>
  )
}
