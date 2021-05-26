<template>
    <div>
        <q-page-sticky v-if="$route.path == '/'" position="bottom" :offset="[0, 18]">
            <q-btn  @click.stop="state.addCategoryDialog = true" 
                    round dark icon="add" size="20px"
                    :style="{'background-color': store.state.themeColor, 'color': 'white'}"
                    class="white-text " />
        </q-page-sticky>
         
        <q-dialog v-model="state.addCategoryDialog" >
            <q-card style="min-width: 75% border-radius: 20px;" >
                <q-card-section style="border-radius: 20px;">
                    <div class="row">
                        <div class="text-h6">{{$t('addTitle')}}</div>
                        <q-space></q-space>
                        <q-btn v-close-popup round flat 
                            :style="{'color': store.state.themeColor}"
                            icon="cancel" 
                            dense
                            class="q-mb-md q-pr-ls"
                            /> 
                    </div>
                </q-card-section>   

                <AddEditCategoryForm :category="store.state.category"  
                                        :submitForm="store.methods.addCategory" 
                                        >
                </AddEditCategoryForm>
            </q-card>
        </q-dialog>
    </div>
    
</template>

<script>
import { reactive, inject } from 'vue'
import AddEditCategoryForm from './AddEditCategoryForm.vue'
export default {
  components: { AddEditCategoryForm },
  setup() {
    const store = inject('store')
    const state = reactive({
        addCategoryDialog: false,   
    })

    return {
        store,
        state
    }
  }
    
}
</script>

<style scoped>
    q-card {
        border-radius: 20px;
    }
</style>