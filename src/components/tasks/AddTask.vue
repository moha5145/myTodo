<template>
    <div>
        
        <q-btn outline fab @click.stop="store.state.addTaskDialog = true" 
            icon="add"
            color="green"
            size="xs"
            class="q-my-sm"
            :label="$t('addTask')"
        > 
        </q-btn>

        <q-dialog v-model="store.state.addTaskDialog" >
            <q-card style="min-width: 75%">
                <q-card-section>
                    <div class="row">
                        <div class="text-h6">{{$t('addTask')}}</div>
                        <q-space></q-space>
                        <q-btn v-close-popup round flat
                            :style="{'color': store.state.themeColor}"
                            icon="cancel" 
                            dense
                            class="q-mb-md q-pr-ls" /> 
                    </div>
                </q-card-section>   
                
                <AddAndEditForm
                    :category="category"
                    :task="store.state.task"
                    :submitForm="store.methods.addTask"
                >
                </AddAndEditForm>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import { inject } from 'vue'

import AddAndEditForm from './AddAndEditForm.vue'
export default {
  components: { AddAndEditForm },
    props: ['category', 'todoList'],
    setup() {
        const store = inject('store')
        return {
            store
        }
    }
}
</script>