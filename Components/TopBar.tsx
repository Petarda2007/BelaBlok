import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { stylesTopBar } from "../styles";
import { RootStackParamList,  belaCetvero_t, belaDvoje_t, belaTroje_t } from '../types'

type Props={
  priv: "4" | "2" | "3",
  navigation: NativeStackNavigationProp<RootStackParamList>,
  belaDvoje?: belaDvoje_t,
  setBelaDvoje?: React.Dispatch<React.SetStateAction<belaDvoje_t>>,
  belaCetvero?: belaCetvero_t,
  setBelaCetvero?: React.Dispatch<React.SetStateAction<belaCetvero_t>>,
  belaTroje?: belaTroje_t,
  setBelaTroje?: React.Dispatch<React.SetStateAction<belaTroje_t>>,
  setShowResumeSaveDelete: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TopBar({priv, navigation, setBelaCetvero, setBelaTroje, setBelaDvoje, setShowResumeSaveDelete}: Props){
  const handleClickTrash=()=>{
    if(priv==="4"){
      setBelaCetvero?.({
        firstTeam: "",
        secondTeam: "",
        zvanja: [],
        scores: [],
        whoCalled: [],
        partijaScores: {firstTeam: 0, secondTeam: 0},
        displayScores: [],
        turn: "Ja",
      })
    }else if(priv==="3"){
      setBelaTroje?.({
        firstPlayer: "",
        secondPlayer: "",
        thirdPlayer: "",
        zvanja: [],
        scores: [],
        whoCalled: [],
        partijaScores: {firstPlayer: 0, secondPlayer: 0, thirdPlayer: 0},
        displayScores: [],
        turn: "Ja",
      })
    }else{
      setBelaDvoje?.({
        firstPlayer: "",
        secondPlayer: "",
        zvanja: [],
        scores: [],
        whoCalled: [],
        partijaScores: {firstPlayer: 0, secondPlayer: 0},
        displayScores: [],
        turn: "Ja",
      })
    }
  }

  return(
    <View style={stylesTopBar.top_bar}>
      <TouchableOpacity style={stylesTopBar.top_bar_left_container} onPress={()=>navigation.navigate('Home')} activeOpacity={0.8}>
        <Image style={stylesTopBar.top_bar_back_img} source={require('./icons_and_images/Back.png')}/>
        <Text style={stylesTopBar.top_bar_text}>Home</Text>
      </TouchableOpacity>
      <View style={stylesTopBar.top_bar_right_container}>
        <TouchableOpacity onPress={()=>setShowResumeSaveDelete(true)} activeOpacity={0.8}>
          <Image style={stylesTopBar.top_bar_trash_img} source={require('./icons_and_images/settings.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}