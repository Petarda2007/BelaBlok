import * as React from 'react';
import { View, Text } from "react-native";
import { stylesGamesScoreBar } from "../../styles";

import { useState } from 'react';

import { belaTroje_t } from '../../types';



type Props={
  belaTroje: belaTroje_t
}

export default function GamesScoreBar({belaTroje}: Props){


  return(
    <View style={stylesGamesScoreBar.bar}>
      <Text style={stylesGamesScoreBar.text}>
        {(belaTroje.displayScores ?? []).reduce((total, n)=>total+n.firstPlayer, 0)}
      </Text>
      <Text style={stylesGamesScoreBar.text}>
        {(belaTroje.displayScores ?? []).reduce((total, n)=>total+n.secondPlayer, 0)}
      </Text>
      <Text style={stylesGamesScoreBar.text}>
        {(belaTroje.displayScores ?? []).reduce((total, n)=>total+n.thirdPlayer, 0)}
      </Text>
    </View>
  )
}
