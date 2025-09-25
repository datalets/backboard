<template>
  <div class="section-countdown"
      :title="timespan">

    <countdown v-if="deadline" :deadline="deadline" />
  </div>
</template>

<script>
import FlipCountdown from "vue-flip-countdown";

export default {
  name: "Countdown",
  props: {
    event: {
      required: true,
    },
  },
  components: {
    countdown: FlipCountdown,
  },
  data() {
    return {
      timespan: "",
      deadline: "2000-01-01 12:00",
    };
  },
  created() {
    setTimeout(() => {
      if (!this.event.has_started && this.event.starts_at) {
        this.deadline = this.event.starts_at.replace("T", " ");
      } else if (this.event.ends_at) {
        this.deadline = this.event.ends_at.replace("T", " ");
      } else {
        this.deadline = null;
      }
      if (this.event.starts_at) {
        this.timespan = `${this.event.starts_at} → ${this.event.ends_at}`;
      } else {
        this.timespan = "";
      }
    }, 1000);
  },
};
</script>
