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


//
// console.log("CategoryID: "+ cardId);
//console.log("Displayed Card: "+ JSON.stringify(displayedCard[0]) );

//CARDS.map((item, index) => console.log (index));

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
                    <CardFrontItem  
                            title={displayedCard[0].title}
                            promotion={displayedCard[0].promotion}
                            logo={displayedCard[0].logo}
                            backgroundImageFront={displayedCard[0].backgroundImageFront}
                            backgroundImageBack = {displayedCard[0].backgroundImageBack} 
                            backgroundFront = {displayedCard[0].backgroundFront}
                            backgroundBack = {displayedCard[0].backgroundBack}
                    />

                {/* Back */}
               <CardBackItem />

            </FlipCard>

            <TouchableOpacity style={styles.button} onPress={toggleFlip}>
                <MaterialCommunityIcons name="rotate-360" size={34} color="black" />
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
      label: {
        lineHeight: 470,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
      
      button: {
       /* backgroundColor: 'green',*/
        padding: "5px 20px 5px 20px",
        borderRadius: 10,
        marginTop: 5,
    },
  });