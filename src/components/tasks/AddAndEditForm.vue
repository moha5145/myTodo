<template>
    <div>
        
        <q-card flat class="bg-grey-2">
            <form @submit.prevent="submitForm(task, category)" >
                <div class="q-pa-xs "  :style="{'color': store.state.themeColor}">
                    <q-input
                        autofocus
                        color="orange"
                        v-model="task.name"
                        label="Add task"
                        length="100"
                        @update:modelValue="store.methods.isSameTask(category, task)"
                        :rules="[
                            
                            store.methods.duplicateName('Task')
                        ]"
                        :style="{'color': store.state.themeColor}"
                        >

                        <template v-slot:append>
                            <q-icon v-if="task.name" name="close" @click="task.name = ''" 
                                    class="cursor-pointer" />
                        </template>

                        <template v-slot:after>
                            <q-btn v-show="task.name && task.name.length >= 2 && !store.state.isDuplicateName" 
                                @click.stop="$emit('showTasks')"
                                round dense flat icon="add" 
                                class="q-mt-md"
                                :style="{'background-color': store.state.themeColor, 'color': 'white'}"
                                type="submit"
                                v-close-popup/>

                            
                        </template>
                    </q-input>
                </div>

                <!-- <q-card-actions align="right">
                    
                    <q-btn v-show="task.name && task.name.length >= 2 && !store.state.isDuplicateName" @click="$emit('showTasks')"
                        label="SAVE" 
                        :style="{'background-color': store.state.themeColor, 'color': 'white'}"
                        type="submit"
                        v-close-popup
                        > 
                    </q-btn>
                    
                </q-card-actions> -->
            </form>
        </q-card>
       
    </div>
</template>

<script>
import { inject } from 'vue'
export default {
    props: ['category', 'task', 'submitForm'],
    setup() {
        const store = inject('store')
        return {
            store
        }
    }
}
</script>

<style scoped>
    
</style>