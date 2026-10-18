import * as React from 'react';
import { View, Text, TouchableOpacity, Animated, PanResponder, Image, Dimensions } from "react-native";
import { stylesGamesList } from "../../styles";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useRef } from 'react';

import { belaCetvero_t, RootStackParamList } from '../../types';

type Props={
  index: React.Key,
  scores: scores,
  navigation: NativeStackNavigationProp<RootStackParamList>,
  belaCetvero: belaCetvero_t,
  setBelaCetvero: React.Dispatch<React.SetStateAction<belaCetvero_t>>
}

type scores={
  firstTeam: number,
  secondTeam: number
}

const SCREEN_WIDTH=Dimensions.get("window").width;
const MAIN_MIN_WIDTH=SCREEN_WIDTH*0.88;
const MAIN_MAX_WIDTH=SCREEN_WIDTH;

export default function Game({index, scores, navigation, setBelaCetvero}: Props){
  const widthAnim=useRef(new Animated.Value(MAIN_MAX_WIDTH)).current;

  const panResponder=useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, g)=>Math.abs(g.dx)>10,

      onPanResponderMove: (_, g)=>{
        const newWidth=Math.min(
          MAIN_MAX_WIDTH,
          Math.max(MAIN_MAX_WIDTH+g.dx, MAIN_MIN_WIDTH)
        );

        widthAnim.setValue(newWidth);
      },

      onPanResponderRelease: (_, g)=>{
        if(g.dx<-30){
          Animated.timing(widthAnim, {
            toValue: MAIN_MIN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }).start();
        }else{
          Animated.timing(widthAnim, {
            toValue: MAIN_MAX_WIDTH,
            duration: 200,
            useNativeDriver: false,
        }).start();
        }
      },
    })
  ).current;

  const handleClick=()=>{
    setBelaCetvero(prev=>({
      ...prev, 
      zvanja: prev.zvanja.filter((_, i)=>i!==index),
      scores: prev.scores.filter((_, i)=>i!==index),
      whoCalled: prev.whoCalled.filter((_, i)=>i!==index),
      displayScores: prev.displayScores.filter((_, i)=>i!==index),
    }));
    widthAnim.setValue(MAIN_MAX_WIDTH);
  }

  return(
    <View>
      <TouchableOpacity style={stylesGamesList.hidden_container} onPress={handleClick}>
        <Image style={stylesGamesList.image} source={require('../icons_and_images/trash_white.png')}/>
      </TouchableOpacity>

      <Animated.View {...panResponder.panHandlers} style={[stylesGamesList.bar, { width: widthAnim}]}>
        <TouchableOpacity style={stylesGamesList.bar} onPress={()=>{navigation.navigate('Add_Cetvero',{it: Number(index)});}} activeOpacity={1}>
          <Text style={stylesGamesList.text}>{scores.firstTeam}</Text>
          <Text style={stylesGamesList.text}>{scores.secondTeam}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}