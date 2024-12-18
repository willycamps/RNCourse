import {
    StyleSheet,
    View,
    Text,
    ImageBackground, Image,
  } from 'react-native';

 //const backgroundImageFront = require('/MealsApp/assets/backgroundImage/camp-01_640x480.png');
  
function CardFrontItem({ title,
  promotion,
  logo,
  backgroundImageFront,
  backgroundImageBack,
  backgroundFront,
  backgroundBack}) {

    //console.log({logo});
    //let txt=txt.concat("'",logo,"'");
    //console.log(txt);
    //const image_background = require( {backgroundImageFront});
    //console.log(image_background);

    return(
        <View style={[styles.card, styles.card1]}> 
            
          <ImageBackground source={backgroundImageFront} resizeMode="stretch" style={styles.image}>
            <View style={styles.innerContainer}>
              {/*  <Image style={styles.tinyLogo} source={{require:{logo}}} /> */} 
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.promotion}>{promotion}</Text> 
            </View>
          </ImageBackground>
         </View>
    );
}

export default CardFrontItem;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    //sswidth: '100%', height: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    flex: 1,
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    padding: 50,
    marginHorizontal: 120,
    marginVertical: 50,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 38,
  },
  promotion:{},

  frontCard: {
    flex: 2,
    padding: 16,
  },
  card: {
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
    backgroundColor: '#6fa8dc',
  },
  innerContainer: {
    flex: 1,
    padding: 1,
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
