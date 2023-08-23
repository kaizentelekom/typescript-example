import React, { useCallback } from 'react'

import { useNavigation } from '@react-navigation/native'
import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity } from 'react-native'

import { PokemonBase } from '../../core'
import { usePokemons } from '../../hooks/usePokemons'
import { BottomTabsNavigationProp } from '../../routes/types'

export function PokemonList() {
  const navigation = useNavigation<BottomTabsNavigationProp<'PokemonList'>>()

  const { data, isLoading, isError } = usePokemons({ limit: 20, offset: 0 })

  const handlePokemonPress = useCallback(
    (item: PokemonBase) => {
      navigation.navigate('PokemonDetail', { name: item.name, type: 'collectable' })
    },
    [navigation]
  )

  const renderItem: ListRenderItem<PokemonBase> = useCallback(
    ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.pokemonContainer}
        onPress={() => handlePokemonPress(item)}
      >
        <Text>{item.name}</Text>
        <Text style={styles.goToDetailText}>Press for detail</Text>
      </TouchableOpacity>
    ),
    [handlePokemonPress]
  )

  if (isLoading) return <Text>Loading...</Text>

  if (isError) return <Text>Error</Text>

  return (
    <FlatList
      data={data.results}
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainer}
    />
  )
}

const styles = StyleSheet.create({
  pokemonContainer: {
    padding: '5%',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contentContainer: {
    padding: '5%'
  },
  goToDetailText: {
    fontSize: 10
  }
})
