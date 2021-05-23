<template>
    <q-input outlined v-model="category.dueDate" :label="$t('dueDate')" >
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
                <q-input  outlined v-model="category.dueTime" :label="$t('dueTime')" 
                            class="q-mb-md q-pb-xs" >
                    <template v-slot:append >
                        <q-icon name="access_time" class="cursor-pointer"
                            :style="{'color': store.state.themeColor}">

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
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
    props: ['category'],
    setup() {
        const store = inject('store')

        return {
            store
        }
        
    },
}
</script>