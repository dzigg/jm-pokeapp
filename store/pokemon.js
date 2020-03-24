import axios from 'axios'

export const state = () => ({
  pokedex: [],
  loadedPokemon: [],
  party: []
})

export const actions = {
  async getInitialPokemon({ state, dispatch, commit }) {
    // if (!state.pokedex) {
    for (let i = 1; i <= 151; i++) {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then((response) => {
          commit('getInitialPokemon', response.data)
        })
      if (i === 12) {
        dispatch('showPokemon')
      }
      // }
    }
  },

  async showPokemon({ state, commit }) {
    for (let i = 0; i < 12; i++) {
      commit('showPokemon', await state.pokedex[i])
    }
  }
}

export const mutations = {
  getInitialPokemon(state, poke) {
    state.pokedex.push({
      id: poke.id,
      name: poke.name,
      types: poke.types,
      sprite: poke.sprites.front_default
    })
  },
  showPokemon(state, poke) {
    state.loadedPokemon.push({
      id: poke.id,
      name: poke.name,
      types: poke.types,
      sprite: poke.sprite
    })
  },
  loadPokemon(state) {
    const currentLength = state.loadedPokemon.length

    for (let i = currentLength; i < currentLength + 12; i++) {
      if (i <= 150) {
        state.loadedPokemon.push(state.pokedex[i])
      } else {
        break
      }
    }
  },
  add(state, poke) {
    state.party.push({
      id: poke.id,
      name: poke.name,
      types: poke.types,
      sprite: poke.sprite
    })
  },
  remove(state, poke) {
    const removePoke = state.party
      .map(function(poke) {
        return poke.id
      })
      .indexOf(poke.id)

    state.party.splice(removePoke, 1)
  },
  removeAll(state) {
    state.loadedPokemon = []
    state.party = []
    state.pokedex = []
  }
}
