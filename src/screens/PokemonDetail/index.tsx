import React, { useCallback } from 'react'

import { useRoute } from '@react-navigation/native'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import { Abilities } from '../../components/Abilities'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { usePokemon } from '../../hooks/usePokemon'
import { RootStackRouteProp } from '../../routes/types'
import { addPokemonToCollection } from '../../store/collection'

export function PokemonDetail() {
  const route = useRoute<RootStackRouteProp<'PokemonDetail'>>()

  const dispatch = useAppDispatch()

  const { data, isLoading, isError } = usePokemon({ name: route.params.name })

  const handleAddCollectionPress = useCallback(() => {
    if (!data) return

    dispatch(
      addPokemonToCollection({
        pokemon: {
          name: data.name,
          abilities: data.abilities,
          height: data.height,
          weight: data.weight,
          id: data.id,
          sprites: data.sprites
        }
      })
    )
  }, [dispatch, data])

  if (isLoading) return <Text>Loading...</Text>

  if (isError) return <Text>Error</Text>

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.top}>
        {data.sprites.front_default && (
          <Image
            source={{ uri: data.sprites.front_default }}
            style={styles.image}
            resizeMode="contain"
          />
        )}
        <Text>{data.name}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldTitle}>Height</Text>
        <Text>{data.height}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldTitle}>Weight</Text>
        <Text>{data.weight}</Text>
      </View>
      <Abilities abilities={data.abilities} />
      {route.params.type === 'collectable' && (
        <View style={styles.buttonContainer}>
          <Button title="Add to Collection" onPress={handleAddCollectionPress} />
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainerStyle: {
    flexGrow: 1,
    padding: '5%'
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '50%',
    aspectRatio: 1
  },
  field: {
    marginTop: '5%'
  },
  fieldTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: '5%'
  }
})
