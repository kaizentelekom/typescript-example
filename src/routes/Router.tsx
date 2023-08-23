import React, { memo } from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { RootStack } from './RootStack'

function RouterComponent() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export const Router = memo(RouterComponent)
