import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import theme from '../../../src/styles/theme'
import BoldText from '../../components/BoldText/BoldText'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const Portfolio = () => {

  const datax = [
    {
      name: "Seoul",
      population: 21500000,
      color: "#00A6C2",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];

  const screenWidth = Dimensions.get("window").width - 30;
  

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const maxLabelsToShow = 3;
  const dataCopy = [...datax].sort((a, b) => b.population - a.population); // Verileri nüfusa göre sırala

  let limitedData = dataCopy.slice(0, maxLabelsToShow);
  let otherPopulation = 0;

  for (let i = maxLabelsToShow; i < dataCopy.length; i++) {
    otherPopulation += dataCopy[i].population;
  }

  if (otherPopulation > 0) {
    limitedData.push({
      name: "Diğerleri",
      population: otherPopulation,
      color: "gray", // veya başka bir renk
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    });
  }

  const Chart = () => (
    <View style={{position: 'relative', paddingHorizontal: 15}}>
      <PieChart
        data={limitedData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"#19173D"}
        paddingLeft={"0"}
        center={[0, 0]}
        style={{borderRadius: 15,}}
      />
    </View>
  );

  return (
    <SafeAreaView style={[theme.secondaryBackground, styles.container]}>
      <View style={styles.topWrapper}>
        <BoldText color="rgba(255,255,255, 0.85)" fontSize={25} >Portföy</BoldText>
      </View>
      <View style={styles.bodyWrapper}>
        <Chart />
      </View>
    </SafeAreaView>
  )
}

export default Portfolio

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
  }
})