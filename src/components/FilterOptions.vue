<template>
  <div>
    <h2>Filter your workout by {{ filterType }}</h2>
    <div v-for="(type, index) in this[slug]" v-bind:key="index" class="filter-button">
      <button v-on:click="UPDATE_CURRENT_FILTER(type)" class="ui primary button">{{ type }}</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  props: {
    filterType: String,
    slug: String
  },
  computed: {
    ...mapState([
      'exercises',
      'exercise_types',
      'bodyparts'
    ]),
  },
  methods: {
    ...mapMutations(['UPDATE_CURRENT_FILTER']),
  }
};
</script>

<style lang="scss">
  .filter-button {
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>
