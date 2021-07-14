<template>
  <header>
    <!-- Nav starts here -->
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >FireBlog</router-link
        >
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" :to="{ name: 'Login' }"
            >Login/Ragister</router-link
          >
        </ul>
      </div>
    </nav>

    <!-- Mobile nav starts here -->
    <menuIcon
      @click="toggleMobileNav"
      class="menu-icon"
      v-show="mobile"
    ></menuIcon>
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" :to="{ name: 'Login' }"
          >Login/Ragister</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
export default {
  name: "Navigation",
  components: {
    menuIcon,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background: #ffff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
    &:hover {
      color: #1eb8b8;
    }
  }
  nav {
    padding: 25px 0;
    display: flex;
    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        text-decoration: none;
        font-size: 24px;
        color: #333;
      }
    }
    .nav-links {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;

      ul {
        // margin-right: 32px;

        .link {
          margin-right: 32px;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }

  .menu-icon {
    position: absolute;
    top: 30px;
    right: 25px;
    height: 25px;
    width: auto;
    cursor: pointer;
  }
  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100vh;
    background: rgba(48, 48, 48, 0.99);
    top: 0;
    left: 0;
    gap: 20px;

    .link {
      padding: 10px;
      color: #eee;
      transition: 0.3s ease;

      &:hover {
        color: #1eb8b8;
      }
    }
  }
  //   vue animation
  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 0.6s ease;
  }
  .mobile-nav-enter {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0);
  }
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>
