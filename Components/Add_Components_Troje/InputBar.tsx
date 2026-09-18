import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { stylesAddInputBar } from "../../styles";

import { scores, zvanja } from '../Add_Troje';

import Input from './Input';

type Props={
  newScore: scores
  setNewScore: React.Dispatch<React.SetStateAction<scores>>
  setNewZvanja: React.Dispatch<React.SetStateAction<zvanja>>
}

export default function InputBar({newScore, setNewScore, setNewZvanja}: Props){
  const handleClick=(num: 162 | 152 | 142)=>{
    if(newScore.stiglja){
      setNewScore(prev=>({
        ...prev,
        first: newScore.first!==0? num: 0,
        second: newScore.second!==0? num: 0,
        third: newScore.third!==0? num: 0,
        maxScore: num
      }))
      return;
    }else{
      setNewScore(prev=>({
        ...prev,
        first: 0,
        second: 0,
        third: 0,
        maxScore: num
      }))
      return;
    } 
  }
  const handleClickDelete=()=>{
    setNewScore(prev=>({...prev, first: 0, second: 0, third: 0, stiglja: false}));
    setNewZvanja({
      firstPlayer:{
        dvadeset: 0,
        pedeset: 0,
        sto: 0,
        belot: 0,
        stiglja: 0
      },
      secondPlayer:{
        dvadeset: 0,
        pedeset: 0,
        sto: 0,
        belot: 0,
        stiglja: 0
      },
      thirdPlayer:{
        dvadeset: 0,
        pedeset: 0,
        sto: 0,
        belot: 0,
        stiglja: 0
      }
    })
  }
  return(
    <View style={[stylesAddInputBar.bar,{height: '18%', flexDirection: 'column'}]}>
      <View style={stylesAddInputBar.troje_max_score_switch_bar}>
        <TouchableOpacity 
          style={[stylesAddInputBar.troje_max_score_switch_bar_container,newScore.maxScore===162 && {backgroundColor: 'green'}]} 
          onPress={()=>handleClick(162)}
          activeOpacity={1}>
          <Text style={stylesAddInputBar.troje_max_score_switch_bar_text}>162</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[stylesAddInputBar.troje_max_score_switch_bar_container,newScore.maxScore===152 && {backgroundColor: 'green'}]} 
          onPress={()=>handleClick(152)}
          activeOpacity={1}>
          <Text style={stylesAddInputBar.troje_max_score_switch_bar_text}>152</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[stylesAddInputBar.troje_max_score_switch_bar_container,newScore.maxScore===142 && {backgroundColor: 'green'}]} 
          onPress={()=>handleClick(142)}
          activeOpacity={1}>
          <Text style={stylesAddInputBar.troje_max_score_switch_bar_text}>142</Text>
        </TouchableOpacity>
        <View style={stylesAddInputBar.trash_bar}>
          <TouchableOpacity onPress={()=>handleClickDelete()} activeOpacity={0.6}>
            <Image style={stylesAddInputBar.trash_bar_image} source={require('../icons_and_images/trash_white.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[stylesAddInputBar.bar,{height: '70%', flexDirection: 'row'}]}>
        <Input id={'first'} newScore={newScore} setNewScore={setNewScore}/>
        <Input id={'second'} newScore={newScore} setNewScore={setNewScore}/>
        <Input id={'third'} newScore={newScore} setNewScore={setNewScore}/>
      </View>
    </View>
  )
}
