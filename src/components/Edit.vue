<script setup>
import { collection, doc, deleteDoc, updateDoc, getDoc } from 'firebase/firestore'
import { query, onSnapshot } from 'firebase/firestore'
import db from '../db'
defineProps ({
    id:''
})
</script>
<script>
export default {
  data() {
      return {
          contacts: [],
          firstName: '',
          lastName: '',
          email: '',
          number: ''
      }
  },
  async created () {
    const reference = doc(db, 'contacts', this.id)
    const document = await getDoc(reference)
    if (document.exists()) {
        this.email = document.data().email
        this.firstName = document.data().firstName
        this.lastName = document.data().lastName
        this.number = document.data().number
    }
  },
  methods: {
      async deleteContact () {
        const contact = doc(db, 'contacts', this.id)
        await deleteDoc(contact)
    },
    async updateContact() {
        const contact = doc(db, 'contacts', this.id)
        await updateDoc(contact, {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            number: this.number
        })
    }
  },
}
</script>

<template>
  <h1 class="">Edit Contact</h1>
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
        <router-link class="bg-primary text-white link" @click.prevent="updateContact" :to="'/contact/' + id">Update Contact</router-link>
        <router-link class="text-primary" to="/">Cancel</router-link>
      </section>
      <section class="w-100 d-flex justify-content-center border-top pt-3">
          <router-link class="border border-danger text-danger link" @click.prevent="deleteContact" to="/">Delete Contact</router-link>
      </section>
  </form>
</template>