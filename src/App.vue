<template>
  <div class="app-wrapper">
    <Loading v-if="loading"></Loading>
    <div class="app" v-if="this.$store.state.postLoaded">
      <Navigation v-if="navigation"></Navigation>
      <router-view />
      <Footer v-if="navigation"></Footer>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import firebase from "firebase/app";
import "firebase/auth";
import Loading from "@/components/Loading.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Footer,
    Loading,
  },
  data() {
    return {
      navigation: null,
      loading: true,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser");
      }
    });
    this.checkRoute();
    this.$store.dispatch("getPost");
  },
  beforeCreate() {
    // console.log("HI");
  },

  mounted() {
    this.loading = false;
  },
  methods: {
    checkRoute() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "Register" ||
        this.$route.name === "ForgotPassword"
      ) {
        this.navigation = false;
        return;
      }
      this.navigation = true;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Qahiri&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}
.router-link-exact-active {
  color: #66d1a2;
}
.arrow {
  margin-left: 8px;
  width: 12px;
  path {
    fill: #000;
  }
}
.arrow-light {
  path {
    fill: #eee;
  }
}

button,
.router-button {
  transition: 500ms ease-in-out;
  cursor: pointer;
  margin: 24px;
  padding: 12px 24px;
  background: #303030;
  color: #eee;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
  &:hover {
    background: #484848;
  }
}
.button-ghost {
  color: #000;
  padding: 0;
  border-radius: 0;
  margin-top: 50px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  @media (min-width: 700px) {
    margin-top: 0;
    margin-left: auto;
  }
  i {
    margin-left: 8px;
  }
}
.button-light {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}
.button-inactive {
  pointer-events: none !important;
  cursor: none !important;
  background-color: rgba(128, 128, 128, 0.5) !important;
}
.error {
  font-size: 12px;
  text-align: center;
  color: crimson;
}
.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
.admin {
  display: flex;
  // margin-left: 30px;
  height: 20px;
  align-items: center;
  justify-content: center;
  gap: -20px;

  input {
    padding: 10px;
    min-width: 200px;
    border-radius: 20px;
    border: 1px solid transparent;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(46, 45, 45, 0.06);
    margin-left: 40px;

    &:focus {
      outline: none;
      border: 1px solid #66d1a2;
    }
  }
  .errAdmin {
    border: 1px solid crimson !important;
  }
}
.tgl {
  display: flex;
  align-items: center;
}
.project-link {
  margin-left: 12px;
  color: #66d1a2;
}
.p-border {
  padding-left: 50px;
  border-left: 8px solid #48a07a;
}
.green-btn {
  background: #66d1a2;
  color: #fff;
}
</style>
