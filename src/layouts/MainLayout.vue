<template>
  <q-layout view="lHh Lpr lff">
    <q-header flat :style="{'background-color': store.state.themeColor}">
      <q-toolbar>
        <q-btn flat dense
          round icon="menu"
          aria-label="Param"
          @click="toggleLeftDrawer"
          size="md" 
          />
        <q-toolbar-title>
          My Todo
        </q-toolbar-title>

          <AddCategory></AddCategory>

      </q-toolbar>
    </q-header>
   
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      color= "red"
      width= 60
      :breakpoint="500"
      class="text-center"
      :style="{'background-color': store.state.themeColor}"
    >
      <LeftDrawer :leftDrawerOpen="leftDrawerOpen"></LeftDrawer>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import AddCategory from 'src/components/categorys/AddCategory.vue'
import { defineComponent, inject, ref } from 'vue'
import ColorPicker from './ColorPicker.vue'
import LeftDrawer from './LeftDrawer.vue'

export default defineComponent({
  components: { ColorPicker, AddCategory, LeftDrawer },
  name: 'MainLayout',
  setup () {
    const leftDrawerOpen = ref(false)
    const store = inject('store')
      function toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }

    return {
      leftDrawerOpen,
      store,
      toggleLeftDrawer
    }
  },
  methods: {
    setLocal(locale) {
      this.$i18n.locale = locale
      localStorage.setItem('locale', locale)
    }
  }
})
</script>
