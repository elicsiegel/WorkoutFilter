import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Find your WOD",
    currentFilter: "Nothing",
    exercises: [
      {exercise_name: "Lunge", ex_type: 'lift', bodypart: 'Lower Body'},
      {exercise_name: "Squat", ex_type: 'lift', bodypart: 'Lower Body'},
      {exercise_name: "Split Squat", ex_type: 'lift', bodypart: 'Lower Body'},
      {exercise_name: "Deadlift", ex_type: 'lift', bodypart: 'Lower Body'},
      {exercise_name: "Good Morning", ex_type: 'lift', bodypart: 'Lower Body'},
      {exercise_name: "Kettlebell Swing", ex_type: 'lift', bodypart: 'Lower Body'},
      {exercise_name: "Leg Press", ex_type: 'lift', bodypart: 'Lower Body'},
      {exercise_name: "Leg Extension", ex_type: 'lift', bodypart: 'Lower Body'},
      {exercise_name: "Leg Curl", ex_type: 'lift', bodypart: 'Lower Body'},
      {exercise_name: "Push-up", ex_type: 'bodyweight', bodypart: 'Upper Body'},
      {exercise_name: "Bench Press", ex_type: 'lift', bodypart: 'Upper Body'},
      {exercise_name: "Incline Press", ex_type: 'lift', bodypart: 'Upper Body'},
      {exercise_name: "Decline Press", ex_type: 'lift', bodypart: 'Upper Body'},
      {exercise_name: "Pec Deck", ex_type: 'lift', bodypart: 'Upper Body'},
      {exercise_name: "Chest Fly", ex_type: 'lift', bodypart: 'Upper Body'},
      {exercise_name: "Pull-up", ex_type: 'bodyweight', bodypart: 'Upper Body'},
      {exercise_name: "Banded Pull-up", ex_type: 'lift', bodypart: 'Upper Body'},
      {exercise_name: "Rower(Cardio)", ex_type: 'cardio', bodypart: 'Cardio'},
      {exercise_name: "Overhead Press", ex_type: 'lift', bodypart: 'Upper Body'},
      {exercise_name: "Upright Rows", ex_type: 'lift', bodypart: 'Upper Body'},
      {exercise_name: "Lateral Raise", ex_type: 'lift', bodypart: 'Upper Body'},
      {exercise_name: "Curl", ex_type: 'lift', bodypart: 'Upper Body'},
      {exercise_name: "Tricep Extension", ex_type: 'lift', bodypart: 'Upper Body'},
      {exercise_name: "Machine Shrugs", ex_type: 'lift', bodypart: 'Upper Body'},
      {exercise_name: "Shrugs", ex_type: 'lift', bodypart: 'Upper Body'},
      {exercise_name: "Calf Raise", ex_type: 'lift', bodypart: 'Lower Body'},
      {exercise_name: "Plank", ex_type: 'bodyweight', bodypart: 'Core'},
      {exercise_name: "Superman", ex_type: 'bodyweight', bodypart: 'Core'},
      {exercise_name: "Trunk Rotation", ex_type: 'bodyweight', bodypart: 'Core'},
      {exercise_name: "V-Up", ex_type: 'bodyweight', bodypart: 'Core'},
      {exercise_name: "Situp", ex_type: 'bodyweight', bodypart: 'Core'},
      {exercise_name: "Abdominal Crunch", ex_type: 'bodyweight', bodypart: 'Core'},
      {exercise_name: "Bicycle", ex_type: 'cardio', bodypart: 'Cardio'},
      {exercise_name: "Snatch", ex_type: 'lift', bodypart: 'Full Body'},
      {exercise_name: "Clean", ex_type: 'lift', bodypart: 'Full Body'},
      {exercise_name: "Clean and Jerk", ex_type: 'lift', bodypart: 'Full Body'},
      {exercise_name: "Hang Clean", ex_type: 'lift', bodypart: 'Full Body'},
      {exercise_name: "Hang Snatch", ex_type: 'lift', bodypart: 'Full Body'},
      {exercise_name: "Burpees", ex_type: 'plyo', bodypart: 'Plyo'},
      {exercise_name: "Mountain Climbers", ex_type: 'plyo', bodypart: 'Plyo'},
      {exercise_name: "Wallballs", ex_type: 'lift', bodypart: 'Full Body'},
      {exercise_name: "Thrusters", ex_type: 'lift', bodypart: 'Full Body'},
      {exercise_name: "Jumping Jacks", ex_type: 'plyo', bodypart: 'Plyo'},
      {exercise_name: "Box Jump", ex_type: 'plyo', bodypart: 'Plyo'},
      {exercise_name: "Sprint", ex_type: 'cardio', bodypart: 'Cardio'},
      {exercise_name: "Barbell Row", ex_type: 'lift', bodypart: 'Upper Body'},
      {exercise_name: "Bike", ex_type: 'cardio', bodypart: 'Cardio'},
      {exercise_name: "Run", ex_type: 'cardio', bodypart: 'Cardio'},
      {exercise_name: "Airdyne Bike", ex_type: 'cardio', bodypart: 'Cardio'},
      {exercise_name: "Stationary Bike", ex_type: 'cardio', bodypart: 'Cardio'},
      {exercise_name: "Stairmaster", ex_type: 'cardio', bodypart: 'Cardio'},
      {exercise_name: "Treadmill", ex_type: 'cardio', bodypart: 'Cardio'},
      {exercise_name: "Elliptical", ex_type: 'cardio', bodypart: 'Cardio'},
      {exercise_name: "Muscle Up", ex_type: 'lift', bodypart: 'Upper Body'},
      {exercise_name: "Broad Jump", ex_type: 'plyo', bodypart: 'Plyo'},
    ],
    exercise_types: ["lift", "bodyweight", "cardio", "plyo"],
    bodyparts: ["Lower Body", "Upper Body", "Cardio", "Core", "Full Body", "Plyo"]
  },
  getters: {
    exercisesByFitler: (state) => (filter) => {
      return state.exercises.filter(exercise => exercise.ex_type === filter)
    }
  },
  mutations: {
    UPDATE_CURRENT_FILTER: (state, filter) => {
      state.currentFilter = filter;
    }
  },
  computed: {
    relevantExercises () {
      return store.state.exercises.filter(exercise => exercise.ex_type === store.state.currentFilter)
    }
  },
});
