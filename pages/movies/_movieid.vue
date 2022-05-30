<template>
  <Loading v-if="$fetchState.pending" />
  <div v-else class="single-movie">
    <div class="container absolute top-8 left-0 right-0 z-10">
      <nuxt-link :to="{ name: 'index' }" class="button">Home</nuxt-link>
    </div>

    <div class="w-full h-[50vh] overflow-hidden relative">
      <img
        :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
        alt=""
      />
      <span class="bg-black/60 absolute w-full h-full top-0"></span>
    </div>

    <div
      class="container grid grid-cols-3 grid-rows-2 justify-center gap-8 -mt-32 z-10 absolute"
    >
      <img
        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
        alt=""
        class="w-48 row-span-2 mx-auto"
      />

      <div class="col-span-2 row-span-1 row-end-1">
        <h1
          class="text-white text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide"
        >
          {{ movie.title }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loading from "~/components/Loading.vue";

export default {
  name: "single-movie",
  data() {
    return {
      movie: null,
    };
  },
  async fetch() {
    await this.getSingleMovie();
  },
  fetchDelay: 1000,
  methods: {
    async getSingleMovie() {
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movieid}?api_key=6c5ae941b98ff4368470dfbe28aa0758&language=en-US`
      );
      const result = await data;
      this.movie = result.data;
    },
  },
  components: { Loading },
};
</script>

<style></style>
