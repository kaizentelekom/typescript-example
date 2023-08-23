import React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'

import { Router } from './src/routes/Router'
import { store } from './src/store'

const queryClient = new QueryClient()

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </Provider>
  )
}

export default App
