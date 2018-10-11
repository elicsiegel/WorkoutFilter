<template>
  <div>
    <h1>Filter your workout by {{ filterType }}</h1>
    <div v-for="(type, index) in this[slug]" v-bind:key="index">
      <button v-on:click="UPDATE_CURRENT_FILTER(type)" class="rm">{{ type }}</button>
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
