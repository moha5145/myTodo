    <template>
        <div>
            <q-btn round
                @click.stop="confirm = true"
                color="red" icon="delete" 
                size="sm" class=" text-right ">
            </q-btn> 

            <q-dialog v-model="confirm" persistent>
                <q-card>
                    <q-card-section class="row items-center">
                    <!-- <q-avatar icon="delete" color="primary" text-color="white" /> -->
                    <span class="q-ml-sm text-grey">{{$t('confirmDelete')}} {{category.name}}.</span>
                    </q-card-section>

                    <q-card-actions align="right">
                    <q-btn flat :label="$t('cancel')" v-close-popup 
                        :style="{'color': store.state.themeColor}"/>
                    <q-btn flat :label="$t('delete')" @click="store.methods.deleteCategory(category)" 
                        color="red" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>
        </div>
    </template>

<script>
import { inject, ref } from 'vue'
    export default {
        props: ['category'],
        setup() {
            const store = inject('store')
            const confirm = ref(false)

            return {store, confirm}
        }
    }
</script>