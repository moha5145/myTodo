<template>
    <div>
        <q-card flat class="" style="border-radius: 20px">
            <form @submit.prevent="submitForm(task, category)" >
                <div class="q-px-xs " :style="{'color': store.state.themeColor}">
                    <q-input
                        v-model="task.name"
                        autofocus
                        :label="$t('addTask')"
                        length="100"
                        :rules="[
                            store.methods.required('name'),
                            store.methods.duplicateName('name'),
                            store.methods.minLength('Title', 2)
                        ]"
                        @update:modelValue="store.methods.toUppercase(task), 
                                store.methods.isSameTask(task)"
                        :style="{'color': store.state.themeColor}"
                        >

                        <template v-slot:append>
                            <q-icon v-if="task.name" name="close" @click="task.name = ''" 
                                    class="cursor-pointer" />
                        </template>

                        <template v-slot:after>
                            <q-btn v-if="task.name && task.name.length >= 2 && !store.state.isDuplicateName" 
                                @click.stop="$emit('showTasks')"
                                round dense icon="add" 
                                padding="xs"
                                class="q-mt-md q-mr-sm"
                                color="green-6"
                                :style="{ 'color': 'white'}"
                                type="submit"
                                v-close-popup/>
                            
                        </template>
                    </q-input>
                </div>
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