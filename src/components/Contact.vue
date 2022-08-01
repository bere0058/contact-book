<script setup>
import { doc, getDoc } from 'firebase/firestore'
import { useRoute } from 'vue-router';
import db from '../db'
defineProps ({
    id:''
})
</script>
<script>
export default {
  data() {
    return {
      email: String,
      firstName: String,
      lastName: String,
      rawNumber: String,
    }
  },
  async created () {
    const reference = doc(db, 'contacts', this.id)
    const document = await getDoc(reference)

    if (document.exists()) {
        this.email = document.data().email
        this.firstName = document.data().firstName
        this.lastName = document.data().lastName
        this.rawNumber = document.data().number
    }
  },
  computed: {
      number() {
        //From https://learnersbucket.com/examples/javascript/how-to-format-phone-number-in-javascript/
        //Filter only numbers from the input
        let cleaned = ('' + this.rawNumber).replace(/\D/g, '');        
        //Check if the input is of correct length
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        };
        return null
      }
  }
}
</script>

<template>
  <nav>
    <ul class="nav justify-content-between">
        <li class="nav-item">
          <router-link to="/">Contacts</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/edit/' + id">Edit</router-link>
        </li>
    </ul>
  </nav>
  <h1>{{firstName + ' ' + lastName}}</h1>
  <form action="" class="d-flex flex-column">
      <section class="d-flex flex-column">
        <label for="email">Email</label>
        <input type="text" name="email" id="email" class="text-info" :value="email" disabled>
      </section>
      <section class="d-flex flex-column">
        <label for="email">Phone</label>
        <input type="text" name="email" id="email" :value="number" disabled>
      </section>
  </form>
</template>

<style scoped>
section {
    border-bottom: solid gray 0.1vw;
    padding: 1% 0;
    margin: 1% 0;
}
form:last-child {
    border-top: solid gray 0.1vw;
}
input {
    border: 0;
}
input:disabled {
    background-color: unset;
    color: unset;
}
</style>