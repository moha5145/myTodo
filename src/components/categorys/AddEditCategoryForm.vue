<template>
  
    <form @submit.prevent="submitForm(category), pushToList()" >
        <div class="q-ma-sm" >
            <q-input bottom-slots 
                v-model="category.name" outlined 
                :label="$t('title')" counter 
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

            <DateTimePicker :category="category"></DateTimePicker>

        </div>

        <q-card-actions align="right" 
            v-show='category.name && category.name.length >= 2 && !store.state.isDuplicateName'>
            <q-btn :style="{'background-color': store.state.themeColor, 'color': 'white'}"
                :label="$t('save')" 
                type="submit"

                v-close-popup
                    />
        </q-card-actions>
    </form>
   
</template>

<script>
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import DateTimePicker from './DateTimePicker.vue'
export default {
  components: { DateTimePicker },
    props: ['category', 'submitForm'],
    setup(props) {
        const store = inject('store')

        const isSameCategory = () =>{
            console.log('chala')
        }

        const router = useRouter()

        function pushToList() {
            router.push('/' + props.category.slug)
        }

        return {
            store,
            isSameCategory,
            pushToList
        }
    }
}
</script>