<template>
  <button v-if="!user" @click="logIn">logIn</button>
  <button v-if="user" @click="logOut">LogOut</button>
</template>

<script>

  import Moralis from 'moralis'

  export default {

    data() {
      return {
        user: null
      }
    },

    created() {
      Moralis.initialize(process.env.VUE_APP_MORALIS_APPLICATION_ID);
      Moralis.serverURL = process.env.VUE_APP_MORALIS_SERVER_URL;
    },

    methods: {
      async logIn() {
        this.user = Moralis.User.current();
        if (!this.user) {
          this.user = await Moralis.authenticate();
        }
        console.log("logged in user:", this.user);
      },

      async logOut() {
        await Moralis.User.logOut();
        this.user = null
        console.log("logged out");
      }
    }

  }
</script>