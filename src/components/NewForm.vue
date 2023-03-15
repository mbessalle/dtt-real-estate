<template>
  <form @submit.prevent="createListing">
    <label>
      Image:
      <input type="file" @change="onFileChange($event)" />
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
      image: null,
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
      selectedFile: null,
    }
  },
  methods: {
    async createListing() {
      // Validate form
      if (!this.image || !this.price || !this.bedrooms || !this.bathrooms || !this.size || !this.description || !this.street || !this.houseNumber || !this.postalCode || !this.city || !this.constructionYear) {
        alert('Please fill in all required fields.')
        return
      }

      // Create new data object
      let data = new FormData();

      data.append('image', this.image);
      data.append('price', this.price);
      data.append('bedrooms', this.bedrooms);
      data.append('bathrooms', this.bathrooms);
      data.append('size', this.size);
      data.append('description', this.description);
      data.append('street', this.street);
      data.append('houseNumber', this.houseNumber);
      data.append('addition', this.addition);
      data.append('postalCode', this.postalCode);
      data.append('city', this.city);
      data.append('constructionYear', this.constructionYear);
      data.append('hasGarage', this.hasGarage);
      data.append('madeByMe', true);

      // Add new house to the store
      await this.$store.dispatch('createHouse', data)

      // Reset form fields
      this.image = null;
      this.price = '';
      this.bedrooms = '';
      this.bathrooms = '';
      this.size = '';
      this.description = '';
      this.street = '';
      this.houseNumber = '';
      this.addition = '';
      this.postalCode = '';
      this.city = '';
      this.constructionYear = '';
      this.hasGarage = false;
    },
    onFileChange(event) {
      const file = event
        .target.files[0]; // Get the first file uploaded
      // Check if a file is uploaded
      if (file) {
        this.image = file;
      };
    },
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
  width: 70%;
  /* changed width from 100% to 70% */
  max-width: 400px;
  /* added max-width to limit the width of the input fields */
  padding: 12px 20px;
  margin: 8px auto;
  /* changed margin to center the input fields */
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