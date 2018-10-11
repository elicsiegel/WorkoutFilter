<template>
  <div class="home">
    <div class="workout-wrapper">
      <div>
        <div class="title-wrapper">
          <h1>Exercise Finder</h1>
          <p>Click on a exercise filter to show exercises that involve that filter</p>
          <h2>You are currently filtering by:</h2>
          <h3>{{currentFilter}}</h3>
        </div>
        <div class="filters-wrapper">
          <FilterOptions filterType="Exercise Type" slug="exercise_types"/>
          <FilterOptions filterType="Body Part" slug="bodyparts"/>
        </div>
      </div>
      <div class="outer-exercise-wrapper">
        <h2>Matching Exercises</h2>
        <div class="exercise-wrapper">
          <div class='ui centered card' v-bind:style="{ display: 'none' }"></div>
          <exercise v-for="(exercise, index) in relevantExercises" v-bind:key="index" :exercise="exercise"></exercise>
          <div class='ui centered card hide' v-bind:style="{ display: 'none' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FilterOptions from '@/components/FilterOptions';
import Exercise from '@/components/Exercise';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'home',
  components: {
    FilterOptions,
    Exercise
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
  .home {
    display: flex;
    justify-content: center;
    margin-top: 3%;
    margin-right: 2%;
    margin-left: 2%;

    .title-wrapper {
      width: 100%;

      h3 {
        margin-top: 0px;
        margin-bottom: 14px;
      }
    }
  }

  .workout-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

  .outer-exercise-wrapper {
    margin-top: 25px;
  }
  .exercise-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .filters-wrapper {
    display: flex;
  }

  .hide {
    display: none;
  }

  @media (max-width: 850px) {
    .filters-wrapper {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
