import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import theme from '../../../src/styles/theme'

const Profile = () => {
  return (
    <SafeAreaView style={[theme.secondaryBackground, {flex: 1}]}>
      <Text>Profile</Text>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})