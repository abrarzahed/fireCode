<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"></BlogPost>
    <BlogPost
      :post="post"
      v-for="(post, index) in blogPostsFeed"
      :key="index"
    ></BlogPost>

    <!--view more blog cards -->
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in blogPostsCards"
            :key="index"
          ></BlogCard>
        </div>
      </div>
    </div>

    <!-- Call to action -->
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>Never miss a post. Ragister for your free account today</h2>
        <router-link class="router-button" :to="{ name: 'Login' }">
          Ragister Now <Arrow class="arrow arrow-light"></Arrow>
        </router-link>
      </div>
    </div>

    <ProjectCard :projects="projects"></ProjectCard>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
import BlogCard from "@/components/BlogCard.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    Arrow,
    ProjectCard,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Abrar Hussen Zahed",
        blogPost:
          "I am a front-end web developer. I have made this blog website as a portfolio. And this is open for all to write blog articles about programming including HTML, CSS, JavaScript and more. So to publish your first article Register now ✒📝",
        welcomeScreen: true,
        photo: "code",
      },
    };
  },
  computed: {
    blogPostsFeed() {
      return this.$store.getters.blogPostsFeed;
    },
    blogPostsCards() {
      return this.$store.getters.blogPostsCards;
    },
    user() {
      return this.$store.state.user;
    },
    projects() {
      return this.$store.state.projects.slice(0, 4);
    },
  },
};
</script>
<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  background: #000;
  color: #fff;
  .container {
    max-width: 760px;
    padding: 80px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 400;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 36px;
      }
    }
  }
}
</style>
