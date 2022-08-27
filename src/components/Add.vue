<script setup>
import { collection, addDoc } from 'firebase/firestore'
import { query, onSnapshot } from 'firebase/firestore'
import db from '../db'
</script>
<script>
export default {
  data() {
      return {
          contacts: [],
          firstName: '',
          lastName: '',
          email: '',
          number: '',
          newContact: '',
          url: ''
      }
  },
  methods: {
      async addContact() {
            const dataBase = collection(db, 'contacts')
            const contact = await addDoc (dataBase, {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                number: this.number
            })
            const selection = query(collection(db, 'contacts'))
            const retriving = onSnapshot(selection, (snapshot) => {
            const data = []
            snapshot.forEach((doc) => data.push({
                id: doc.id,
                firstName: doc.data().firstName,
                lastName: doc.data().lastName,
                email: doc.data().email
            }))
            this.contacts = data
            this.newContact = this.contacts.find(contact => {
                return contact.email === this.email
            })
            if (this.newContact) {
                this.url = '/contact/' + this.newContact.id
                if (this.url) {
                    this.$router.push(this.url)
                    }
            }
        })
      }
  },
}
</script>

<template>
  <h1 class="">New Contact</h1>
  <form>
      <label for="firstName">First Name</label>
      <input type="text" v-model="firstName" name="firstName" id="" placeholder="Marci">
      <label for="lastName">Last Name</label>
      <input type="text" v-model="lastName" id="" name="lastName" placeholder="Dewson">
      <label for="email">Email</label>
      <input type="text" v-model="email" id="" name="email" placeholder="example@mail.com">
      <label for="number">Phone number</label>
      <input type="text" v-model="number" id="" name="number" placeholder="9999999999">
      <section class="d-flex justify-content-between">
        <button class="bg-primary text-white" @click.prevent="addContact">Add Contact</button>
        <router-link class="text-primary" to="/">Cancel</router-link>
      </section>
  </form>
</template>

<style scoped>
</style>
