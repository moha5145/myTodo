<template>
     
      <q-list>
        <q-item-label
          header
          class="text-white q-mx-none q-px-none"
          >
            {{$t('settings' )}}
          
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

        <q-fab flat
          v-model="fab"
          label-position="right"
          color="white"
          icon='translate'
          direction="down"
        >
          <q-fab-action flat color="white" @click="setLocal('en-US')" hide-icon label="English" />
          <q-fab-action flat color="white" @click="setLocal('fr-FR')" hide-icon label="Français" />
          <q-fab-action flat color="white" @click="setLocal('am-AM')" hide-icon label="አማርኛ" />
        </q-fab>
        
      </q-list>
    
</template>

<script>

import AddCategory from 'src/components/categorys/AddCategory.vue'
import { defineComponent, ref } from 'vue'
import ColorPicker from './ColorPicker.vue'

export default defineComponent({
  components: { ColorPicker, AddCategory },
  name: 'MainLayout',
  // props: ['leftDrawerOpen'],
  setup () {  
    return {
      // store: inject('store'),
      fab: ref(false)
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