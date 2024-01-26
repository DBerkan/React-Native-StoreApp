import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './ProductCard.style';



function ProductCard({product, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: product.image}} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.inner_container}>
            <Text style={styles.title}>{product.title}</Text>
    
            <View style={styles.price_body_container}>
              <Text style={styles.price}>{product.price}$</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ProductCard;
