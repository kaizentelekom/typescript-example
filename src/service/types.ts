import { z } from 'zod'

export interface GetPokemonsPayload {
  limit?: number
  offset?: number
}

export const getPokemonsResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(
    z.object({
      name: z.string(),
      url: z.string()
    })
  )
})

export type GetPokemonsResponse = z.infer<typeof getPokemonsResponseSchema>

export interface GetPokemonPayload {
  name: string
}

export const getPokemonResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  height: z.number(),
  weight: z.number(),
  abilities: z.array(
    z.object({
      ability: z.object({
        name: z.string(),
        url: z.string()
      }),
      is_hidden: z.boolean(),
      slot: z.number()
    })
  ),
  sprites: z.object({
    back_default: z.string().nullable(),
    back_female: z.string().nullable(),
    back_shiny: z.string().nullable(),
    back_shiny_female: z.string().nullable(),
    front_default: z.string().nullable(),
    front_female: z.string().nullable(),
    front_shiny: z.string().nullable(),
    front_shiny_female: z.string().nullable()
  })
})

export type GetPokemonResponse = z.infer<typeof getPokemonResponseSchema>

export interface GetAbilityPayload {
  name: string
}

export const getAbilityResponseSchema = z.object({
  id: z.number(),
  effect_entries: z.array(
    z.object({
      effect: z.string(),
      language: z.object({
        name: z.string(),
        url: z.string()
      }),
      short_effect: z.string()
    })
  )
})

export type GetAbilityResponse = z.infer<typeof getAbilityResponseSchema>
