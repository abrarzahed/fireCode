<template>
  <div>
    <div class="form-wrap">
      <form class="register">
        <p class="login-register">
          Already have an account?
          <router-link class="router-link" :to="{ name: 'Login' }"
            >Login</router-link
          >
        </p>
        <h2>Create Your Fireblog account</h2>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="First name" v-model="firstName" />
            <User class="icon"></User>
          </div>
          <div class="input">
            <input type="text" placeholder="Last name" v-model="lastName" />
            <User class="icon"></User>
          </div>
          <div class="input">
            <input type="text" placeholder="Username" v-model="username" />
            <User class="icon"></User>
          </div>
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <Email class="icon"></Email>
          </div>

          <div class="input">
            <input type="password" placeholder="Password" v-model="password" />
            <Password class="icon"></Password>
          </div>
          <div v-show="error" class="error">{{ this.errorMessage }}</div>
        </div>

        <button @click.prevent="register">Sign Up</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import user from "../assets/Icons/user-alt-light.svg";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";
export default {
  name: "Register",
  components: {
    email,
    password,
    user,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
        });
        this.$router.push({ name: "Home" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
