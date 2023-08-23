import React, { memo } from 'react'

import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { BottomTabsParamList } from './types'
import { Collection } from '../screens/Collection'
import { PokemonList } from '../screens/PokemonList'
import { store } from '../store'
import { clearCollection } from '../store/collection'

const BottomTabsNavigator = createBottomTabNavigator<BottomTabsParamList>()

const collectionOptions: BottomTabNavigationOptions = {
  headerRight: () => (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.headerRightContainer}
      onPress={() => store.dispatch(clearCollection())}
    >
      <Text>Clear</Text>
    </TouchableOpacity>
  )
}

function BottomTabsComponent() {
  return (
    <BottomTabsNavigator.Navigator>
      <BottomTabsNavigator.Screen name="PokemonList" component={PokemonList} />
      <BottomTabsNavigator.Screen
        name="Collection"
        component={Collection}
        options={collectionOptions}
      />
    </BottomTabsNavigator.Navigator>
  )
}

export const BottomTabs = memo(BottomTabsComponent)

const styles = StyleSheet.create({
  headerRightContainer: {
    marginRight: '5%'
  }
})
