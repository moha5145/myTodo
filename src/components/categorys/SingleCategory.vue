<template>
  
  <q-btn bordered flat :to="{name: 'TasksDetail', params: {category_slug: category.slug}}"
        class="full-width q-ma-none q-pa-none text-left"
        style="border-radius: 20px">
    
      <q-card-section        
          class="row cursor-pointer  q-py-none q-my-none q-px-none full-width">
        <div class="text-h6 col  ">
          <div class="row  q-mb-xl q-pb-lg q-ml-none q-pl-none">
            
            <div class="q-mt-sm q-px-md col text-grey-8 text-left">
              <span class="text-grey-7">{{ category.name }}</span>
              <!-- <p>{{ $d(new Date(), 'short') }}</p>
              <p>{{ $d(new Date(), 'long') }}</p> -->
            </div>
          
            <q-space />

            <div style="padding-top: 5px;" class="q-mr-sm">
              <q-fab @click.prevent
                v-model="fab1"
                size="20px"
                dense                
                icon="keyboard_arrow_right"
                direction="down"
                padding="xs"
                :style="{'color': store.state.themeColor}"
              >
                
                <DeleteCategory :category="category" />
                
                <EditCategory :category="category"/>
                
              </q-fab>
            </div>
          
          </div>
      
          <div class="row q-mt-md q-pb-sm q-ml-sm">
            <div class="col">
              <DateTimePicker :category="category"/>
            </div> 
          </div>

        </div>
      </q-card-section>
    <!-- </v-card> -->
  </q-btn>
  
</template>

<script>
import { inject, ref} from 'vue'
import AddTask from '../tasks/AddTask.vue'
import DateTimePicker from './DateTimeDisplay.vue'
import EditCategory from './EditCategory.vue'
import DeleteCategory from './DeleteCategory.vue'

export default {
  components: { EditCategory, DateTimePicker,  
                 AddTask, DeleteCategory },
    props: ['category', 'category_slug'],
    setup() {
        
        const store = inject('store')
        
        return {
            tab: ref('all'),
            fab1: ref(false),
            hideLabels: ref(false),
            store
        }
    }


}
</script>

<style lang="sass" scoped>

.column > div
  min-width: 100%
  // padding: 10px 15px
  // background: rgba(86, 61, 124, .15)
  border: 1px solid rgba(86, 61, 124, .2)
  margin-bottom: 1rem

.column + .column
  margin-top: 1rem

.my-card:hover
  background-color: $grey-2
  border-radius: 20px
  
  
</style>