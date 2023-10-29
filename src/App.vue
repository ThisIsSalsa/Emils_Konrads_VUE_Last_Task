<template>
  <div id="app" :class="{ 'main-bg': !loggedIn }">
    <HeaderComponent @login="login" @logout="logout" />
    <div class="main-container">
      <NavigationComponent v-if="loggedIn" @toggleComponent="showComponent" />
      <div v-if="loggedIn">
        <router-view />
      </div>
      <div v-else>
        <LandingComponent/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
import LandingComponent from '@/components/LandingComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavigationComponent,
    LandingComponent,
  },
  computed: {
    loggedIn() {
      return this.$store.state.user.logged_in;
    },
  },
  methods: {
    login() {
      this.$store.commit('loginUser');
    },
    logout() {
      this.$store.commit('logoutUser');
    },
  },
};
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
  background-color: #191621;
  color: white;
  margin: 0;
  padding: 0;
}

.main-container {
  display: flex;
}

.content {
  flex: 1;
  padding: 220px;
}

.main-bg {
  background-image: url("assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
}
</style>