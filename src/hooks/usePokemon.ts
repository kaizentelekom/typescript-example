import { useQuery } from '@tanstack/react-query'

import { getPokemon } from '../service'

interface UsePokemonParams {
  name: string
}

export const usePokemon = ({ name }: UsePokemonParams) =>
  useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => getPokemon({ name }),
    staleTime: 2 * 60 * 1000 // 2 minutes
  })
