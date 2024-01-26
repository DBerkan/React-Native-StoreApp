import React from 'react';
import {TextInput} from 'react-native';

import styles from './SearchBar.style';

function SearchBar(props) {
  return (
    <TextInput
      style={styles.container}
      placeholder="Type..."
      onChangeText={props.onSearch}
    />
  );
}

export default SearchBar;
