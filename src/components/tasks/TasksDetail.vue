<template>
    <div   v-if="category[0]"  class="row q-mx-sm justify-center" style="border-radius: 20px" >
      <div class="col-12 col-sm-10 col-md-8">
        <q-card  flat bordered style="border-radius: 20px" class="q-pt-none q-mt-md ">
        
          <div class="row">
            <q-btn flat round to="/" icon="arrow_back" class="q-mt-sm q-ml-sm"
              :style="{'color': store.state.themeColor}">
            </q-btn>

            <q-space />
            
            <!-- <div style="padding-top: 5px;" class="q-mr-xs">
              <q-fab
                v-model="fab"
                size="20px"
                dense                
                icon="keyboard_arrow_right"
                direction="left"
                padding="xs"
                :style="{'color': store.state.themeColor}"
                class="q-mt-sm q-mr-sm"
              >
                
                <DeleteCategory :category="category[0]" />
                
                <EditCategory :category="category[0]"/>
                
              </q-fab>
            </div> -->
          </div>

          <h6  class="text-center q-my-sm text-grey-8">{{category_slug.toUpperCase()}}</h6 >
            <AddAndEditForm 
              :category="category[0]"
              :task="store.state.task"
              :submitForm="store.methods.addTask">
            </AddAndEditForm>

          <q-tabs v-show="displayTab"
              v-model="tab"
              dense
              class=""
              dark
              active-color=orange
              indicator-color=orange
              align="justify"
          >
            <q-tab name="all" :label="$t('all')" />
            <q-tab name="ongoing" :label="$t('ongoing')" />
            <q-tab name="completed" :label="$t('completed')" />
          </q-tabs>

          <!-- <q-separator /> -->

          <q-tab-panels v-model="tab" animated class=" q-px-none  q-mb-none">
            <q-tab-panel name="all" class="q-px-sm q-pb-xs" >
              <AllTasks :todoList="store.state.todoList" :category="category[0].slug"/>
            </q-tab-panel>

            <q-tab-panel name="ongoing" class="q-px-sm q-pb-xs" >
              <TodoOnGoing :todoList="store.state.todoList" :category="category[0].slug"></TodoOnGoing>
            </q-tab-panel>

            <q-tab-panel name="completed" class="q-px-sm q-pb-xs" >
              <TodoCompleted :todoList="store.state.todoList" :category="category[0].slug"></TodoCompleted>
            </q-tab-panel>

          </q-tab-panels>
        </q-card>
      </div>
    </div>
</template>

<script>
import AddAndEditForm from '../tasks/AddAndEditForm.vue'
import AllTasks from '../tasks/AllTasks.vue'
import TodoCompleted from '../tasks/TodoCompleted.vue'
import TodoOnGoing from '../tasks/TodoOnGoing.vue'
import EditCategory from '../categorys/EditCategory.vue'
import DeleteCategory from '../categorys/DeleteCategory.vue'

import { computed, inject, ref } from '@vue/runtime-core'
export default {
  components: { 
    AddAndEditForm, 
    AllTasks, 
    TodoCompleted, 
    TodoOnGoing,
    EditCategory,
    DeleteCategory
     },
  props: ['category_slug'],
    setup(props) {
        const store = inject('store')

        const category = computed(() => store.state.categorys.filter(categ => categ.slug == props.category_slug))
       
        const displayTab = computed(() => {
          return store.state.todoList.find(list => {
            if(list.categorySlug == props.category_slug) {
              return list.categorySlug.length
            }
          })
        })
        return {
            store,
            tab: ref('all'),
            fab: ref(false),
            category,
            displayTab
        }
    },
}
</script>