import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
  } from 'react-native';
  import React, { useState } from 'react';

import FlipCard from 'react-native-flip-card';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import CardFrontItem from '../components/CardFrontItem';
import CardBackItem from '../components/CardBackItem.js';

import {CARDS} from '../data/d-data.js'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

function CardFlipScreen({ route }){
  
const cardId = route.params.categoryId; //route.params.cardId;

const displayedCard = CARDS.filter((CardFrontItem) => {
  return CardFrontItem.id.indexOf(cardId) >= 0;
});

//console.log(Object.values(displayedCard[0]))

const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    };

function renderCardFront(itemData) {

        const item = itemData.item;

        const cardItemProps = {
          id: item.id,
          title: item.title,
          promotion: item.promotion,
          logo: item.logo,
          backgroundImageFront: item.backgroundFront,
          backgroundImageBack: item.backgroundImageBack,
          backgroundFront: item.backgroundFront,
          backgroundBack: item.backgroundBack,
        };
        return (
          <CardFrontItem {...cardItemProps} />
        );
      };

return (

<View style={styles.container}>

  <FlipCard
                style={[styles.cardContainer]}
                friction={20}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                flip={isFlipped}
                clickable={false}
            >
                {/* Front */}
               {/*  <View  style={[styles.card, styles.card1]} > */}
                    <CardFrontItem  
                            title={displayedCard[0].title}
                            promotion={displayedCard[0].promotion}
                            logo={displayedCard[0].logo}
                            backgroundImageFront={displayedCard[0].backgroundImageFront}
                            backgroundImageBack = {displayedCard[0].backgroundImageBack} 
                            backgroundFront = {displayedCard[0].backgroundFront}
                            backgroundBack = {displayedCard[0].backgroundBack}
                    />
                    
               {/*  </View> */}

                {/* Back */}
                <View style={[styles.card, styles.card2]}>

                 
                </View>

            </FlipCard>

            <TouchableOpacity style={styles.button} onPress={toggleFlip}>
                <MaterialCommunityIcons name="rotate-360" size={34} color="white" />
            </TouchableOpacity>
  
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
        flex:2,
        marginTop: 20,
        width: 320,
        height: 470,
      },
      
      card2: {
        backgroundColor: '#48d218',

      },
      label: {
        lineHeight: 470,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
      
      button: {
        backgroundColor: 'green',
        padding: "5px 20px 5px 20px",
        borderRadius: 10,
        marginTop: 5,
    },
  });