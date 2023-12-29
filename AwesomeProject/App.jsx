import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Config from 'react-native-config'
const App = () => {
  return (
    <View>
      <Text>{Config.API}</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})