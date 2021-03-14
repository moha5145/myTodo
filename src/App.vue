<template>
  
    <router-view />
  
</template>
<script>
import { defineComponent, provide } from 'vue';
import store from './store'

export default defineComponent({
  name: 'App',
  
  setup() {
    provide('store', store)
    
    store.methods.getCollection();

    // store.methods.getTheme();

  }
})
</script>
