import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Image } from 'react-native'
import React from 'react'
import theme from '../../../src/styles/theme'
import Carousel from '../../components/Carousel/Carousel'

//Text
import BoldText from '../../components/BoldText/BoldText'
import RegularText from '../../components/RegularText/RegularText'

//İcons
import SearchIcon from '../../assets/icons/Search'

const Home = () => {

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      time: '3 Gün Önce',
      title: 'OKX reacts to new UK crypto regulations, reduces listed tokens',
      desc: 'What to expect when FTX founder Sam Bankman-Fried’s trial resumes for day 5. What to expect when FTX founder Sam Bankman-Fried’s trial resumes for day 5.',
      uri: 'https://www.coindesk.com/resizer/1mh-8Whzbhy6n0wt1fqD35Ch_u4=/1056x594/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/HDITTK7XD5EVLCKNYY3WJMWGHA.png',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      time: '4 Gün Önce',
      title: 'Second Item',
      desc: 'Lorem İpsum sit dolor amet. Lorem ipsum sit dolor amet.',
      uri: 'https://www.coindesk.com/resizer/AaIWBsV9lVfGcl0kmVs232yam7k=/2112x1188/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/CJUWDGYEFREJJCBOZEN26K3YDE.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      time: '5 Gün Önce',
      title: 'Third Item',
      desc: 'Lorem İpsum sit dolor amet. Lorem ipsum sit dolor amet.',
      uri: 'https://crypto.news/app/uploads/2023/10/crypto-news-Bitcoin-in-the-metaverse-blurry-blackground-bright-colors-low-poly-style-v5.1-880x525.jpg',
    },
    {
      id: 'bd7acbea-c1ccs1-46c2-aed5-3ad53abb28ba',
      time: '3 Gün Önce',
      title: 'OKX reacts to new UK crypto regulations, reduces listed tokens',
      desc: 'What to expect when FTX founder Sam Bankman-Fried’s trial resumes for day 5. What to expect when FTX founder Sam Bankman-Fried’s trial resumes for day 5.',
      uri: 'https://www.coindesk.com/resizer/1mh-8Whzbhy6n0wt1fqD35Ch_u4=/1056x594/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/HDITTK7XD5EVLCKNYY3WJMWGHA.png',
    },
    {
      id: 'bd7adcbea-c1ccs1-46c2-aed5-3ad53abb28ba',
      time: '3 Gün Önce',
      title: 'OKX reacts to new UK crypto regulations, reduces listed tokens',
      desc: 'What to expect when FTX founder Sam Bankman-Fried’s trial resumes for day 5. What to expect when FTX founder Sam Bankman-Fried’s trial resumes for day 5.',
      uri: 'https://www.coindesk.com/resizer/1mh-8Whzbhy6n0wt1fqD35Ch_u4=/1056x594/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/HDITTK7XD5EVLCKNYY3WJMWGHA.png',
    },
    {
      id: 'bd7acbea-c1cdcs1-46c2-aed5-3ad53abb28ba',
      time: '3 Gün Önce',
      title: 'OKX reacts to new UK crypto regulations, reduces listed tokens',
      desc: 'What to expect when FTX founder Sam Bankman-Fried’s trial resumes for day 5. What to expect when FTX founder Sam Bankman-Fried’s trial resumes for day 5.',
      uri: 'https://www.coindesk.com/resizer/1mh-8Whzbhy6n0wt1fqD35Ch_u4=/1056x594/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/HDITTK7XD5EVLCKNYY3WJMWGHA.png',
    },
    {
      id: 'bd7acbea-c1cdcs1-465c2-aed5-3ad53abb28ba',
      time: '3 Gün Önce',
      title: 'OKX reacts to new UK crypto regulations, reduces listed tokens',
      desc: 'What to expect when FTX founder Sam Bankman-Fried’s trial resumes for day 5. What to expect when FTX founder Sam Bankman-Fried’s trial resumes for day 5.',
      uri: 'https://www.coindesk.com/resizer/1mh-8Whzbhy6n0wt1fqD35Ch_u4=/1056x594/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/HDITTK7XD5EVLCKNYY3WJMWGHA.png',
    },
    {
      id: 'bd7acbea-c1cdcs1-416c2-aed5-3ad53abb28ba',
      time: '3 Gün Önce',
      title: 'OKX reacts to new UK crypto regulations, reduces listed tokens',
      desc: 'What to expect when FTX founder Sam Bankman-Fried’s trial resumes for day 5. What to expect when FTX founder Sam Bankman-Fried’s trial resumes for day 5.',
      uri: 'https://www.coindesk.com/resizer/1mh-8Whzbhy6n0wt1fqD35Ch_u4=/1056x594/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/HDITTK7XD5EVLCKNYY3WJMWGHA.png',
    },
    {
      id: 'bd7acbea-c1cdcs1-463c2-aed5-3ad53abb28ba',
      time: '3 Gün Önce',
      title: 'OKX reacts to new UK crypto regulations, reduces listed tokens',
      desc: 'What to expect when FTX founder Sam Bankman-Fried’s trial resumes for day 5. What to expect when FTX founder Sam Bankman-Fried’s trial resumes for day 5.',
      uri: 'https://www.coindesk.com/resizer/1mh-8Whzbhy6n0wt1fqD35Ch_u4=/1056x594/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/HDITTK7XD5EVLCKNYY3WJMWGHA.png',
    },
  ];


  const renderItem = ({ item }) => (
    <View style={[styles.newsWrapper, theme.primaryBackground]} key={item.id}>
      <View style={styles.newsImageWrapper}>
        <Image style={styles.newsImage} source={{ uri: item.uri }} />
      </View>
      <View style={styles.descWrapper}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textBold}>
          {item.title}
        </Text>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.textRegular}>
          {item.desc}
        </Text>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.textDayAgo}>
          {item.time}
        </Text>
      </View>
    </View>
  );

  const headerComponent = () => (
    <>
    <Carousel />
      <View style={styles.carouselWrapper}>
        <View style={styles.popularTitleWrapper}>
          <BoldText color="rgba(255,255,255, 0.85)" fontSize={25}>Popüler</BoldText>
        </View>
      </View>
    </>
  );

  return (
    <SafeAreaView style={[theme.secondaryBackground, styles.container]}>
      <View style={styles.userSettings}>
        <RegularText color="rgba(255,255,255, 0.75)" fontSize={18}>
          Hoşgeldin,
          <BoldText color="rgba(255,255,255, 0.85)" fontSize={18}>Hasan</BoldText>
        </RegularText>
        <SearchIcon />
      </View>
      <View style={styles.contentArea}>

        <View style={styles.popularWrapper}>
          <FlatList
            ListHeaderComponent={headerComponent}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 65 }}

          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentArea: {
    paddingHorizontal: 15,
  },
  userSettings: {
    height: 60,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  carouselWrapper: {

  },
  popularWrapper: {

  },
  popularTitleWrapper: {
    marginTop: 25,
    marginBottom: 20,
  },
  newsWrapper: {
    width: '100%',
    marginVertical: 7,
    height: 110,
    borderRadius: 15,
    flexDirection: 'row',
  },
  newsImageWrapper: {
    backgroundColor: 'red',
    height: '100%',
    width: '35%',
    borderRadius: 15,
  },
  newsImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  descWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '65%',
  },
  textBold: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 16,
    color: "rgba(255,255,255, 0.85)",
    paddingBottom: 5,
  },
  textRegular: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 12.5,
    color: "rgba(255,255,255, 0.70)",
  },
  textDayAgo: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 11.5,
    color: "rgba(255,255,255, 0.50)",
    textAlign: 'right',
    paddingTop: 5,
  }
})