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
  },
  created() {
    const locale = localStorage.getItem('locale')
    if(locale) {
      this.$i18n.locale = locale
    }
  }
})
</script>
