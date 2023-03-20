<template>
  <form ref="houseForm" @submit.prevent="createListing">
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
      <input type="text" v-model="streetName" required />
    </label>
    <label>
      House number:
      <input type="text" v-model="houseNumber" required />
    </label>
    <label>
      numberAddition:
      <input type="text" v-model="numberAddition" />
    </label>
    <label>
      zip:
      <input type="text" v-model="zip" required />
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
      streetName: '',
      houseNumber: '',
      numberAddition: '',
      zip: '',
      city: '',
      constructionYear: '',
      hasGarage: false,
    }
  },


  methods: {
    async createListing() {

      // Validate the form
      if (!this.$refs.houseForm.checkValidity()) {
        console.log('Form validation failed');
        return;
      }

      // Create new data object
      let newHouse = {
        price: this.price,
        bedrooms: this.bedrooms,
        bathrooms: this.bathrooms,
        size: this.size,
        streetName: this.streetName,
        houseNumber: this.houseNumber,
        numberAddition: this.numberAddition,
        zip: this.zip,
        city: this.city,
        constructionYear: this.constructionYear,
        hasGarage: this.hasGarage,
        description: this.description,

      };

      try {
        const houseId = await this.$store.dispatch('createHouse', newHouse)

        if (this.image) {
          await this.$store.dispatch('uploadImage', { houseId, image: this.image })
        }



        // Reset the form and clear the image property
        this.$refs.houseForm.reset();
        this.image = null;

      }
      catch (error) {
        console.log('Error creating listing', error);
      }

    },
    onFileChange(event) {
      this.image = event.target.files[0]; // Get the first file uploaded
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