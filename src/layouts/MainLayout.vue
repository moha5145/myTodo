<template>
  <q-layout view="lHh Lpr lff">
    <q-header flat :style="{'background-color': store.state.themeColor}">
      <q-toolbar>
        <q-btn flat dense
          round icon="settings"
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
      class="text-center"
      :style="{'background-color': store.state.themeColor}"
    >
      <q-list>
        <q-item-label
          header
          class="text-white q-mx-none q-px-none"
          >
        </q-item-label>

        <q-item
          clickable
          tag="a"
          target="_blank"
          class="q-mx-none q-px-none  q-py-none"
          >
          <q-item-section  >
            <ColorPicker class="q-mx-none"/> 
          </q-item-section>

        </q-item>
        
      </q-list>
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

export default defineComponent({
  components: { ColorPicker, AddCategory },
  name: 'MainLayout',
  setup () {
    const leftDrawerOpen = ref(false)
    const store = inject('store')

    return {
      leftDrawerOpen,
      store,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
