import {
    StyleSheet,
    View,
    Text,Button,ImageBackground, Image,
  } from 'react-native';

  
  import CardFlip from 'react-native-card-flip';
 

function CardFront({ title, imageUrl, promotion }) {

    return(
        <View style={styles.card}>
  
          <View>
             {/*  <Image source={{ uri: imageUrl }} style={styles.image} /> */}
              <Image style={styles.tinyLogo} source={require('/MealsApp/assets/favicon.png')}/>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.promotion}>{promotion}</Text>
              
          </View>

            <Button
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
            />
        </View>
    );
}

export default CardFront;

const styles = StyleSheet.create({
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
    backgroundColor: 'transparent',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  
});
