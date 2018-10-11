<template>
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
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'exercise',
  props: {
    exercise: Object
  },
};
</script>

<style lang="scss">

  .ui.centered.card {
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
