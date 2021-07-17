<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }"
            >FireCode</router-link
          >
          <ul>
            <li>
              <a href="#"><youTube class="svg-icon"/></a>
            </li>
            <li>
              <a href="#"><twitter class="svg-icon"/></a>
            </li>
            <li>
              <a href="#"><instagram class="svg-icon"/></a>
            </li>
            <li>
              <a href="#"><linkedin class="svg-icon"/></a>
            </li>
          </ul>
        </div>

        <!-- <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'Blogs' }"
              >Blogs</router-link
            >
            <router-link v-if="admin" class="link" :to="{ name: 'CreatePost' }"
              >Create Post</router-link
            >
            <router-link v-if="!user" class="link" :to="{ name: 'Login' }"
              >Login In / Register</router-link
            >
          </ul>
        </div> -->
      </div>
      <div class="right">
        <p>
          Copyright &copy; 2021 All rights reserved
        </p>
        <span>abrarzahed6986@gmail.com</span>
        <span>+8801887877854</span>
      </div>
    </div>
  </footer>
</template>

<script>
import youTube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";

export default {
  name: "Footer",
  components: {
    youTube,
    twitter,
    instagram,
    linkedin,
  },
  data() {
    return {
      admin: true,
      user: true,
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 50px 25px;
  background-color: #202020;
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }
    > div {
      display: flex;
    }
    .left {
      flex: 1;
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }
      .header {
        font-family: "Qahiri", sans-serif;
        text-align: center;
        font-size: 12vmin;
        color: #fff;
        margin-bottom: 16px;
        text-decoration: none;
        font-weight: 200;
        @media (min-width: 800px) {
          text-align: initial;
        }
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }
      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
      }
      .col-1 {
        flex-direction: column;
        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }
        ul {
          margin-top: auto;
          li {
            display: flex;
            align-items: center;
            .svg-icon {
              width: 24px;
              height: auto;
              color: #fff;
            }
          }
        }
      }
      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }
          .link {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      max-width: 400px;
      gap: 32px;
      color: #fff;
      flex-direction: column;
      align-items: center;
      margin: auto;
      text-align: center;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
        text-align: right;
      }
    }
    p {
      margin-top: auto;
    }
    span {
      margin-top: 22px;
    }
  }
}
</style>
