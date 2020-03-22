export const state = () => ({
  list: []
})

export const mutations = {
  add(state, pokeNo) {
    state.list.push({
      pokeNo
    })
  },
  remove(state, poke) {
    const removePoke = state.list
      .map(function(poke) {
        return poke.pokeNo
      })
      .indexOf(poke)

    state.list.splice(removePoke, 1)
  },
  removeAll(state) {
    state.list = []
  },
  random(state) {
    state.list = []
    let pokemon
    for (pokemon = 0; pokemon < 6; pokemon++) {
      state.list.push({
        pokeNo: Math.floor(Math.random() * 151) + 1
      })
    }
  }
}
