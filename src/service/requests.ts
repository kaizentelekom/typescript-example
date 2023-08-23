import instance from './instance'
import {
  GetAbilityPayload,
  GetAbilityResponse,
  GetPokemonPayload,
  GetPokemonResponse,
  GetPokemonsPayload,
  GetPokemonsResponse,
  getAbilityResponseSchema,
  getPokemonResponseSchema,
  getPokemonsResponseSchema
} from './types'

export const getPokemons = async (payload?: GetPokemonsPayload): Promise<GetPokemonsResponse> => {
  const { data } = await instance.get<GetPokemonsResponse>('pokemon', {
    params: { limit: payload?.limit, offet: payload?.offset }
  })

  getPokemonsResponseSchema.parse(data)

  return data
}

export const getPokemon = async (payload: GetPokemonPayload): Promise<GetPokemonResponse> => {
  if (!payload.name) throw new Error('isim zorunludur')

  const { data } = await instance.get<GetPokemonResponse>(`pokemon/${payload.name}`)

  getPokemonResponseSchema.parse(data)

  return data
}

export const getAbility = async (payload: GetAbilityPayload): Promise<GetAbilityResponse> => {
  if (!payload.name) throw new Error('isim zorunludur')

  const { data } = await instance.get<GetAbilityResponse>(`ability/${payload.name}`)

  getAbilityResponseSchema.parse(data)

  return data
}
