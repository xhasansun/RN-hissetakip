import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import theme from '../../../src/styles/theme'
import BoldText from '../../components/BoldText/BoldText'
import SearchIcon from '../../assets/icons/Search'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const Markets = () => {


  const DATA = [
    {
      "id": 1,
      "name": "ACSEL",
      "price": "$150.25",
      "dailyPriceChange": "+1.20%"
    },
    {
      "id": 2,
      "name": "AKSA",
      "price": "$290.80",
      "dailyPriceChange": "-0.75%"
    },
    {
      "id": 3,
      "name": "TARKIM",
      "price": "$3,250.50",
      "dailyPriceChange": "+2.30%"
    },
    {
      "id": 4,
      "name": "ARCLK",
      "price": "$2,800.00",
      "dailyPriceChange": "+0.90%"
    },
    {
      "id": 5,
      "name": "COSMO",
      "price": "$800.10",
      "dailyPriceChange": "-1.50%"
    },
    {
      "id": 6,
      "name": "DMRGD",
      "price": "$350.75",
      "dailyPriceChange": "+0.80%"
    },
    {
      "id": 7,
      "name": "EGEPO",
      "price": "$170.20",
      "dailyPriceChange": "-0.30%"
    },
    {
      "id": 8,
      "name": "ELITE",
      "price": "$45.60",
      "dailyPriceChange": "+0.40%"
    },
    {
      "id": 9,
      "name": "FONET",
      "price": "$140.45",
      "dailyPriceChange": "-0.20%"
    },
    {
      "id": 10,
      "name": "FORTE",
      "price": "$145.60",
      "dailyPriceChange": "+0.60%"
    }
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.stockWrapper, theme.primaryBackground]}>
      <View style={styles.columnSize}>
        <Text style={[styles.stockName, theme.textColor]}>{item.name}</Text>
      </View>
      <View style={styles.columnSize}>
        <Text style={[styles.stcokPrice, theme.textColor]}>{item.price}</Text>
      </View>
      <View style={styles.columnSize}>
        <Text style={[styles.dailyPriceChange, theme.textColor]}>{item.dailyPriceChange}</Text>
      </View>
    </View>
  )

  const ColumnTitle = () => (
    <View style={styles.columnTitle}>
      <Text style={[styles.columnSize, theme.textColor]}>Hisse</Text>
      <Text style={[styles.columnSize, theme.textColor]}>Fiyat</Text>
      <Text style={[styles.columnSize, theme.textColor]}>24S</Text>
    </View>
  );


  return (
    <SafeAreaView style={[theme.secondaryBackground, styles.container]}>
      <View style={styles.topWrapper}>
        <BoldText color="rgba(255,255,255, 0.85)" fontSize={25} >Hisseler</BoldText>
        <SearchIcon />
      </View>
      <View style={styles.bodyWrapper}>
        <ColumnTitle />
        <FlatList
          // ListHeaderComponent={headerComponent}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

export default Markets

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  topWrapper: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bodyWrapper: {
    margin: 15,
  },
  stockWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 7,
    padding: 20,
    borderRadius: 15,
  },
  columnSize: {
    flex: .25,
  },
  stockName: {

  },
  stcokPrice: {
  },
  stockDailiyChange: {

  },
  columnTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  categoryWrapper: {

  }

})