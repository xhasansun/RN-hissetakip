import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Slick from 'react-native-slick';

const Carousel = () => {
  const images = [
    'https://www.coindesk.com/resizer/1mh-8Whzbhy6n0wt1fqD35Ch_u4=/1056x594/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/HDITTK7XD5EVLCKNYY3WJMWGHA.png',
    'https://www.coindesk.com/resizer/AaIWBsV9lVfGcl0kmVs232yam7k=/2112x1188/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/CJUWDGYEFREJJCBOZEN26K3YDE.jpg',
    'https://crypto.news/app/uploads/2023/10/crypto-news-Bitcoin-in-the-metaverse-blurry-blackground-bright-colors-low-poly-style-v5.1-880x525.jpg'
  ];

  const slides = images.map((image, index) => (
    <View style={styles.slideWrapper} key={index}>
      <Image style={styles.image} source={{ uri: image }} />
    </View>
  ));

  return (
    <View style={styles.container}>
      <Slick style={styles.wrapper} showsButtons={false} dotColor="#fff" activeDotColor="#00A6C2">
        {slides}
      </Slick>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        height: 230,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    wrapper: {
    },
    slideWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#19173D',
        marginHorizontal: 0,
        marginHorizontal: 1,
    },
    text: {
        color: '#00A6C2',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        borderRadius: 15,
    }
});

export default Carousel;
