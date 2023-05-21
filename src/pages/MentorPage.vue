<template>
  <div class="v-container">
    <div>
      <h5 class="text-h6 mb-2">Suggested Mentors</h5>
      <div class="d-flex justify-space-between">
        <MentorCard
          v-for="mentor in mentors"
          :key="mentor"
          :imgUrl="mentor.imgUrl"
          :name="mentor.name"
          :universityName="mentor.universityName"
        />
      </div>
    </div>

    <div class="mt-4">
      <h5 class="text-h6 mb-2">Scholarship Mentors</h5>
      <div class="d-flex justify-space-between flex-wrap">
        <MentorCard
          v-for="mentor in scholarshipMentors"
          :key="mentor"
          :imgUrl="mentor.imgUrl"
          :name="mentor.name"
          :universityName="mentor.universityName"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MentorCard from "../components/card/MentorCard.vue";
import MentorImage from "../assets/mentor.png";
import MentorOneImage from "../assets/mentor1.png";

export default {
  components: { MentorCard },
  data() {
    return {
      mentors: [
        {
          imgUrl: MentorImage,
          name: "Jame Smith",
          universityName: "EIT International Excellence",
        },
        {
          imgUrl: MentorOneImage,
          name: "Rose Jerry",
          universityName: "Chulalongkorn Univeristy",
        },
      ],
      scholarshipMentors: [
        {
          imgUrl: MentorImage,
          name: "Jame Smith",
          universityName: "EIT International Excellence",
        },
        {
          imgUrl: MentorOneImage,
          name: "Rose Jerry",
          universityName: "Chulalongkorn Univeristy",
        },
        {
          imgUrl: MentorImage,
          name: "Jame Smith",
          universityName: "EIT International Excellence",
        },
        {
          imgUrl: MentorOneImage,
          name: "Rose Jerry",
          universityName: "Chulalongkorn Univeristy",
        },
        {
          imgUrl: MentorImage,
          name: "Jame Smith",
          universityName: "EIT International Excellence",
        },
        {
          imgUrl: MentorOneImage,
          name: "Rose Jerry",
          universityName: "Chulalongkorn Univeristy",
        },
        {
          imgUrl: MentorImage,
          name: "Jame Smith",
          universityName: "EIT International Excellence",
        },
        {
          imgUrl: MentorOneImage,
          name: "Rose Jerry",
          universityName: "Chulalongkorn Univeristy",
        },
      ],
    };
  },
};
</script>
