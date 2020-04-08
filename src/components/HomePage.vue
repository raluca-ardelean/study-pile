<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
    </div>
  </v-container>
  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4 v-for="(item, index) in categoriesResponse" :key="index" mb-2>
        <v-card>
          <v-card-title primary-title>
            <div><h1>{{item.name}}</h1></div>
            <br/>
            <br/>
            <ul>
              <li v-for="l in  item.links" :key="l.id">
                <a :href="l.link">{{l.name}}</a>
              </li>
            </ul>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import axios from "axios";
import categories from "./categories.js";

console.log(categories);

export default {
  data() {
    return {
      categoriesResponse: categories,
      loading: true
    };
  },

  mounted() {
    // get categories from the server using axios
    this.loading = false;
  }
};
</script>

<style lang="stylus" scoped>
.v-progress-circular {
  margin: 1rem;
}
ul{
  list-style-type:none;
}
</style>