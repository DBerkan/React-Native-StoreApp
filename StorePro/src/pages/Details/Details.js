import React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';

import styles from './Details.style';

import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';

import LoadingAnimation from '../../components/loading/loading';

function Details({route}) {
  const {id} = route.params;
  const {loading, error, listData} = useFetch(`${Config.API_URL}/${id}`);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <Text>{error}</Text>;
  };
  

  return (
    
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
            <Image style={styles.image} source={{uri: listData.image}} />
            <View style={styles.body_container}>
            <Text style={styles.title}>{listData.title}</Text>
            <Text style={styles.desc}>{listData.description}</Text>
            <Text style={styles.price}>{listData.price} $</Text>
            </View>
            </ScrollView>
      </View>
   
  );
}


export default Details;
