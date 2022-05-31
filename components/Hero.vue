<template>
   <div class="hero overflow-hidden">
      <div>
         <img
            class="w-full h-[400px] md:h-full object-cover"
            src="../assets/images/movie-hero.webp"
            alt=""
         />
         <span class="w-full h-full absolute top-0 bg-black/60"></span>
      </div>
      <div
         class="container z-50 absolute top-0 m-0 w-full h-full flex flex-col justify-center"
      >
         <div class="px-[16px] w-full max-w-[1400px] mx-auto">
            <span
               class="text-red-600 text-xl uppercase font-bold tracking-widest"
               >Welcome.</span
            >
            <h1 class="text-white font-semibold text-4xl mt-4">
               Milion of movies, TV shows and people to discover.
            </h1>
            <a href="#movie-container" class="mt-8 button">View Movies</a>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Hero",
};
</script>

<style></style>
