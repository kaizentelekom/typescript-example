import { useQuery } from '@tanstack/react-query'

import { getAbility } from '../service'

export * from './useAppSelector'

interface UseAbilityParams {
  name: string
}

export const useAbility = ({ name }: UseAbilityParams) =>
  useQuery({
    queryKey: ['ability', name],
    queryFn: () => getAbility({ name }),
    staleTime: 2 * 60 * 1000 // 2 minutes
  })
