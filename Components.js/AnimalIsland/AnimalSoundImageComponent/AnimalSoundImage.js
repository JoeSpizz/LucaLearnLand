import {View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import React from 'react'

function AnimalSoundImage({animal}) {
const what = animal

  return (
    <View>
        <Text>
        {what}!!
        </Text>
    </View>
  )

}
export default AnimalSoundImage
const styles= EStyleSheet.create({
})