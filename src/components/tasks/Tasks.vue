<template>
  <div>

    <q-list :class="{done: list.done, unDone: !list.done } ">
      <q-item v-ripple @click.stop="store.methods.doneTodo(list, category)" 
              clickable v-model="list.done"
              class="q-mx-none q-px-none list">
        <q-item-section >
          <div class="row q-mx-none" >
            <q-item-section side class=" q-mx-sm q-pr-xs" >
              <q-icon v-if="list.done" 
                      :value="list.done" name="check_circle_outline" 
                      color="green" size="md">
              </q-icon>

              <q-icon v-else 
                      :value="list.done" name="panorama_fish_eye" 
                      color="orange" size="md">
              </q-icon>
              
            </q-item-section>

            <q-item-section class=" q-mt-xs q-pl-none ">
              <q-item-label :class="{'text-strikethrough': list.done}" >
                <span class="text-weight-bold text-grey">
                  {{ list.name }}
                </span>
              </q-item-label>
            </q-item-section>

            <!-- <q-space></q-space> -->

            <div style="padding-top: 5px;" class="q-mr-xs">
              <q-fab @click.stop=""
                v-model="fab1"
                size="20px"
                dense                
                icon="keyboard_arrow_right"
                direction="left"
                padding="xs"
                :style="{'color': store.state.themeColor}"
              >
                <DeleteTask :task="list" :category="category"/>

                <EditTask :task='list' :category="category" class="q-mx-none q-px-none"></EditTask>
                
              </q-fab>
              <!-- </div> -->
            </div>
              <!-- <div class="row">
                 <q-item-section class=" q-pa-none col">
                  <EditTask :task='list' :category="category" class="q-mx-none q-px-none"></EditTask>
                </q-item-section > -->

              
              <!-- <q-item-section  class=" q-pa-none col">
                <DeleteTask :task="list" :category="category"/>
              </q-item-section> -->
             <!-- </div> --> 
          </div>
        </q-item-section>

      </q-item>
      <!-- <q-separator /> -->
    </q-list>
  </div>
</template>

<script>
import EditTask from 'components/tasks/EditTask'
import DeleteTask from './DeleteTask.vue'
import { inject, ref } from 'vue'


export default {
  components: { EditTask, DeleteTask},
    props: ['list', 'todoList','category'],
    setup() {
      const store = inject('store')

      return {
        fab1: ref(false),
        store
      }
    }
}
</script>

<style >
  .text-strikethrough {
    text-decoration: line-through;
    color: grey;
  }
  .done {
    border-left: solid rgb(85, 196, 85) 5px;
    border-radius: 20px
  }
  .unDone {
    border-left: solid orange 5px;
    border-radius: 20px
  }
  .list:hover {
    border-radius: 20px
  }
</style>