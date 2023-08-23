import React, { memo } from 'react'

import {
  NativeStackNavigationOptions,
  createNativeStackNavigator
} from '@react-navigation/native-stack'

import { BottomTabs } from './BottomTabs'
import { RootStackParamList } from './types'
import { PokemonDetail } from '../screens/PokemonDetail'

const RootStackNavigator = createNativeStackNavigator<RootStackParamList>()

const bottomTabsOptions: NativeStackNavigationOptions = {
  headerShown: false
}

function RootStackComponent() {
  return (
    <RootStackNavigator.Navigator>
      <RootStackNavigator.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={bottomTabsOptions}
      />
      <RootStackNavigator.Screen name="PokemonDetail" component={PokemonDetail} />
    </RootStackNavigator.Navigator>
  )
}

export const RootStack = memo(RootStackComponent)
