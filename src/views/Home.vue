<template>
  <div class="home">
    <div class="workout-wrapper">
      <div>
        <div class="title-wrapper">
          <h2>You are currently filtering by:</h2>
          <h3>{{currentFilter}}</h3>
        </div>
        <div class="filters-wrapper">
          <FilterOptions filterType="Exercise Type" slug="exercise_types"/>
          <FilterOptions filterType="Body Part" slug="bodyparts"/>
        </div>
      </div>
      <div>
        <h2>Matching Exercises</h2>
        <div v-for="(exercise, index) in relevantExercises" v-bind:key="index">
          <div class='ui centered card'>
            <div class='content'>
              <div class='header'>
                {{ exercise.exercise_name }}
              </div>
              <div class='meta'>
                Exercise Type: {{ exercise.ex_type }}
              </div>
              <div class='meta'>
                Bodypart: {{ exercise.bodypart }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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

  .filters-wrapper {
    display: flex;
  }
</style>
