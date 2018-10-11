<template>
  <div class="home">
    <h2>You are currently filtering by {{currentFilter}} workouts</h2>
    <div class="workout-wrapper">
      <div v-for="(exercise, index) in relevantExercises" v-bind:key="index">
        <div class='ui centered card'>
          <div class='content'>
            <div class='header'>
              {{ exercise.exercise_name }}
            </div>
            <div class='meta'>
              {{ exercise.ex_type }}
            </div>
            <div class='meta'>
              {{ exercise.bodypart }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <FilterOptions filterType="Exercise Type" slug="exercise_types"/>
    <FilterOptions filterType="Body Part" slug="bodyparts"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import FilterOptions from '@/components/FilterOptions';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'home',
  components: {
    HelloWorld,
    FilterOptions
  },
  computed: {
    ...mapState([
      'exercises',
      'currentFilter',
    ]),
    relevantExercises () {
      return this.$store.state.exercises.filter(exercise => exercise.ex_type === this.$store.state.currentFilter || exercise.bodypart === this.$store.state.currentFilter)
    }
  },
  methods: {

  }
};
</script>

<style lang="scss">
  .workout-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
