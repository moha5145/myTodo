<template>
  <div class="my-card q-pb-none">
    <q-card-section @click="store.methods.showTasks(category) "
        class="row cursor-pointer  q-py-none q-my-none q-px-none ">
      <div class="text-h6 col text-grey-8 ">
        <div class="row q-pt-none q-mt-none q-mb-sm q-ml-none q-pl-none">
          <!-- <div v-if="category.todoList.length" class=" q-mt-xs q-py-none q-ml-none q-pl-none">
            <q-icon v-if="category.showTasks " 
                    dense
                    size="md" 
                    name="keyboard_arrow_up" 
                    :style="{'color': store.state.themeColor}"
                    >
            </q-icon>
              
            <q-icon v-if="!category.showTasks "
                    dense
                    size="md" 
                    name="keyboard_arrow_down" 
                    :style="{'color': store.state.themeColor}"
                    >
            </q-icon>
            
          </div> -->

          <div class="q-mt-sm q-pl-sm col text-grey-7">
            {{ category.name }}
          </div>
        
          <q-space />

          <div class="row q-mb-none q-pb-none">
            <!-- <div class='col q-mt-sm q-mr-sm'>
              <EditCategory :category="category"/>
            </div> -->

            <div class="col q-mt-sm q-mr-sm">
              <DeleteCategory :category="category" />
            </div>
          </div>

          
        </div>

        
        <div class="row q-mb-sm">
          <div class="col">
            <DateTimePicker :category="category"/>
          </div> 

          <!-- <div class=" q-mb-none q-pb-none"> -->
            <div class='text-right col q-mt-none q-mr-sm'>
              <EditCategory :category="category"/>
            </div>

          
          <!-- </div>         -->
        </div>

      </div>
    </q-card-section>

    <div v-if="category.showTasks" >
      <q-card  flat style="border-radius: 20px" >
        <AddAndEditForm 
          :category="category"
          :task="store.state.task"
          :submitForm="store.methods.addTask">
        </AddAndEditForm>

        <q-tabs v-if="category.todoList.length"
            v-model="tab"
            dense
            class="text-grey bg-grey-2"
            active-color=orange
            indicator-color=orange
            align="justify"
        >
          <q-tab name="all" label="all" />
          <q-tab name="completed" label="completed" />
          <q-tab name="ongoing" label="ongoing" />
        </q-tabs>

        <!-- <q-separator /> -->

        <q-tab-panels v-model="tab" animated class="bg-grey-2 q-px-none  q-mb-none">
          <q-tab-panel name="all" class="q-px-sm q-pb-xs" 
            style="max-height: 420px" virtual-scroll>
            <AllTasks :todoList="category.todoList"  :category="category"/>
          </q-tab-panel>

          <q-tab-panel name="completed" class="q-px-sm q-pb-xs" 
            style="max-height: 320px" virtual-scroll>
            <TodoCompleted :todoList="category.todoList" :category="category"></TodoCompleted>
          </q-tab-panel>

          <q-tab-panel name="ongoing" class="q-px-sm q-pb-xs" 
            style="max-height: 320px" virtual-scroll>
            <TodoOnGoing :todoList="category.todoList"  :category="category"></TodoOnGoing>
          </q-tab-panel>

        </q-tab-panels>
      </q-card>

      <!-- <q-card-actions v-if="category.todoList.length" align="around" 
                    class="bg-grey-2 q-pt-xs" style="border-radius: 20px">
        <AddTask :category="category"></AddTask>
      </q-card-actions> -->

      <!-- <div v-if="category.todoList.length" class='text-center q-pb-sm'>
            <AddTask :category="category"></AddTask>
          </div> -->
    </div>

  <!-- <NoTaskBaner v-if="!category.todoList.length" >
    <q-space></q-space>
    <AddTask  :category="category" ></AddTask>
  </NoTaskBaner> -->
  </div>
  
</template>

<script>
import { inject, ref} from 'vue'
import AddTask from '../tasks/AddTask.vue'
import AllTasks from '../tasks/AllTasks.vue'
import NoTaskBaner from '../tasks/NoTaskBaner.vue'
import TodoCompleted from '../tasks/TodoCompleted.vue'
import TodoOnGoing from '../tasks/TodoOnGoing.vue'
import DateTimePicker from './DateTimePicker.vue'
import EditCategory from './EditCategory.vue'
import DeleteCategory from './DeleteCategory.vue'
import AddAndEditForm from '../tasks/AddAndEditForm.vue'
export default {
  components: { EditCategory, DateTimePicker, AllTasks, TodoCompleted, 
                TodoOnGoing, AddTask, NoTaskBaner, DeleteCategory,
    AddAndEditForm },
    props: ['category'],
    setup() {
        
        const store = inject('store')
        
        return {
            tab: ref('all'),
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