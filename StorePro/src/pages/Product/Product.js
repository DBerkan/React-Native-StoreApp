import axios from 'axios';
import React, {useState} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import Config from 'react-native-config';

import ProductCard from '../../components/ProductCard/ProductCard';
import LoadingAnimation from '../../components/loading/loading';

import useFetch from '../../hooks/useFetch/useFetch';

function Product({navigation}) {
  const {loading, listData, error} = useFetch(Config.API_URL);
  const [numColumns, setNumColumns] = useState(2);

  const handleSelectProduct = id => {
    navigation.navigate('Details Screen', {id});
  };

  if (loading) {
    return <LoadingAnimation size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleSelectProduct(item.id)} />
  );
  return (
    <SafeAreaView>
      <FlatList
        data={listData}
        renderItem={renderProduct}
        numColumns={numColumns}
      />
    </SafeAreaView>
  );
}

export default Product;
