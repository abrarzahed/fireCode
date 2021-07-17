<template>
  <div class="wrapper">
    <h3>Some more projects</h3>
    <div class="project-container">
      <div v-for="(project, index) in projects" :key="index" class="project">
        <img :src="require(`../assets/project/${project.pImage}.jpg`)" alt="" />
        <div class="project-info">
          <h4>{{ project.pTitle }}</h4>
          <p>{{ project.pDesc }}</p>
          <a :href="project.pLink" target="Blank">Visit website</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects",
  props: ["projects"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #fff;

  padding: 4%;
  h3 {
    font-weight: 400;
    font-size: 28px;
    margin-bottom: 32px;
    text-transform: capitalize;
  }

  .project-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
    .project {
      -webkit-box-shadow: 0px 10px 13px -7px #000000,
        10px 5px 15px 5px rgba(0, 0, 0, 0);
      box-shadow: 0px 10px 13px -7px #000000, 10px 5px 15px 5px rgba(0, 0, 0, 0);
      min-height: 380px;
      border-radius: 12px;
      transition: all 0.2s ease-in;
      border-radius: 12px;
      background: #ffffff;
      border-bottom: 10px solid #48a07a;
      border-top: 2px solid #48a07a;
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);

      &:hover {
        transform: scale(1.04);
        box-shadow: 8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff;
      }

      img {
        width: 100%;
        min-height: 200px;
        max-height: 200px;
        border-radius: 12px 12px 0 0;
        object-fit: cover;
      }
      .project-info {
        padding: 20px;
        display: grid;
        gap: 16px;
        h4 {
          text-transform: uppercase;
          font-size: 18px;
          font-weight: 400;
        }

        a {
          text-decoration: none;
          align-self: end;
          background: #202020;
          color: #eee;
          padding: 6px 12px;
          width: max-content;
          border-radius: 20px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          &:hover {
            background: #48a07a;
          }
        }
      }
    }
  }
}
</style>
