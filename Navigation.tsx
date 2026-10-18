import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList, belaDvoje_t, belaTroje_t, belaCetvero_t, SaveData } from './types';

import Home from './Components/Home.tsx';
import Bela_Dvoje from './Components/Bela_Dvoje.tsx';
import Bela_Troje from './Components/Bela_Troje.tsx';
import Bela_Cetvero from './Components/Bela_Cetvero.tsx';
import Add_Dvoje from './Components/Add_Dvoje.tsx';
import Add_Troje from './Components/Add_Troje.tsx';
import Add_Cetvero from './Components/Add_Cetvero.tsx';
import Load from './Components/Load.tsx';
import Settings from './Components/Settings.tsx';

const Stack=createNativeStackNavigator<RootStackParamList>();

type Prop={
  belaDvoje: belaDvoje_t,
  setBelaDvoje: React.Dispatch<React.SetStateAction<belaDvoje_t>>,
  belaTroje: belaTroje_t,
  setBelaTroje: React.Dispatch<React.SetStateAction<belaTroje_t>>,
  belaCetvero: belaCetvero_t,
  setBelaCetvero: React.Dispatch<React.SetStateAction<belaCetvero_t>>,
  saveData: SaveData,
  setSaveData: React.Dispatch<React.SetStateAction<SaveData>>
}

export default function Navigaton({belaDvoje, setBelaDvoje, belaTroje, setBelaTroje, belaCetvero, setBelaCetvero, saveData, setSaveData}: Prop){
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>

        <Stack.Screen name="Home">
          {()=><Home/>}
        </Stack.Screen>

        <Stack.Screen name="Bela_Dvoje">
          {props=>(<Bela_Dvoje {...props} belaDvoje={belaDvoje} setBelaDvoje={setBelaDvoje} setSaveData={setSaveData}/>)}
        </Stack.Screen>

        <Stack.Screen name="Bela_Troje">
          {props=>(<Bela_Troje {...props} belaTroje={belaTroje} setBelaTroje={setBelaTroje} setSaveData={setSaveData}/>)}
        </Stack.Screen>

        <Stack.Screen name="Bela_Cetvero">
          {props=>(<Bela_Cetvero {...props} belaCetvero={belaCetvero} setBelaCetvero={setBelaCetvero} setSaveData={setSaveData}/>)}
        </Stack.Screen>
        
        <Stack.Screen name="Add_Dvoje">
          {props=>(<Add_Dvoje {...props} belaDvoje={belaDvoje} setBelaDvoje={setBelaDvoje} smjerKazaljkeNaSatu={saveData.smjerKazaljkeNaSatu}/>)}
        </Stack.Screen>

        <Stack.Screen name="Add_Troje">
          {props=>(<Add_Troje {...props} belaTroje={belaTroje} setBelaTroje={setBelaTroje} smjerKazaljkeNaSatu={saveData.smjerKazaljkeNaSatu}/>)}
        </Stack.Screen>

        <Stack.Screen name="Add_Cetvero">
          {props=>(<Add_Cetvero {...props} belaCetvero={belaCetvero} setBelaCetvero={setBelaCetvero} smjerKazaljkeNaSatu={saveData.smjerKazaljkeNaSatu}/>)}
        </Stack.Screen>

        <Stack.Screen name="Load">
          {props=>(<Load {...props} saveData={saveData} setSaveData={setSaveData} setBelaCetvero={setBelaCetvero} setBelaTroje={setBelaTroje} setBelaDvoje={setBelaDvoje}/>)}
        </Stack.Screen>

        <Stack.Screen name="Settings">
          {props=>(<Settings {...props} saveData={saveData} setSaveData={setSaveData}/>)}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  )
}