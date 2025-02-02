import React from 'react';
import {Text, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header headerText="Albums" />
      <AlbumList />
    </View>
  );
};

export default App;
