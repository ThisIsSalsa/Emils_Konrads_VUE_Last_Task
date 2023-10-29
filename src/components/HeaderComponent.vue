<template>
  <header>
    <img src="../assets/logo.png" class="logo" alt="Logo">
    <div class="user-info" v-if="loggedIn">
      <div class="avatar" :style="{ backgroundColor: avatarColor }"></div>
      <div class="user-name">{{ fullName }}</div>
      <button @click="handleLogout">LOGOUT</button>
    </div>
    <div v-else>
      <button @click="handleLogin">LOGIN</button>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      loggedIn: state => state.user.logged_in,
      user: state => state.user,
    }),
    avatarColor() {
      return getRandomColor();
    },
    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`;
    },
  },
  methods: {
    ...mapActions(["login", "logout"]),
    handleLogin() {
      if (confirm("Do you want to log in?")) {
        this.login();
      }
    },
    handleLogout() {
      if (confirm("Do you want to log out?")) {
        this.logout();
      }
    },
  },
};

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #8645E8;
  color: white;
}



.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-name {
  font-weight: bold;
}

button {
  background-color: #391372;
  color: #D7B8FF;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>