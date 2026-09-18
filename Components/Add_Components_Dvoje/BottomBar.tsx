import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { stylesAddBottomBar } from "../../styles";

import { RootStackParamList, belaDvoje_t } from '../../types';
import { scores, zvanja, whoCalled, displayScores } from '../Add_Dvoje';

import { useRef } from 'react';

import { SumZvanja } from '../functions';

type Props={
  navigation: NativeStackNavigationProp<RootStackParamList>
  setBelaDvoje: React.Dispatch<React.SetStateAction<belaDvoje_t>>
  newScore: scores
  newZvanja: zvanja
  newWhoCalled: whoCalled
  smjerKazaljkeNaSatu: boolean,
  it: number
}

function CalcDisplayScore(newScore: scores, newZvanja: zvanja, newWhoCalled: whoCalled): displayScores{
  let firstPlayer: number=0;
  let secondPlayer: number=0;
  const fullIgra: number=newScore.first+newScore.second+SumZvanja(newZvanja.firstPlayer)+SumZvanja(newZvanja.secondPlayer);
  if(newZvanja.firstPlayer.stiglja===1){
    firstPlayer=fullIgra;
  }else if(newZvanja.secondPlayer.stiglja===1){
    secondPlayer=fullIgra;
  }else if((newScore.first+SumZvanja(newZvanja.firstPlayer)>fullIgra/2 && newWhoCalled.firstPlayer) || 
           (newScore.second+SumZvanja(newZvanja.secondPlayer)>fullIgra/2 && newWhoCalled.secondPlayer)){
    firstPlayer=newScore.first+SumZvanja(newZvanja.firstPlayer);
    secondPlayer=newScore.second+SumZvanja(newZvanja.secondPlayer);
  }else if(newScore.first+SumZvanja(newZvanja.firstPlayer)<=fullIgra/2 && newWhoCalled.firstPlayer){
    secondPlayer=fullIgra;
  }else if(newScore.second+SumZvanja(newZvanja.secondPlayer)<=fullIgra/2 && newWhoCalled.secondPlayer){
    firstPlayer=fullIgra;
  }
  return {firstPlayer, secondPlayer}
}

function NewTurn(turn: "Ja" | "Protivnik", smjerKazaljkeNaSatu: boolean){
  switch(turn){
    case "Ja":
      turn="Protivnik";
      break;
    case "Protivnik":
      turn="Ja";
      break;
  }
  return turn;
}

export default function BottomBar({navigation, setBelaDvoje, newScore, newZvanja, newWhoCalled, smjerKazaljkeNaSatu, it}: Props){
  const isSaving=useRef(false);
  
  const saveData=async()=>{
    if(isSaving.current) return;
    isSaving.current=true;
    try{
      await handleSave();
      navigation.navigate('Bela_Dvoje');
    }catch(e){
      console.error(e);
    }finally{
      isSaving.current=false;
    }
  }

  const handleSave=async()=>{
    if(newScore.first+newScore.second>162 && newScore.first+newScore.second<2)
      return;
    const displayScore=CalcDisplayScore(newScore, newZvanja, newWhoCalled);
    if(it===-1){
      setBelaDvoje(prev=>({
        ...prev,
        scores: [...prev.scores, {...newScore}],
        zvanja: [...prev.zvanja, {...newZvanja}],
        whoCalled: [...prev.whoCalled, {...newWhoCalled}],
        displayScores: [...prev.displayScores, displayScore],
        turn: NewTurn(prev.turn, smjerKazaljkeNaSatu)
      }));
    }else{
      setBelaDvoje(prev=>({
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
      <TouchableOpacity style={stylesAddBottomBar.left_container} activeOpacity={1} onPress={()=>navigation.navigate('Bela_Dvoje')}>
        <Text style={stylesAddBottomBar.text_cancle}>Odbaci</Text>
      </TouchableOpacity>
      <TouchableOpacity style={(newScore.first+newScore.second>0)? stylesAddBottomBar.right_container_yes: stylesAddBottomBar.right_container_not} onPress={()=>saveData()} disabled={isSaving.current || !(newScore.first+newScore.second>0)} activeOpacity={1}>
        <Text style={(newScore.first+newScore.second>0)? stylesAddBottomBar.text_save_yes: stylesAddBottomBar.text_save_not}>Spremi</Text>
      </TouchableOpacity>
    </View>
  )
}
