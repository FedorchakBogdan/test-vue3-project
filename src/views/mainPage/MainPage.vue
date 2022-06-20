<template>
  <div class="container">
    <movie-card  v-for="item in movies" :key="item.id" :movie="item" />
  </div>
</template>

<script lang="ts">

import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

import IMovie from '@/interfaces/movies/movie'

import MovieCard from '@/components/base/MovieCard.vue'

export default defineComponent({
  name: 'MainPage',
  components: {
    MovieCard
  },
  setup () {
    const store = useStore()
    const movies = computed((): Array<IMovie> => store.getters['movies/getMoviesList'])
    onMounted(async (): Promise<void> => {
      await store.dispatch('movies/getMovies')
    })
    return {
      movies
    }
  }
})
</script>

<style lang="scss" scoped>
.container{
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1vw;
}
</style>
