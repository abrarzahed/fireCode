<template>
  <div>
    <ProjectCard :projects="projects"></ProjectCard>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  components: { ProjectCard },

  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style></style>
