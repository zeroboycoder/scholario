<template>
  <v-bottom-navigation v-model="value" mode="shift">
    <v-btn @click="$router.push('/')">
      <v-icon>mdi-television-play</v-icon>

      <span>Home</span>
    </v-btn>

    <v-btn @click="$router.push('/mentors')">
      <v-icon>mdi-music-note</v-icon>

      <span>Mentors</span>
    </v-btn>

    <v-btn @click="$router.push('/resources')">
      <v-icon>mdi-book</v-icon>

      <span>Resources</span>
    </v-btn>

    <v-btn @click="$router.push('/profile')">
      <v-icon>mdi-image</v-icon>

      <span>Profile</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ value: 0 }),
};
</script>
