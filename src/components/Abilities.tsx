import React, { PropsWithChildren, memo } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Ability } from './Ability'

interface Props {
  abilities: {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }[]
}

function AbilitiesComponent({ abilities }: PropsWithChildren<Props>): React.ReactNode {
  return (
    <View>
      <Text style={styles.title}>Abilities</Text>
      {abilities.map((ability) => (
        <View key={ability.ability.name} style={styles.container}>
          <Text style={styles.abilityTitle}>- {ability.ability.name}</Text>
          <Ability name={ability.ability.name} />
        </View>
      ))}
    </View>
  )
}

export const Abilities = memo(AbilitiesComponent)

const styles = StyleSheet.create({
  container: {
    marginTop: '2%'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: '5%'
  },
  abilityTitle: {
    fontSize: 15,
    fontWeight: '600'
  }
})
