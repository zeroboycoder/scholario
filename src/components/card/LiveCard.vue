<template>
  <div class="my-3 mr-4">
    <img :src="imgUrl" alt="Live Image" />
    <h5>{{ liveName }}</h5>
    <div class="text-body-2">{{ mentorName }}</div>
  </div>
</template>

<script>
export default {
  props: ["imgUrl", "liveName", "mentorName"],
};
</script>
