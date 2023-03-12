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
          id: Math.floor(Math.random() * 100000) + 1, // Generate random id
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
          createdAt: new Date().toISOString().slice(0, 10), // Get current date in YYYY-MM-DD format
          constructionYear: this.constructionYear,
          hasGarage: this.hasGarage,
          madeByMe: true,
        }
  
        // Emit event to parent component to save new listing
        this.$emit('create-listing', newListing)
      }
    }
  }
  </script>

  <style>
/* Set font and background color */
body {
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
}

/* Style the form container */
.form-container {
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

/* Style the input field */
input[type="text"], 
input[type="email"], 
textarea {
  width: 70%; /* changed width from 100% to 70% */
  max-width: 400px; /* added max-width to limit the width of the input fields */
  padding: 12px 20px;
  margin: 8px auto; /* changed margin to center the input fields */
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  background-color: #f2f2f2;
}

/* Style the submit button */
input[type="submit"] {
  background-color: #0076ff;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Change the color of the submit button on hover */
input[type="submit"]:hover {
  background-color: #0059b3;
}

/* Style the form labels */
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}


</style>