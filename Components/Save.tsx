import * as React from 'react';
import { RFValue } from "react-native-responsive-fontsize";
import { View, Text, TouchableOpacity, Image} from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { stylesSave } from "../styles";

import { RootStackParamList, belaCetvero_t, belaTroje_t, belaDvoje_t, SaveData } from '../types';

type Props={
  id: 'cetvero' | 'troje' | 'dvoje',
  navigation: NativeStackNavigationProp<RootStackParamList>,
  setBelaCetvero?: React.Dispatch<React.SetStateAction<belaCetvero_t>>,
  setBelaTroje?: React.Dispatch<React.SetStateAction<belaTroje_t>>,
  setBelaDvoje?: React.Dispatch<React.SetStateAction<belaDvoje_t>>,
  saveData: SaveData,
  setSaveData: React.Dispatch<React.SetStateAction<SaveData>>,
  index: number,
  selectedIndex: number, 
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}

export default function Save({id, navigation, setBelaCetvero, setBelaTroje, setBelaDvoje, saveData, setSaveData, index, selectedIndex, setSelectedIndex}: Props){
  const date=saveData[id][index].timestamp;
  let playerNames;
  let partijaScores=String(saveData[id][index].bela.partijaScores);
  let playerScores='';

  const handleDelete=()=>{
    setSaveData(prev=>({
      ...prev,
      [id]: prev[id].filter((_, i)=>i!==index)})
    );
    setSelectedIndex(-1);
  }

  const handleLoad=()=>{
    const belaData = saveData?.[id]?.[index]?.bela;
    if (!belaData){
      return;
    }

    switch (id) {
      case 'cetvero':
        setBelaCetvero?.(belaData as belaCetvero_t);
        navigation.navigate('Bela_Cetvero');
        break;

      case 'troje':
        setBelaTroje?.(belaData as belaTroje_t);
        navigation.navigate('Bela_Troje');
        break;

      case 'dvoje':
        setBelaDvoje?.(belaData as belaDvoje_t);
        navigation.navigate('Bela_Dvoje');
        break;
    }
  }

  switch(id){
    case 'cetvero':
      playerNames=((saveData.cetvero[index].bela.firstTeam)?(saveData.cetvero[index].bela.firstTeam): "Tim 1")+
                  " - "+
                  ((saveData.cetvero[index].bela.secondTeam)?saveData.cetvero[index].bela.secondTeam: "Tim 2");
      partijaScores=String(saveData[id][index].bela.partijaScores.firstTeam)+
                    " - "+
                    String(saveData[id][index].bela.partijaScores.secondTeam)
      playerScores=String(saveData.cetvero[index].bela.displayScores.reduce((total, n) =>total+n.firstTeam,0))+
                  " - "+
                  String(saveData.cetvero[index].bela.displayScores.reduce((total, n)=>total+n.secondTeam,0));
      break;
    case 'troje':
      playerNames=((saveData.troje[index].bela.firstPlayer)?saveData.troje[index].bela.firstPlayer: "Igrac 1")+
                  " - "+
                  ((saveData.troje[index].bela.secondPlayer)?saveData.troje[index].bela.secondPlayer: "Igrac 2")+
                  " - "+
                  ((saveData.troje[index].bela.thirdPlayer)?saveData.troje[index].bela.thirdPlayer: "Igrac 3");
      partijaScores=String(saveData[id][index].bela.partijaScores.firstPlayer)+
                    " - "+
                    String(saveData[id][index].bela.partijaScores.secondPlayer)+
                    " - "+
                    String(saveData[id][index].bela.partijaScores.thirdPlayer)
      playerScores=String(saveData.troje[index].bela.displayScores.reduce((total, n)=>total+n.firstPlayer,0))+
                  " - "+
                  String(saveData.troje[index].bela.displayScores.reduce((total, n)=>total+n.secondPlayer,0))+
                  " - "+
                  String(saveData.troje[index].bela.displayScores.reduce((total, n)=>total+n.thirdPlayer,0))
      break;
    case 'dvoje':
      playerNames=saveData.dvoje[index].bela.firstPlayer+
                  " - "+
                  saveData.dvoje[index].bela.secondPlayer;
      partijaScores=String(saveData[id][index].bela.partijaScores.firstPlayer)+
                    " - "+
                    String(saveData[id][index].bela.partijaScores.secondPlayer)
      playerScores=String(saveData.dvoje[index].bela.displayScores.reduce((total, n)=>total+n.firstPlayer,0))+
                  " - "+
                  String(saveData.dvoje[index].bela.displayScores.reduce((total, n)=>total+n.secondPlayer,0))
      break;
  }

  return(
    <TouchableOpacity style={[stylesSave.bar, {height: (selectedIndex!==index)?50: 200}]} onPress={()=>setSelectedIndex(index)}>
      <View style={[stylesSave.textContainer, (selectedIndex===index)&&{borderBottomWidth: 5, borderColor: 'rgba(99, 53, 45, 1)'}]}>
        <Text style={stylesSave.text}>{date}</Text>
      </View>
      ({selectedIndex===index &&
        <View style={stylesSave.hiddenView}>
          <View style={stylesSave.hiddenViewStatsBar}>
            <View style={stylesSave.nameBar}>
              <Text style={[stylesSave.leftSideStatsBarText, {width: 67}]}>Imena:</Text>
              <Text style={[stylesSave.rightSideStatsBarText, (id==='troje')&&{width: '100%', fontSize: RFValue(12)}]}>{playerNames}</Text>
            </View>

            <View style={stylesSave.nameBar}>
              <Text style={[stylesSave.leftSideStatsBarText, {width: 70}]}>Partije:</Text>
              <Text style={stylesSave.rightSideStatsBarText}>{partijaScores}</Text>
            </View>

            <View style={stylesSave.nameBar}>
              <Text style={stylesSave.leftSideStatsBarText}>Rezultati:</Text>
              <Text style={stylesSave.rightSideStatsBarText}>{playerScores}</Text>
            </View>
          </View>
          <View style={stylesSave.hiddenViewBottomBar}>
            <TouchableOpacity style={[stylesSave.hiddenViewBottomBarContainers, {borderBottomLeftRadius: 15, borderRightWidth: 1, borderColor: 'rgba(99, 53, 45, 1)'}]} onPress={handleDelete}>
              <Image style={stylesSave.image} source={require('./icons_and_images/trash_white.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={[stylesSave.hiddenViewBottomBarContainers, {borderBottomRightRadius: 15, borderLeftWidth: 1, borderColor: 'rgba(99, 53, 45, 1)'}]} onPress={handleLoad}>
              <Text style={[stylesSave.text, {color: 'white'}]}>Ucitaj</Text>
            </TouchableOpacity>
          </View>
        </View>
      })
    </TouchableOpacity>
  )
}