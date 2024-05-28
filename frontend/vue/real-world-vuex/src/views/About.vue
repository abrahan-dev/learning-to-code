<template>
  <div class="about">
    <h1>A site for events to better the world.</h1>
    <p>{{ user.name }}</p>
    <p>{{ user.id }}</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
    <p>There are {{ categoriesLength }} categories.</p>
    <p>{{ getEventById(1) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

  export default {
    // computed: mapState({
    //   userName: state => state.user.name,
    //   userId: state => state.user.id,
    //   categories: state => state.categories,
    //
    //   alternative if we do not use dot notation
    //   user: 'user',
    //   categories: 'categories'
    // })
    //
    //   even more concise
    // computed: mapState(['user', 'categories'])
    //
    // mixing mapState and other properties
    computed: {
      categoriesLength() {
        return this.$store.getters.catLength;
      },
      ...mapState(['user', 'categories']),
      // without mapGetters()
      // getEvent() {
      //   return this.$store.getters.getEventById
      // }
      ...mapGetters(['getEventById'])
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
