import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { NavigatorScreenParams, CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootStackParamList = {
  PokemonDetail: {
    /**
     * name
     */
    name: string
    type: 'collectable' | 'collected'
  }
  BottomTabs: NavigatorScreenParams<BottomTabsParamList> | undefined
}

export type BottomTabsParamList = {
  PokemonList: undefined
  Collection: undefined
}

export type RootStackNavigationProp<T extends keyof RootStackParamList> = NativeStackNavigationProp<
  RootStackParamList,
  T
>

export type BottomTabsNavigationProp<T extends keyof BottomTabsParamList> = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsParamList, T>,
  NativeStackNavigationProp<RootStackParamList>
>

export type RootStackRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>
