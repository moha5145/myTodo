<template>
    <q-btn flat class=" full-width ">
        <q-icon color="white" name="palette" class="cursor-pointer" size="md"> 
        </q-icon>
        <q-popup-proxy transition-show="scale" transition-hide="scale" >
            <q-color v-model="hex" no-header type="submit" default-view="palette"
                    @change="store.methods.changeColor(hex)"
                    class="my-picker"
                    no-footer
                    v-close-popup/>
        </q-popup-proxy>
    </q-btn>
</template>

<script>
import { inject } from 'vue'
export default {
    data() {
        return {
            hex: '#f57b00',
            colorDialog: false
        }
    },
    setup() {
        const store = inject('store')

        return {
            store
        }
    }
}
</script>

<style scoped>
    .my-picker {
        min-width: 300px
    }
</style>