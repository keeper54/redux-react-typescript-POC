import { type } from "os";

export interface PokemonListItem {
  name: string
  url: string
}

export interface PokemonAbility2 {
  name: string
  url: string
}

export interface PokemonAbility {
  ability: PokemonAbility2
  is_hidden: boolean
  slot: number
}

export interface PokemonForm {
  name: string
  url: string
}

export interface PokemonVersion {
  name: string
  url: string
}

export interface PokemonGameIndice {
  game_index: number
  version: PokemonVersion
}

export interface PokemonMove2 {
  name: string
  url: string
}

export interface PokemonMoveLearnMethod {
  name: string
  url: string
}

export interface PokemonVersionGroup {
  name: string
  url: string
}

export interface PokemonVersionGroupDetail {
  level_learned_at: number
  move_learn_method: PokemonMoveLearnMethod
  version_group: PokemonVersionGroup
}

export interface PokemonMove {
  move: PokemonMove2
  version_group_details: PokemonVersionGroupDetail[]
}

export interface PokemonSpecies {
  name: string
  url: string
}

export interface PokemonSprites {
  back_default: string
  back_female?: any
  back_shiny: string
  back_shiny_female?: any
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}

export interface PokemonStat2 {
  name: string
  url: string
}

export interface PokemonStat {
  base_stat: number
  effort: number
  stat: PokemonStat2
}

export interface PokemonType2 {
  name: string
  url: string
}

export interface PokemonType {
  slot: number
  type: PokemonType2
}
