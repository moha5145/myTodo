<template>
     
      <q-list class="justify-center">
        <!-- <q-item-label
          header
          class="text-white q-mx-none q-px-none"
          >
          
          
        </q-item-label> -->

        <q-item 
          clickable 
          v-ripple 
          dark
          @click="darkMode()" 
          class="q-mt-xl"
          >
          <q-item-section avatar>
            <q-icon v-if="$q.dark.mode == true" 
                    round 
                    flat 
                    name="light_mode"
                    size="md">
            </q-icon>

            <q-icon v-if="$q.dark.mode == false" 
                    round 
                    flat 
                    name="dark_mode"
                    size="md">
            </q-icon>
          </q-item-section>
        </q-item>

        <ColorPicker class=""/> 
         
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
import { defineComponent, inject, onMounted, ref } from 'vue'
import ColorPicker from './ColorPicker.vue'
import Localbase from 'localbase'
import { useQuasar } from 'quasar'

const db = new Localbase('myTodo')


export default defineComponent({
  components: { ColorPicker, AddCategory },
  name: 'MainLayout',
  // props: ['leftDrawerOpen'],
  setup () { 
    const store = inject('store')
    const $q = useQuasar()
    const darkMode = () => {
        $q.dark.toggle()
        db.collection('darkMode').delete()
        db.collection('darkMode').add({darkMode: $q.dark.mode})
    }

    onMounted(() => {
      db.collection('darkMode').get()
        .then(dark => {
          $q.dark.set(dark[0].darkMode)
        })
        .catch(error => console.log(error))
    })
    return {
      fab: ref(false),
      darkMode,
      store
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