<template>
    <div>

        <q-btn @click.stop=" state.editTaskDialog = true" flat round dense color="grey" 
                icon="edit" class=""/>     

        <q-dialog v-model="state.editTaskDialog">
          
            <q-card>
                <q-card-section>
                    <div class="row">
                        <div class="text-h6">Edit Task</div>
                        <q-space></q-space>
                        <q-btn v-close-popup round flat 
                            :style="{'color': store.state.themeColor}"
                            icon="cancel" 
                            dense
                            class="q-mb-md q-pr-ls"
                            /> 
                    </div>
                </q-card-section>

                <AddAndEditForm
                    :task="state.todo"
                    :category="category"
                    :submitForm="store.methods.editTask"
                    ref="AddAndEditForm"
                    >
                </AddAndEditForm>
            
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import { inject, reactive } from 'vue'
import AddAndEditForm from './AddAndEditForm.vue'
export default {
  components: { AddAndEditForm },
    props: ['task', 'category'],
    setup(props) {
        const store = inject('store')
        const state = reactive({
            todo: {...props.task},
            editTaskDialog: false,
        })
        return {
            state,
            store
        }
    }
}
</script>