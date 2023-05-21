<template>
  <v-bottom-navigation v-model="value" mode="shift">
    <v-btn @click="$router.push('/')">
      <v-icon>mdi-home-outline</v-icon>

      <span>Scholarships</span>
    </v-btn>

    <v-btn @click="$router.push('/mentors')">
      <v-icon>mdi-account-multiple-outline</v-icon>

      <span>Mentors</span>
    </v-btn>

    <v-btn @click="$router.push('/resources')">
      <v-icon>mdi-play-box-multiple-outline</v-icon>

      <span>Workshops</span>
    </v-btn>

    <v-btn @click="$router.push('/profile')">
      <v-icon>mdi-account-outline</v-icon>

      <span>Profile</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ value: 0 }),
};
</script>
