<template>
  <div class="navigation">
    <button @click="showHome" :class="{ active: activeTab === 'home' }">HOME</button>
    <button @click="showAbout" :class="{ active: activeTab === 'about' }">ABOUT ME</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "home",
    };
  },
  props: ["loggedIn"],
  methods: {
    showHome() {
      this.activeTab = "home";
      this.$router.push({ name: "home" });
    },
    showAbout() {
      this.activeTab = "about";
      this.$router.push({ name: "aboutMe" });
    },
  },
};
</script>

<style scoped>
.navigation {
  display: flex;
  flex-direction: column;
  background-color: #22202B;
  color: #fff;
  padding: 20px;
  border: 0px, 1px, 0px, 0px;
}

button {
  border: none;
  background: none;
  color: #fff;
  background-color: #22202B;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  transition: color 0.3s;
}

button.active {
  background-color: #8645E8;
}

button:focus {
  outline: none;
}
</style>