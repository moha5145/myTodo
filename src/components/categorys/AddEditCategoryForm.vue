<template>
  
    <form @submit.prevent="submitForm(category)" >
        <div class="q-ma-sm" >
            <q-input bottom-slots 
                v-model="category.name" outlined 
                label="Title" counter 
                maxlength="50" 
                :rules="[
                    store.methods.required('Title'),
                    store.methods.duplicateName('Title')
                ]"
                
                @update:modelValue="store.methods.isSameCategory(category)"
                autofocus
                :style="{'color': store.state.themeColor, 'border-color': store.state.themeColor}"
                >
                <template v-slot:append>
                    <q-icon v-if="category.name" name="close" 
                        @click="category.name = ''" class="cursor-pointer" />
                </template>
            </q-input>

            <q-input outlined v-model="category.dueDate" label="Due Date" >
                <template v-slot:append >
                    <q-icon name="event" class="cursor-pointer" 
                        :style="{'color': store.state.themeColor}">
                        <q-popup-proxy transition-show="scale" transition-hide="scale">
                            <q-date v-model="category.dueDate" mask="DD-MM-YYYY" 
                                    :style="{'background-color': store.state.themeColor, 'color': 'white'}">
                                <div class="row items-center justify-end" >
                                    <q-btn v-close-popup label="Close"  flat />
                                </div>
                            </q-date>
                        </q-popup-proxy>
                    </q-icon>
                    <q-icon v-if="category.dueDate" name="close" 
                        @click="category.dueDate = ''" class="cursor-pointer" />
                </template>
            </q-input>

            <div v-if="category.dueDate">
                <q-input  outlined v-model="category.dueTime" label="Due Time" 
                    
                            class="q-mb-md q-pb-xs" >
                    <template v-slot:append >
                        <q-icon name="access_time" class="cursor-pointer"
                            :style="{'color': store.state.themeColor}"
                                >
                            <q-popup-proxy transition-show="scale" transition-hide="scale" >
                                <q-time v-model="category.dueTime" mask="HH:mm" format24h 
                                        :style="{'background-color': store.state.themeColor, 'color': 'white'}">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close"  flat color="white"
                                         />
                                    </div>
                                </q-time>
                            </q-popup-proxy>
                        </q-icon>

                        <q-icon v-if="category.dueTime" name="close" @click="category.dueTime = ''" 
                            class="cursor-pointer" />
                    </template>
                </q-input>
            </div>

        </div>

        <q-card-actions align="right" 
            v-show='category.name && category.name.length >= 2 && !store.state.isDuplicateName'>
            <q-btn :style="{'background-color': store.state.themeColor, 'color': 'white'}"
                @click="store.methods.closeCategoryAcordion()"
                label="SAVE" 
                type="submit"
                v-close-popup
                    />
        </q-card-actions>
    </form>
   
</template>

<script>
import { inject } from 'vue'
export default {
    props: ['category', 'submitForm'],
    setup() {
        const store = inject('store')

        const isSameCategory = () =>{
            console.log('chala')
        }

        return {
            store,
            isSameCategory
        }
    }
}
</script>