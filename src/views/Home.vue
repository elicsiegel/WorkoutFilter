<template>
  <div class="home">
    <h2>{{currentFilter}}</h2>
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
      'currentFilter'
    ]),
  },
  methods: {

  }
};
</script>
