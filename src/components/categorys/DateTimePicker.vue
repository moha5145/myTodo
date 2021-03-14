<template>
    <div class=" q-mt-xs " v-if="category.dueDate">
        <div class="row q-ml-sm">
            <q-icon  name="today" size="xs" :style="{'color': store.state.themeColor}"/>
            <q-item-label caption class="q-ml-xs q-mt-xs">{{ category.dueDate}}</q-item-label>

            <div v-if="category.dueTime"  class="row q-ml-sm">
                <q-icon  name="access_time" size="xs" :style="{'color': store.state.themeColor}"/>
            
                <q-item-label caption class="q-mt-xs">
                    <small class="text-left q-ml-xs ">{{ category.dueTime}}</small>
                </q-item-label>
            </div>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue'
export default {
    props: ['category'],
    setup() {
        const store = inject('store')

        return {
            store
        }
    }
}
</script>