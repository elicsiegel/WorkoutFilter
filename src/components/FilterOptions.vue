<template>
  <div class="filter-wrapper">
    <h2>Filter your workout by {{ filterType }}</h2>
    <div class="buttons-wrapper">
      <div v-for="(type, index) in this[slug]" v-bind:key="index" class="filter-button">
        <button v-on:click="UPDATE_CURRENT_FILTER(type)" class="ui primary button">{{ capitalizedType(type) }}</button>
      </div>
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
    capitalizedType: function (type) {
      return type.charAt(0).toUpperCase() + type.substr(1);
    }
  },
};
</script>

<style lang="scss">
  .filter-wrapper {
    margin-left: 10px;
    margin-right: 10px;
    width: 50%;
  }
  .filter-button {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .buttons-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
  }

  @media (max-width: 850px) {
    .filter-wrapper {
      width: 100%;
    }
  }
</style>
