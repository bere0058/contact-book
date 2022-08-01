<script setup>
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'
import db from '../db'
</script>
<script>
export default {
  data() {
    return {
      contacts: [],
      searchQuery: ''
    }
  },
  created () {
    const selection = query(collection(db, 'contacts'), orderBy('lastName'))
    const retriving = onSnapshot(selection, (snapshot) => {
      const data = []
      snapshot.forEach((doc) => data.push({
        id: doc.id,
        firstName: doc.data().firstName,
        lastName: doc.data().lastName,
        email: doc.data().email
      }))
      this.contacts = data
    })
  },
  computed: {
    filteredContacts() {
      if (this.searchQuery) {
        return this.contacts.filter(
          contact => contact.lastName.toLowerCase().includes(
            this.searchQuery.toLowerCase() 
          ) ||
          contact.firstName.toLowerCase().includes(
            this.searchQuery.toLowerCase() 
          )
        )
      } else {
        return this.contacts
      }
    },
  }
}
</script>

<template>
  <h1 class="display-1">Contacts</h1>
  <form>
    <input type="text" v-model="searchQuery" placeholder="Search">
    <section v-for="contact in filteredContacts" class="p-3 border rounded my-2">
      <router-link :to="'/contact/' + contact.id">{{contact.lastName}} {{contact.firstName}}</router-link>
    </section>
  </form>
</template>

<style scoped>

</style>
