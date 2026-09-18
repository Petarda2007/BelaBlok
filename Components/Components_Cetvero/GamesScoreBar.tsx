import * as React from 'react';
import { View, Text } from "react-native";
import { stylesGamesScoreBar } from "../../styles";

import { belaCetvero_t } from '../../types';

type Props={
  belaCetvero: belaCetvero_t,
}

export default function GamesScoreBar({belaCetvero}: Props){

  return(
    <View style={stylesGamesScoreBar.bar}>
      <Text style={stylesGamesScoreBar.text}>
        {(belaCetvero.displayScores ?? []).reduce((total, n)=>total+n.firstTeam,0)}
      </Text>
      <Text style={stylesGamesScoreBar.text}>
        {(belaCetvero.displayScores ?? []).reduce((total, n)=>total+n.secondTeam,0)}
      </Text>
    </View>
  )
}
