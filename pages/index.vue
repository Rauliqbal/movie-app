<template>
   <div>
      <!-- Hero -->
      <Hero />
      <Loading v-if="$fetchState.pending" class="pt-[120px] items-start" />
      <!-- Movies -->
      <div v-else class="container">
         <h2
            class="text-2xl md:text-3xl text-white capitallize mt-6 mb-4 font-semibold"
         >
            Now Playing
         </h2>
         <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8"
            id="movie-container"
         >
            <nuxt-link
               class="movie group"
               :to="{ name: 'movies-movieid', params: { movieid: movie.id } }"
               v-for="(movie, index) in movies"
               :key="index"
            >
               <div class="relative overflow-hidden rounded-xl">
                  <img
                     class="block w-full h-full group-hover:scale-105 transition duration-500 ease-out"
                     :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                     alt=""
                  />

                  <p
                     class="absolute top-4 left-4 font-semibold flex justify-center items-center py-1 px-3 text-xs bg-red-600 text-white rounded-full"
                  >
                     {{ movie.vote_average }}
                  </p>
               </div>

               <div class="p2">
                  <h1 class="movie-title">
                     {{ movie.title }}
                  </h1>
                  <p class="text-gray-400 text-sm">
                     {{
                        new Date(movie.release_date).toLocaleString("en-us", {
                           month: "long",
                           day: "numeric",
                           year: "numeric",
                        })
                     }}
                  </p>
               </div>
            </nuxt-link>
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios";
import Hero from "~/components/Hero.vue";
import Loading from "~/components/Loading.vue";


export default {
   transitions: "home",

   name: "IndexPage",
   components: { Hero, Loading },

   head() {
      return {
         title: "Ri Movie - Streaming",
         meta: [
            {
               hid: "description",
               name: "description",
               content: "Streaming Movies Online ",
            },
            {
               hid: "keyword",
               name: "keyword",
               content: "Ri Movie",
            },
         ],
      };
   },

   data() {
      return {
         movies: [],
         
      };
   },
   async fetch() {
      await this.getMovies();
   },
   fetchDelay: 1000,
   methods: {
      async getMovies() {
         const data = axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=6c5ae941b98ff4368470dfbe28aa0758&language=en-US&page=1`
         );

         const result = await data;

         result.data.results.forEach((movie) => {
            this.movies.push(movie);
         });
         console.log(this.movies);
      },

      
   },
};
</script>
