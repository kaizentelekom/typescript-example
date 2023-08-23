import React, { PropsWithChildren, memo, useMemo } from 'react'

import { Text } from 'react-native'

import { useAbility } from '../hooks/useAbility'

interface Props {
  name: string
}

function AbilityComponent({ name }: PropsWithChildren<Props>): React.ReactNode {
  const { data, isLoading, isError } = useAbility({ name })

  const englishData = useMemo(
    () => data?.effect_entries?.find((entry) => entry.language.name === 'en'),
    [data?.effect_entries]
  )

  if (isLoading) return <Text>Loading...</Text>

  if (isError) return <Text>Error</Text>

  return <Text>{englishData?.effect}</Text>
}

export const Ability = memo(AbilityComponent)
