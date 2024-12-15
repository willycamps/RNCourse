import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    Button,
  } from 'react-native';

import CardFront from '../components/CardFront';
import CardBack from '../components/CardBack';

import CardFlip from 'react-native-card-flip';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

function CardFlipScreen({route}){
const cardId = route.params.cardId;


function renderCardFront(itemData) {

        const item = itemData.item;
        const cardItemProps = {
          imageUrl: item.imageUrl,
          title: item.title,
          promotion: item.promotion,
        };
        return (
          <CardFront {...cardItemProps} />
        );
      }

return (

<View style={styles.container}>

  <CardFlip style={styles.cardContainer} ref={card => (this.card = card)} >

  <TouchableOpacity
          activeOpacity={1}
          style={[styles.card, styles.card1]}
          onPress={() => this.card.flip()} backgroundImage={image}>
            
            <View>
                  <CardFront title={"Coffee House"} promotion={"Llevate 2 Cafes por la compra de 1"} imageUrl={""}  />
              </View>

        </TouchableOpacity>
    
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.card, styles.card2]}
          onPress={() => this.card.flip()} >
          <Text style={styles.label}>CD</Text>
        </TouchableOpacity> 

  </CardFlip> 
  
</View>
);

}

export default CardFlipScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      cardContainer: {
        width: 320,
        height: 470,
        backgroundColor:'#d9ead3',
        backgroundImage: image,
      },
      card: {
        width: 320,
        height: 470,
        backgroundImage: image,
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.5,
      },
      card1: {
     
        backgroundImage: image,
      },
      card2: {
        backgroundColor: '#48d218',

        backgroundImage: image,
      },
      label: {
        lineHeight: 470,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
  });