<template>
    <div>
        <div avatar class="col">
            <q-btn @click.prevent=" state.editCategoryDialog = true" round
                color="orange"
                icon="edit" size="sm" />     
        </div>

        <q-dialog v-model="state.editCategoryDialog">
            <q-card >
                <q-card-section>
                    <div class="row">
                        <div class="text-h6">{{$t('edit')}}</div>
                        <q-space></q-space>
                        <q-btn v-close-popup round flat 
                            :style="{'color': store.state.themeColor}"
                            icon="cancel" 
                            dense
                            class="q-mb-md q-pr-ls"
                            /> 
                    </div>
                </q-card-section>

                <AddEditCategoryForm    :category="state.categoryClon" 
                                        :submitForm="store.methods.editCategory" 
                                        ref="AddEditCategoryForm">
                </AddEditCategoryForm>
            
            </q-card>
        </q-dialog>
    </div>
     
</template>

<script>
import { inject, reactive } from 'vue'
import AddEditCategoryForm from './AddEditCategoryForm.vue'
export default {
  components: { AddEditCategoryForm },
    props: ['category'],
    setup(props) {
        const store = inject('store')
        const state = reactive({
            editCategoryDialog: false,
            categoryClon: {...props.category}
        })

        return {
            state,
            store
        }
    }
}
</script>