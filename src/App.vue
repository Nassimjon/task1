<template>
  <div class="container box-border max-w-7xl mt-4	px-8 py-3 mx-auto">
    <div class="flex mb-8">
      <button class="mt-1 mr-2 p-2 bg-green-600 text-white	 rounded " @click="newTab"> Финнасы</button>
      <button class="mt-1 mr-2 p-2 bg-white hover:bg-slate-200 text-slate-600		rounded" @click="newTab1"> Пенсионерам</button>
      <button class="mt-1 mr-2 p-2 bg-white hover:bg-slate-200 text-slate-600 rounded"> Молодёжи</button>
      <button class="mt-1 mr-2 p-2 bg-white hover:bg-slate-200 text-slate-600 rounded"> Родителям и детям</button>
      <button class="mt-1 p-2 bgwhite hover:bg-slate-300 text-slate-600 rounded"> Премиум</button>
    </div>
    
    <Tab :class="{ 'hidden': isActive1 }"></Tab>
    <Tab :class="{ 'hidden': isActive2 }"></Tab>



  </div>
</template>

<script>
import './assets/css/tailwind.css'
import Card from '@/components/Card.vue'
import Tab from '@/components/Tab.vue'

export default {
  components: {
    Card, Tab
  },
  data() {
    return{
      isActive1: true,
      isActive2: true,
      isActive3: false,
    }
  },
  methods: {
    newTab() {
      this.isActive1 = !this.isActive1
      
    },
    newTab1() {
      this.isActive2 = !this.isActive2
      this.isActive1 = !this.isActive1
    }
  },
}
</script>


<style>
.conta {
  padding: 10px;
}
</style>