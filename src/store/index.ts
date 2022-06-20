import Vuex from 'vuex'
import movies from '@/store/movies'
import RootState from '@/interfaces/root-sate/index'

export default new Vuex.Store<RootState>({
  modules: {
    movies
  }
})
