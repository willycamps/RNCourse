import {
    StyleSheet,
    View,
    Text,Button,ImageBackground, Image,
  } from 'react-native';

  
  //import CardFlip from 'react-native-card-flip';
  //const image = require('/MealsApp/assets/backgroundImage/camp-01_640x480.png');
  

function CardFrontItem({title,
  promotion,
  logo,
  backgroundImageFront,
  backgroundImageBack,
  backgroundFront,
  backgroundBack }) {

    return(
        <View style={styles.card}>
          
        <ImageBackground source={backgroundImageFront} resizeMode="cover" style={styles.image}>
          <View>
              {/* <Image style={styles.tinyLogo} source={require('/MealsApp/assets/favicon.png')}/>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.promotion}>{promotion}</Text>  */}
          </View>

            {/* <Button
              title="Basic Button"
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            /> */}
            </ImageBackground>
        </View>
    );
}

export default CardFrontItem;

const styles = StyleSheet.create({
  image: {
    flex: 1,
   
    width: '100%', height: '100%',
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
  title:{},
  promotion:{},

  frontCard: {
    flex: 2,
    padding: 16,
  },
  card: {
    width: 320,
    height: 470,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  
});
