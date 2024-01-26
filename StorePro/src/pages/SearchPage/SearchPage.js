import React, {useState} from 'react';

import {SafeAreaView, Text, FlatList} from 'react-native';

import SearchBar from '../../components/SearchBar/SearchBar';

import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch/useFetch';
import ProductCard from '../../components/ProductCard/ProductCard';
import LoadingAnimation from '../../components/loading/loading';

function SearchPage({navigation}) {
  const {loading, listData, error} = useFetch(Config.API_URL);
  const [search, setSearch] = useState(listData);

  const handleSearchText = text => {
    const typedText = text.toLowerCase();

    if (loading) {
      return <LoadingAnimation />;
    }

    if (error) {
      return <Text>{error}</Text>;
    }
    if (typedText === '') {
      setSearch([]);
    } else {
      const filteredText = listData.filter(item => {
        const titleText = item.title.toLowerCase();
        return titleText.indexOf(typedText) > -1;
      });
      setSearch(filteredText);
    }
  };
  const handleSelectProduct = id => {
    navigation.navigate('Details Screen', {id});
  };
  const renderSearch = ({item}) => (
    <ProductCard product={item} onSelect={() => handleSelectProduct(item.id)} />
  );

  return (
    <SafeAreaView>
      <SearchBar onSearch={handleSearchText} />
      <FlatList data={search} renderItem={renderSearch} numColumns={2} />
    </SafeAreaView>
  );
}

export default SearchPage;
