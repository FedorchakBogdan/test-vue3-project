import { ActionContext } from 'vuex'
import axios from 'axios'
import IMovie from '@/interfaces/movies/movie'
import AxiosResponse from '@/interfaces/axios-respones/axiosResponse'
import IMovieState from '@/interfaces/movies/state'
import RootState from '@/interfaces/root-sate/index'

type MoviesResponse = {
  results: Array<IMovie>;
}

export default {
  namespaced: true,
  state (): IMovieState {
    return {
      movies: [] as Array<IMovie>
    }
  },
  getters: {
    getMoviesList (state: IMovieState) {
      return state.movies
    }
  },
  mutations: {
    setMovies (state: IMovieState, movies: Array<IMovie>) {
      state.movies = movies
    }
  },
  actions: {
    async getMovies ({ commit }: ActionContext<IMovieState, RootState>): Promise<void> {
      const { data } = await axios.get<AxiosResponse<MoviesResponse>>('/discover/movie?api_key=7968e1496be8cb4a0863661448fc012a')
      console.log(data.results, '111')
      commit('setMovies', data.results)
    }
  },
  modules: {
  }
}
