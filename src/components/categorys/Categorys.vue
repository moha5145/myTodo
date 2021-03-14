<template>
  <div style="width: 100%" class="q-px-sm q-pt-lg ">
  
    <q-card flat bordered v-for="category in store.getters.sortedCategory()" 
            :key="category.id" 
            class=" q-my-lg"
            style="border-radius: 20px">   
      <SingleCategory :category="category"></SingleCategory>
    </q-card>
      <!-- <AddCategory></AddCategory> -->
  </div>
</template>

<script>
import { inject } from 'vue'
import SingleCategory from './SingleCategory.vue'
import AddCategory from './AddCategory.vue'
export default {
  components: { SingleCategory, AddCategory },

  setup() {
    const store = inject('store')
      
      return {
        store
      }
    }
  }
</script>

<style lang="sass" scoped>

.column > div
  min-width: 100%
  border: 1px solid rgba(86, 61, 124, .2)

  margin-bottom: 1rem
.column + .column

  margin-top: 1rem
</style>
