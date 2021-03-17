<template>
  <div class="my-card q-pb-none">
    <q-card-section @click="store.methods.showTasks(category), fab1 = false"
        class="row cursor-pointer  q-py-none q-my-none q-px-none ">
      <div class="text-h6 col text-grey-8 ">
        <div class="row q-pt-none q-mt-none q-mb-xl q-pb-lg q-ml-none q-pl-none">
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

          <div class="q-mt-sm q-px-sm col text-grey-7">
            {{ category.name }}
          </div>
        
          <q-space />

            <div style="padding-top: 5px;" class="q-mr-xs">
              <q-fab @click.stop=""
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
                <!-- <q-fab-action :hide-label="hideLabels" external-label label-position="left" color="primary" @click.stop="onClick" icon="mail" label="Email" /> -->
                
              </q-fab>
              <!-- </div> -->
            </div>
         
        </div>
     
        <div class="row q-mt-md q-pb-xs">
          <div class="col">
            <DateTimePicker :category="category"/>
          </div> 
        </div>

      </div>
    </q-card-section>

    <div v-if="category.showTasks" class="bg-grey-2" style="border-radius: 20px">
      <q-card  flat style="border-radius: 20px" class="q-pt-none q-mt-none bg-grey-2">
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
          <q-tab name="all" :label="$t('all')" />
          <q-tab name="ongoing" :label="$t('ongoing')" />
          <q-tab name="completed" :label="$t('completed')" />
        </q-tabs>

        <!-- <q-separator /> -->

        <q-tab-panels v-model="tab" animated class="bg-grey-2 q-px-none  q-mb-none">
          <q-tab-panel name="all" class="q-px-sm q-pb-xs" >
            <AllTasks :todoList="category.todoList" :category="category"/>
          </q-tab-panel>

          <q-tab-panel name="ongoing" class="q-px-sm q-pb-xs" >
            <TodoOnGoing :todoList="category.todoList" :category="category"></TodoOnGoing>
          </q-tab-panel>

          <q-tab-panel name="completed" class="q-px-sm q-pb-xs" >
            <TodoCompleted :todoList="category.todoList" :category="category"></TodoCompleted>
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