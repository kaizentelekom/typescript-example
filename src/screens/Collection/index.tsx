import React, { useCallback, useMemo } from 'react'

import { useNavigation } from '@react-navigation/native'
import {
  Button,
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { Pokemon } from '../../core'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { BottomTabsNavigationProp } from '../../routes/types'
import { removePokemonFromCollection } from '../../store/collection'

export function Collection() {
  const navigation = useNavigation<BottomTabsNavigationProp<'Collection'>>()

  const dispatch = useAppDispatch()

  const collection = useAppSelector((state) => state.collection)

  const handlePokemonPress = useCallback(
    (item: Pokemon) => {
      navigation.navigate('PokemonDetail', { name: item.name, type: 'collected' })
    },
    [navigation]
  )

  const handlePokemonRemove = useCallback(
    (item: Pokemon) => {
      dispatch(removePokemonFromCollection({ pokemon: { id: item.id } }))
    },
    [dispatch]
  )

  const listEmptyComponent: React.ReactElement = useMemo(
    () => <Text>You did not catch any pokemon yet</Text>,
    []
  )

  const renderItem: ListRenderItem<Pokemon> = useCallback(
    ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.pokemonContainer}
        onPress={() => handlePokemonPress(item)}
      >
        {item.sprites.front_default && (
          <Image
            source={{ uri: item.sprites.front_default }}
            style={styles.image}
            resizeMode="contain"
          />
        )}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Button title="Remove" onPress={() => handlePokemonRemove(item)} />
        </View>
        <Text style={styles.goToDetailText}>Press for detail</Text>
      </TouchableOpacity>
    ),
    [handlePokemonRemove, handlePokemonPress]
  )

  const keyExtractor = useCallback((item: Pokemon) => `collected_pokemon_${item.id}`, [])

  return (
    <FlatList
      data={collection.pokemons}
      ListEmptyComponent={listEmptyComponent}
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={keyExtractor}
    />
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: '5%'
  },
  pokemonContainer: {
    padding: '5%',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: '5%',
    flexDirection: 'row'
  },
  image: {
    width: '20%',
    aspectRatio: 1
  },
  infoContainer: {
    marginLeft: '5%'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  goToDetailText: {
    fontSize: 10,
    position: 'absolute',
    bottom: 10,
    right: 10
  }
})
