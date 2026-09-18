import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const commonStyles=StyleSheet.create({
  page:{
    backgroundColor: 'rgba(38, 201, 90, 1)',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingVertical: 5
  }
})
export const stylesNavPage=StyleSheet.create({
  home_page:{
    backgroundColor: 'rgba(160, 111, 111, 0.8)',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    flex: 1
  },
  game_container:{
    backgroundColor: 'rgba(160, 111, 111, 1)',
    height: '30%',
    width: '100%',
    borderRadius: 25,
    flexDirection: 'row',
    marginBottom: 10
  },
  card_container:{
    height: '100%',
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 5,
  },
  game_text_container:{
    height: '100%',
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  game_text:{
    fontSize: RFValue(25),
    color: 'black',
    padding: 0,
    margin: 0,
    fontFamily: 'Shizuru-Regular'
  },
  game_image:{
    height: '100%',
    borderRadius: 25,
    resizeMode: 'contain'
  }
});
export const stylesTopBar=StyleSheet.create({
  top_bar:{
    backgroundColor: 'rgba(38, 201, 90, 0.8)',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: RFPercentage(5),
    borderColor: 'white',
    borderBottomWidth: 1,
  },
  top_bar_left_container:{
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '25%',
    padding: 2,
    paddingLeft: 10
  },
  top_bar_right_container:{
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', 
    width: '20%',
    padding: 2,
  },
  top_bar_trash_img:{
    height: '90%',
    resizeMode: 'contain'
  },
  top_bar_back_img:{
    width: 16,
    height: 16,
    resizeMode: 'contain'
  },
  top_bar_text:{
    height: RFPercentage(5),
    fontSize: 28,
    color: 'white',
    lineHeight: RFPercentage(5),
    padding: 0,
    margin: 0
  }
});
export const stylesScoreBar=StyleSheet.create({
  bar:{
    backgroundColor: 'rgba(38, 201, 90, 0.8)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '5%',
    borderColor: 'white',
    borderLeftWidth: 3,
    borderRightWidth: 3,
    alignSelf: 'center'
  },
  score_text:{
    fontSize: 35,
    color: 'white',
    lineHeight: 35,
    padding: 0,
    margin: 0
  }
});
export const stylesNameBar=StyleSheet.create({
  bar:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '5%',
    borderColor: 'white',
    backgroundColor: 'rgba(38, 201, 90, 0.8)',
    borderBottomWidth: 3,
  },
  name_bar_text:{
    width: '30%',
    height: '100%',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0, 
    paddingRight: 0,
    fontSize: RFValue(17)
  }
});
export const stylesGamesList=StyleSheet.create({
  bar:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(38, 201, 90, 1)',
    borderBottomWidth: 3,
    borderColor: 'white'
  },
  text:{
    width: '30%',
    height: 50,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0, 
    paddingRight: 0,
    fontSize: 26
  },
  hidden_container:{
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: '12%',
    height: '100%',
    backgroundColor: "rgba(230, 0, 0, 1)",
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderColor: 'rgba(230, 0, 0, 1)'
  },
  image:{
    aspectRatio: 1/1,
    height: '95%',
    resizeMode: 'contain'
  }
});
export const stylesGamesScoreBar=StyleSheet.create({
  bar:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '5%',
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: 'white',
    backgroundColor: 'rgba(38, 201, 90, 0.8)'
  },
  text_container:{
    height: '100%',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    color: 'white',
    height: '100%',
    width: '25%',
    textAlign: 'center',
    fontSize: RFPercentage(4.3),
    lineHeight: RFPercentage(4.3)
  }
});
export const stylesBottomBar=StyleSheet.create({
  bar:{
    width: '100%',
    height: '5%',
    flexDirection: 'row',        
    alignItems: 'center',        
    justifyContent: 'space-between',
    backgroundColor: 'rgba(38, 201, 90, 0.8)'
  },
  image:{
    height: '100%',
    width: 30,
    resizeMode: 'contain',
  },
  left_container_image:{
    width: '60%',
    height: '100%',
    flexDirection: 'row',        
    alignItems: 'center',        
    justifyContent: 'space-between',
  },
  text:{
    marginLeft: 5,
    height: '100%',
    width: '100%',
    color: 'white',
    fontSize: 20,
    lineHeight: 40
  }
});
export const stylesResumeSaveDelete=StyleSheet.create({
container:{
    position: 'absolute',
    backgroundColor: 'rgba(65, 65, 65, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  tab:{
    width: '60%',
    height: '50%',
    backgroundColor: 'rgba(38, 201, 90, 1)',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 5,
    borderRadius: 10,
    borderColor: 'rgba(99, 53, 45, 1)'
  },
  cards:{
    height: 50,
    width: '90%',
    flexDirection: 'row',
    borderWidth: 5,
    borderRadius: 10,
    borderColor: 'rgba(99, 53, 45, 1)'
  },
  text:{
    width: '100%',
    height: '100%',
    color: 'rgba(99, 53, 45, 1)',
    fontSize: 30,
    textAlign: 'center'

  }
});
export const stylesChangeWhoDeals=StyleSheet.create({
  container:{
    width: '100%',
    aspectRatio: 1/1.1,
    backgroundColor: '#12ba12',
    position: 'absolute',
    bottom: 0,
    padding: 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  row:{
    width: '100%',
    height: '31.1%',
    flexDirection: 'row',
    paddingTop: 3,
    justifyContent: 'center'
  },
  who_deals_text_bar:{
    color: 'white',
    fontSize: 20,
  },
  image:{
    resizeMode: 'contain',
    height: '100%',
    aspectRatio: 1/1,
  }
});
export const stylesChangePartijaScores=StyleSheet.create({
  container:{
    position: 'absolute',
    backgroundColor: 'rgba(65, 65, 65, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: 51,
    marginBottom: 52
  },
  scores_tab:{
    width: '75%',
    height: '20%',
    backgroundColor: 'rgba(38, 201, 90, 1)',
    borderRadius: 20,
    overflow: 'hidden'
  },
  top_tab_container:{
    width: '100%',
    height: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  top_input:{
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 40,
    lineHeight: 20,
    borderBottomWidth: 4,
    borderColor: 'white',
    paddingBottom: 0,
    paddingTop: 0,
    color: 'white'
  },
  bottom_tab_container:{
    width: '100%',
    height: '30%',
    flexDirection: 'row'
  },
  bottom_tab_container_container:{
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderTopWidth: 2
  },
  bottom_tab_text:{
    color: 'white',
    fontSize: 24
  }
});
export const stylesAddBottomBar=StyleSheet.create({
  bar:{
    width: '100%',
    height: '5%',
    flexDirection: 'row',        
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  left_container:{
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  right_container_not:{
    height: '100%',
    backgroundColor: 'rgba(106, 169, 127, 0.8)',
    marginRight: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center'
  },
  right_container_yes:{
    height: '100%',
    backgroundColor: 'white',
    marginRight: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center'
  },
  text_cancle:{
    height: '70%',
    width: '100%',
    color: 'white',
    fontSize: RFValue(22),
    lineHeight: RFValue(22)
  },
  text_save_not:{
    height: '70%',
    width: '100%',
    color: 'rgba(223, 235, 227, 0.8)',
    fontSize: RFValue(22),
    lineHeight: RFValue(22)
  },
  text_save_yes:{
    height: '70%',
    width: '100%',
    color: 'rgba(38, 201, 90, 0.8)',
    fontSize: RFValue(22),
    lineHeight: RFValue(22)
  }
});
export const stylesAddInputBar=StyleSheet.create({
  bar:{
    width: '100%',
    height: '10%',
    flexDirection: 'row',        
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  trash_bar:{
    position: 'absolute',
    width: '15%',
    height: '100%',
    paddingRight: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
    right: 0
  },
  trash_bar_image:{
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },
  text:{
    height: '100%',
    width: '100%',
    color: 'white',
    fontSize: 28
  },
  troje_bar:{
    width: '100%',
    height: '30%',
    flexDirection: 'row',        
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'red',
    padding: 5
  },
  troje_max_score_switch_bar:{
    width: '100%',
    height: '30%',
    flexDirection: 'row',        
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    zIndex: 30
  },
  troje_max_score_switch_bar_container:{
    height: '90%',
    width: '20%',
    marginHorizontal: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: 0
  },
  troje_max_score_switch_bar_text:{
    color: 'white',
    fontSize: 22,
    lineHeight: 22
  },
});
export const stylesAddInput=StyleSheet.create({
  input:{
    width: 80,
    height: 50,
    borderColor: 'white',
    borderBottomWidth: 3,
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    paddingTop: 0,
    paddingBottom: 0,
    zIndex: 2
  },
  text_container:{
    width: '32%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export const stylesAddCallingScoreBar=StyleSheet.create({
  bar:{
    height: '2%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'visible'
  },
  text_container:{
    height: '100%',
    width: '32%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible'
  },
  text:{
    height: '120%',
    width: 70,
    backgroundColor: 'rgba(38, 201, 90, 0.8)',
    borderRadius: 20,
    textAlign: 'center',
    marginHorizontal: 24,
    fontSize: RFValue(16),
    lineHeight: RFValue(16),
    overflow: 'visible',
    color: 'white'
  }
});
export const stylesAddCallingTable=StyleSheet.create({
  container:{
    height: '45%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});
export const stylesAddCallingCol=StyleSheet.create({
  col:{
    height: '100%',
    width: '32%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25
  }
});
export const stylesAddCalling=StyleSheet.create({
  container:{
    height: '14%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 20
  },
  left_container:{
    height: '100%',
    width: '20%',
    justifyContent: 'center'
  },
  left_text:{
    color: 'white',
    fontSize: RFValue(15),
    lineHeight: RFValue(15),
    textAlign: 'center'
  },
  middle_text:{
    height: '50%',
    width: '100%',
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    fontSize: RFValue(15)
  },
  middle_container:{
    height: '100%',
    width: '60%',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  image_container:{
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  }
});
export const stylesAddWhoCalled=StyleSheet.create({
  container:{
    height: '20%',
    width: '100%',
  },
  top_container:{
    height: '40%',
    width: '100%',
    justifyContent: 'center'
  },
  bottom_container:{
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  player_container:{
    height: '100%',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  top_bottom_player_container:{
    height: '50%',
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    lineHeight: 50
  },
  bottom_bottom_player_container:{
    height: '50%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  outer_circle:{
    height: '70%',
    aspectRatio: 1/1,
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  who_called_text:{
    color: 'white',
    fontSize: 36,
    lineHeight: 40,
    textAlign: 'center'
  }
});
export const stylesSavesBottomBar=StyleSheet.create({
  bar:{
    width: '100%',
    height: '5%',
    flexDirection: 'row',        
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  left_container:{
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  right_container_not:{
    height: '100%',
    backgroundColor: 'rgba(106, 169, 127, 0.8)',
    marginRight: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center'
  },
  right_container_yes:{
    height: '100%',
    backgroundColor: 'white',
    marginRight: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center'
  },
  text_cancle:{
    height: '70%',
    width: '100%',
    color: 'white',
    fontSize: RFValue(22),
    lineHeight: RFValue(22)
  },
  text_save_not:{
    height: '70%',
    width: '100%',
    color: 'rgba(223, 235, 227, 0.8)',
    fontSize: RFValue(22),
    lineHeight: RFValue(22)
  },
  text_save_yes:{
    height: '70%',
    width: '100%',
    color: 'rgba(38, 201, 90, 0.8)',
    fontSize: RFValue(22),
    lineHeight: RFValue(22)
  }
})
export const stylesSavesTopBar=StyleSheet.create({
  bar:{
    width: '95%',
    height: '5%',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: RFValue(150),
    paddingHorizontal: RFValue(5),
    justifyContent: 'center'
  },
  input:{
    height: '80%',
    fontSize: RFValue(15),
    paddingTop: 0,
    paddingBottom: 0
  }
})
export const stylesSaves=StyleSheet.create({
  scrollview:{
    width: '90%'
  }
})
export const stylesSave=StyleSheet.create({
  bar:{
    width: '100%',
    marginVertical: 10,
    backgroundColor: 'rgba(38, 201, 90, 1)',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 5,
    borderRadius: 20,
    borderColor: 'rgba(99, 53, 45, 1)'
  },
  textContainer:{
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 26,
    paddingTop: 0,
    paddingBottom: 0
  },
  hiddenView:{
    height: 150,
    width: '100%',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: 'rgba(47, 138, 76, 1)'
  },
  hiddenViewStatsBar:{
    height: 110,
    width: '100%',
    backgroundColor: 'rgb(25, 241, 93)'
  },
  hiddenViewBottomBar:{
    flexDirection: 'row',
    height: 40,
    width: '100%',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  hiddenViewBottomBarContainers:{
    height: 40,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  hiddenViewBottomBarContainersText:{
  },
  nameBar:{
    height: 37,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(99, 53, 45, 1)',
    alignItems: 'center'
  },
  leftSideStatsBarText:{
    height: 35,
    width: 90,
    fontSize: RFValue(16),
    lineHeight: 35,
    paddingLeft: 5
  },
  rightSideStatsBarText:{
    height: 35,
    width: '100%',
    fontSize: RFValue(16),
    lineHeight: 35,
    paddingLeft: 8
  }
})
export const stylesSettings=StyleSheet.create({
  setting:{
    width: '100%',
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  textContainer:{
    width: '60%',
    justifyContent: 'center'
  },
  buttonContainer:{
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 20,
    color: 'white'
  },
  button:{
    width: '45%',
    height: '70%',
    justifyContent: 'center',
    backgroundColor: 'rgb(60, 220, 110)'
  }
})