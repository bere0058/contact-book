<script setup>
import { useRoute } from 'vue-router';
</script>
<script>
export default {
  computed: {
    currentRoute () {
      if (useRoute().name) {
        return useRoute().name.__name
      }
    }
  }
}
</script>

<template>
  <nav v-if="currentRoute !=='Contact'">
    <ul class="nav justify-content-between">
      <li class="nav-item" v-if="currentRoute !=='Contacts'">
        <router-link to="/">Contacts</router-link>
      </li>
      <li class="nav-item" v-if="currentRoute ==='Contact'">
        <router-link to="/edit/">Edit</router-link>
      </li>
    </ul>
    <ul v-if="currentRoute ==='Contacts'" class="nav justify-content-end">
      <li class="nav-item">
        <router-link to="/add">
          <i class="fa-solid fa-plus"></i>
        </router-link>
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<style>
body {
  background-color: rgb(184, 184, 184);
}
a {
  text-decoration: none;
  color: unset;
}
li > a {
  color: rgba(var(--bs-primary-rgb));
}
#app {
  margin: auto;
  margin-top: 10vh;
  width: 60%;
  padding: 5vh 10vw;
  min-height: 80vh;
  background-color: white;
}
h1 {
  text-align: center;
  margin: 3% 0;
}
form>* {
    margin: 1vw 0;
}
label {
    margin: 0;
}
input {
    width: 100%;
    border: solid grey 0.1vw;
    border-radius: 0.3vw;
}
button,
.link {
    border-radius: 0.3vw;
    border: 0;
    padding: 1%;
}
</style>
