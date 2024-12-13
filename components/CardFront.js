import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';

  import CardFlip from 'react-native-card-flip';

function CardFront({route}) {

    const catId = route.params.cardId;

    return(


     /*  <View style={styles.container}>
  
          <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}  >

                        <View>
                          <Image source={{ uri: imageUrl }} style={styles.image} />
                          <Text style={styles.title}>{title}</Text>
                          <Text style={styles.title}>{promotion}</Text>
                        </View>

          </CardFlip>

        </View> */
    );
}

export default CardFront;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 16,
  },
});
