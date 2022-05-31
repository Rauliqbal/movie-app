<template>
   <Loading v-if="$fetchState.pending" class="absolute z-20 inset-0" />
   <div v-else class="single-movie">
      <div class="container absolute top-4 inset-x-0 z-10">
         <nuxt-link :to="{ name: 'index' }" class="btn-prev"><</nuxt-link>
      </div>

      <div class="w-full h-[40vh] lg:h-[60vh] overflow-hidden relative">
         <img
            :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
            alt=""
            class="object-cover w-full h-[40vh]"
         />
         <span
            class="bg-gradient-to-t from-gray-900 absolute object-cover w-full h-[40vh] top-0"
         ></span>
      </div>

      <div class="container absolute">
         <div
            class="w-full md:w-[70%] mx-auto grid grid-cols-5 justify-center items-end gap-4 md:gap-8 -mt-12 z-10 inset-x-0"
         >
            <img
               :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
               alt=""
               class="col-span-2 w-48 md:w-56 lg:w-60 mx-auto rounded-xl"
            />

            <div class="col-span-3 pt-8 pb-4">
               <h1 class="movie_detail-title">
                  {{ movie.title }}
               </h1>

               <p
                  class="px-2 py-[2px] text-xs my-2 bg-red-600 text-white rounded-md inline-block"
               >
                  {{ movie.vote_average }}
               </p>
               <p class="text-gray-400 text-xs">{{ movie.tagline }}</p>
               <p class="text-gray-400 mt-1 text-xs">
                  {{
                     new Date(movie.release_date).toLocaleString("en-us", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                     })
                  }}
               </p>
               <p class="text-white text-base hidden md:block">
                  {{ movie.overview }}
               </p>
            </div>
         </div>
         <p class="text-xl tracking-wider text-white font-semibold mt-6">
            Overview
         </p>
         <p class="text-white text-sm mt-1 leading-relaxed">
            {{ movie.overview }}
         </p>
      </div>
   </div>
</template>

<script>
import axios from "axios";

export default {
   name: "single-movie",

   transitions: "home",
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
};
</script>

<style></style>
