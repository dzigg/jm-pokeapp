import createPersistedState from 'vuex-persistedstate'
import * as Cookie from 'js-cookie'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'party',
      paths: ['pokemon.party'],
      getItem: (key) => Cookie.getJSON(key),
      setItem: (key, value) =>
        Cookie.set(key, value, { expires: 3, secure: true }),
      removeItem: (key) => Cookie.remove(key)
    })(store)
  })
}
