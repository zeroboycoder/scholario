<template>
  <div
    class="d-flex my-3 mr-4 rounded"
    style="width: 100%; box-shadow: var(--box-shadow)"
  >
    <div style="width: 35%">
      <img
        :src="imgUrl"
        alt="Scholarship Image"
        style="
          width: 100%;
          height: 100%;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        "
      />
    </div>
    <div class="pa-3" style="width: 65%">
      <div style="font-weight: 500; font-size: 16px">{{ scholarshipName }}</div>
      <div style="font-size: 13px; margin: 2px 0">{{ universityName }}</div>
      <div>
        <div class="d-flex">
          <v-icon size="18" style="color: var(--secondary-color)"
            >mdi-account-supervisor-outline</v-icon
          >
          <div class="text-caption">Applicant: {{ availableApplicants }}</div>
        </div>
        <div class="d-flex">
          <v-icon size="18" style="color: var(--secondary-color)"
            >mdi-calendar-range</v-icon
          >
          <div class="text-caption">Applicant: {{ endDate }}</div>
        </div>
      </div>
      <v-btn
        style="background-color: var(--primary-color)"
        class="mt-1"
        @click="isSaved = !isSaved"
      >
        <v-icon class="mr-1">{{ btnIcon }}</v-icon>
        <div class="text-body-2">{{ btnText }}</div>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "imgUrl",
    "scholarshipName",
    "universityName",
    "availableApplicants",
    "endDate",
  ],
  data() {
    return {
      isSaved: false,
    };
  },
  computed: {
    btnIcon() {
      return this.isSaved ? "mdi-heart" : "mdi-heart-outline";
    },
    btnText() {
      return this.isSaved ? "Saved scholarship" : "Save scholarship";
    },
  },
};
</script>
