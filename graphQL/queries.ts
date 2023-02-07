import { gql } from "graphql-request";

// Get all query
export const query = gql`
{
  types{
    results{
      id
      url
      name
    }
  }
}
`

// Get pokimon ditails 


export const Pokemonquery = gql`
{
  pokemons(limit:10 offset:1){
    results{
      id
      name
      image
      dreamworld
    }
  }
  types{
    results{
      id
      url
      name
    }
  }
}
`

// pokemons Moves

export const PokemonMoves = gql`
{
  moves{
    results{
      url
      name
    }
  }
}
`
