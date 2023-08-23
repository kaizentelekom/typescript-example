import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Pokemon } from '../core'

interface CollectionState {
  // elemanlarının pokemon type ın da olmasını istediğim bir array type ı oluşturdum
  pokemons: Pokemon[]
}

interface PokemonPayload {
  pokemon: Pokemon
}

interface RemovePokemonFromCollectionPayload {
  pokemon: Pick<Pokemon, 'id'>
}

const initialState: CollectionState = {
  pokemons: []
}

const collectiionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    addPokemonToCollection: (state, action: PayloadAction<PokemonPayload>) => {
      if (state.pokemons.some((pokemon) => pokemon.id === action.payload.pokemon.id)) return

      state.pokemons.push(action.payload.pokemon)
    },
    removePokemonFromCollection: (
      state,
      action: PayloadAction<RemovePokemonFromCollectionPayload>
    ) => {
      state.pokemons = state.pokemons.filter((pokemon) => pokemon.id !== action.payload.pokemon.id)
    },
    clearCollection: () => initialState
  }
})

export const { addPokemonToCollection, removePokemonFromCollection, clearCollection } =
  collectiionSlice.actions

export default collectiionSlice.reducer
