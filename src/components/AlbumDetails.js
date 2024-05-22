import React from 'react';
import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({album}) => {
  // console.log(album);
  const {title, artist, thumnail_image, url} = album;
  // console.log(title)
  return (
    <Card>
      <CardSection>
        <View style={styles.thumnailContainerStyle}>
          <Image source={thumnail_image} style={styles.thumnailStyle} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={thumnail_image} style={styles.imageStyle} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  thumnailStyle: {
    height: 50,
    width: 50,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
});

export default AlbumDetails;
