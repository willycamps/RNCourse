import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';

  function CardBack({route}){
    const catId = route.params.cardId;

    return(
    
            <View style={styles.innerContainer}>
    
                      <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                      </View>
    
                      <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                      </View>
            </View>
        );


  }


  export default CardBack;
  
  const styles = StyleSheet.create({
    container: {
      flex: 2,
      padding: 16,
    },
  });
  