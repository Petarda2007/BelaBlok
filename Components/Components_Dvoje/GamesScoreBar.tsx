import * as React from 'react';
import { View, Text } from "react-native";
import { stylesGamesScoreBar } from "../../styles";

import { belaDvoje_t } from '../../types';

type Props={
  belaDvoje: belaDvoje_t
}

export default function GamesScoreBar({belaDvoje}: Props){

  return(
    <View style={stylesGamesScoreBar.bar}>
      <Text style={stylesGamesScoreBar.text}>
        {(belaDvoje.displayScores ?? []).reduce((total, n)=>total+n.firstPlayer,0)}
      </Text>
      <Text style={stylesGamesScoreBar.text}>
        {(belaDvoje.displayScores ?? []).reduce((total, n)=>total+n.secondPlayer,0)}
      </Text>
    </View>
  )
}
