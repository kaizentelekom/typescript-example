import { useQuery } from '@tanstack/react-query'

import { getPokemons } from '../service'

interface UsePokemonsParams {
  limit?: number
  offset?: number
}

export const usePokemons = ({ limit, offset }: UsePokemonsParams = {}) =>
  useQuery({
    queryKey: ['pokemons', limit, offset],
    queryFn: () => getPokemons({ limit, offset }),
    staleTime: 2 * 60 * 1000 // 2 minutes
  })
