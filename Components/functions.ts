import { zvanja } from "../types";

export function SumZvanja(calling: zvanja){
  return calling.dvadeset*20+
         calling.pedeset*50+
         calling.sto*100+
         calling.belot*1001+
         calling.stiglja*90;
}
export function Delete(
  id: 'cetvero' | 'troje' | 'dvoje',
  setter:{
    setBelaCetvero?: React.Dispatch<any>,
    setBelaTroje?: React.Dispatch<any>,
    setBelaDvoje?: React.Dispatch<any>
  }
){
  const {setBelaCetvero, setBelaTroje, setBelaDvoje}=setter;
  switch(id){
    case 'cetvero':
      return setBelaCetvero?.((prev: any)=>({
        ...prev,
        zvanja: [],
        scores: [],
        whoCalled: [],
        displayScores: [],
      }))
    case 'troje':
      return setBelaTroje?.((prev: any)=>({
        ...prev,
        zvanja: [],
        scores: [],
        whoCalled: [],
        displayScores: [],
      }))
    case 'dvoje':
      return setBelaDvoje?.((prev: any)=>({
        ...prev,
        zvanja: [],
        scores: [],
        whoCalled: [],
        displayScores: [],
      }))
  }
}
export function FullDelete(
  id: 'cetvero' | 'troje' | 'dvoje',
  setter:{
    setBelaCetvero?: React.Dispatch<any>,
    setBelaTroje?: React.Dispatch<any>,
    setBelaDvoje?: React.Dispatch<any>
  }
){
  const {setBelaCetvero, setBelaTroje, setBelaDvoje}=setter;
  switch(id){
    case 'cetvero':
      return setBelaCetvero?.({
        firstTeam: "", 
        secondTeam: "", 
        zvanja: [],
        scores: [],
        whoCalled: [],
        partijaScores: {firstTeam: 0, secondTeam: 0},
        displayScores: [],
        turn: "Ja",
      })
    case 'troje':
      return setBelaTroje?.({
        firstPlayer: "", 
        secondPlayer: "", 
        thirdPlayer: "",
        zvanja: [],
        scores: [],
        whoCalled: [],
        partijaScores: {firstPlayer: 0, secondPlayer: 0, thirdPlayer: 0}, displayScores: [], 
        turn: "Ja",
      })
    case 'dvoje':
      return setBelaDvoje?.({
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