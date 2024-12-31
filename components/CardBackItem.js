import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';

  function CardBack({route}){
    /*const catId = route.params.cardId;*/

    return(
    
      
          <View style={[styles.card, styles.card1]}>
              <View style={styles.header}>

              </View>
              <View style={styles.content}>

              </View>
          </View>
      
        );


  }


  export default CardBack;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    card: {
      flexDirection: "column",
      flex: 1,
      width: 320,
      height: 470,
      borderRadius: 30,
      // To prevent shadow from overflowing
      overflow: 'hidden', 
      shadowColor: 'rgba(0,0,0,0.5)',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.5,
           
    },
    card1: {
      flexDirection: "column",
      backgroundColor: '#f6ede0',
       //width: '50%'
      
    },
    header:{
      flex:1,
      flexDirection:"row",
    },
    content:{

    },
  });
  