<template>
  <div class="movie" @click="$router.push({name: 'movie-info', id: movie.id })">
    <img class="poster" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`">
    <p class="title">{{ movie.title }}</p>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import IMovie from '@/interfaces/movies/movie'

export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object as PropType<IMovie>,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.movie{
  width: 100%;
  max-width: 300px;
  cursor: pointer;
  padding: 20px;
  &:hover{
    border: 1px solid black;
    color: blue;
  }
  .poster{
    width: 250px;
    height: 350px;
  }
  .title {
    text-align: center;
  }
}
</style>
