<template>
  <navbar class="home">

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </navbar>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Houses.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>
