<template>
  <div style="max-width: 45%">
    <img :src="imgUrl" alt="Mentor Image" style="width: 100%" />
    <div class="d-flex justify-space-between align-center">
      <div class="text-body-2">{{ name }}</div>
      <div>
        <v-icon size="14" style="color: var(--secondary-color)">mdi-star</v-icon>
        <v-icon size="14" style="color: var(--secondary-color)">mdi-star</v-icon>
        <v-icon size="14" style="color: var(--secondary-color)">mdi-star</v-icon>
        <v-icon size="14" style="color: var(--secondary-color)">mdi-star-half</v-icon>
        <v-icon size="14" style="color: var(--secondary-color)">mdi-star-outline</v-icon>
      </div>
    </div>
    <div>
      <div class="text-caption">{{ universityName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgUrl", "name", "universityName"],
};
</script>
