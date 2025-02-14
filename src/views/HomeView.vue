<template>
  <div class="border col-md-10">
    <h1>Home</h1>
    <Tabela :podaci="podaci" />
  </div>
</template>

<script>
import axios from 'axios';
import Tabela from '@/components/Tabela.vue';

export default {
  name: "HomeView",
  components: {
    Tabela
  },
  data() {
    return {
      podaci: []
    }
  },
  methods: {
    async dohvatiPodatke(){
      const response = await axios.get('https://67977c92c2c861de0c6ce764.mockapi.io/products')
      this.podaci = response.data
      
    }
  },
  mounted() {
    this.dohvatiPodatke()
  },
  
}
</script>
<style >
  
</style>