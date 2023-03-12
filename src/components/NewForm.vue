<template>
    <form @submit.prevent="createListing">
      <label>
        Image:
        <input type="text" v-model="image" required />
      </label>
      <label>
        Price:
        <input type="number" v-model.number="price" required />
      </label>
      <label>
        Number of bedrooms:
        <input type="number" v-model.number="bedrooms" required />
      </label>
      <label>
        Number of bathrooms:
        <input type="number" v-model.number="bathrooms" required />
      </label>
      <label>
        Size:
        <input type="number" v-model.number="size" required />
      </label>
      <label>
        Description:
        <textarea v-model="description" required></textarea>
      </label>
      <label>
        Street name:
        <input type="text" v-model="street" required />
      </label>
      <label>
        House number:
        <input type="text" v-model="houseNumber" required />
      </label>
      <label>
        Addition:
        <input type="text" v-model="addition" />
      </label>
      <label>
        Postal Code:
        <input type="text" v-model="postalCode" required />
      </label>
      <label>
        City:
        <input type="text" v-model="city" required />
      </label>
      <label>
        Construction year:
        <input type="number" v-model.number="constructionYear" required />
      </label>
      <label>
        Has garage:
        <input type="checkbox" v-model="hasGarage" />
      </label>
      <button type="submit">Create Listing</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        image: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        size: '',
        description: '',
        street: '',
        houseNumber: '',
        addition: '',
        postalCode: '',
        city: '',
        constructionYear: '',
        hasGarage: false,
      }
    },
    methods: {
      createListing() {
        // Validate form
        if (!this.image || !this.price || !this.bedrooms || !this.bathrooms || !this.size || !this.description || !this.street || !this.houseNumber || !this.postalCode || !this.city || !this.constructionYear) {
          alert('Please fill in all required fields.')
          return
        }
  
        // Create new listing object
        const newListing = {
          id: Math.floor(Math.random() * 100000) + 1,
          image: this.image,
          price: this.price,
          rooms: {
            bedrooms: this.bedrooms,
            bathrooms: this.bathrooms,
          },
          size: this.size,
          description: this.description,
          location: {
            street: this.street,
            houseNumber: this.houseNumber,
            addition: this.addition,
            postalCode: this.postalCode,
            city: this.city,
          },
          createdAt: new Date().toISOString().slice(0, 10),
          constructionYear: this.constructionYear,
          hasGarage: this.hasGarage,
          madeByMe: true,
        }
  
        // Emit event to parent component to save new listing
        this.$emit('create-listing', newListing)
      }
    }
  }
  