export type RootStackParamList={
  Home: undefined;
  Bela_Dvoje: undefined;
  Bela_Troje: undefined;
  Bela_Cetvero: undefined;
  Add_Dvoje: {it?: number};
  Add_Troje: {it?: number};
  Add_Cetvero: {it?: number}; 
  Load: {id: 'cetvero' | 'troje' | 'dvoje'};
  Settings: {id: 'cetvero' | 'troje' | 'dvoje'};
};
export type HomeScreenProps={
  navigation: any;
};
export type zvanja={
  dvadeset: number,
  pedeset: number,
  sto: number,
  belot: number,
  stiglja: 0 | 1
};
export type belaDvoje_t={
  firstPlayer: string,
  secondPlayer: string,
  zvanja:{
    firstPlayer: zvanja,
    secondPlayer: zvanja
  }[],
  scores:{
    first: number,
    second: number,
    stiglja: boolean
  }[],
  whoCalled:{
    firstPlayer: boolean
    secondPlayer: boolean
  }[],
  displayScores:{
    firstPlayer: number,
    secondPlayer: number,
  }[],
  partijaScores:{
    firstPlayer: number,
    secondPlayer: number,
  },
  turn: "Ja" | "Protivnik"
};
export type belaTroje_t={
  firstPlayer: string,
  secondPlayer: string,
  thirdPlayer: string,
  zvanja:{
    firstPlayer: zvanja,
    secondPlayer: zvanja,
    thirdPlayer: zvanja
  }[],
  scores:{
    first: number,
    second: number,
    third: number,
    maxScore: 162 | 152 | 142,
    stiglja: boolean
  }[],
  whoCalled:{
    firstPlayer: boolean
    secondPlayer: boolean
    thirdPlayer: boolean
  }[],
  displayScores:{
    firstPlayer: number,
    secondPlayer: number,
    thirdPlayer: number
  }[],
  partijaScores:{
    firstPlayer: number,
    secondPlayer: number,
    thirdPlayer: number
  },
  turn: "Ja" | "Lijevi Protivnik" | "Desni Protivnik"
};
export type belaCetvero_t={
  firstTeam: string,
  secondTeam: string,
  zvanja:{
    firstTeam: zvanja,
    secondTeam: zvanja
  }[],
  scores:{
    first: number,
    second: number,
    stiglja: boolean
  }[],
  whoCalled:{
    firstTeam: boolean
    secondTeam: boolean
  }[],
  displayScores:{
    firstTeam: number,
    secondTeam: number,
  }[],
  partijaScores:{
    firstTeam: number,
    secondTeam: number,
  },
  turn: "Ja" | "Lijevi Protivnik" | "Desni Protivnik" | "Partner"
};
export type SaveData={
  cetvero: {bela: belaCetvero_t, timestamp: string}[],
  troje: {bela: belaTroje_t, timestamp: string}[],
  dvoje: {bela: belaDvoje_t, timestamp: string}[],
  smjerKazaljkeNaSatu: boolean
}