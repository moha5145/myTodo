    <template>
        <div>
            <q-btn  @click.stop="confirm = true" flat round dense 
                color="grey" icon="delete" class="q-mx-none q-px-none">
            </q-btn>

            <q-dialog v-model="confirm" persistent>
                <q-card>
                    <q-card-section class="row items-center">
                    <!-- <q-avatar icon="delete" color="primary" text-color="white" /> -->
                    <span class="q-ml-sm text-grey">{{$t('confirmDelete')}} {{task.name}}.</span>
                    </q-card-section>

                    <q-card-actions align="right">
                    <q-btn flat :label="$t('cancel')" :style="{'color': store.state.themeColor}" v-close-popup />
                    <q-btn flat :label="$t('delete')" @click="store.methods.deleteTask(task, category)" 
                        color="red" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>
        </div>
    </template>

<script>
import { inject, ref } from 'vue'
    export default {
        props: ['category', 'task'],
        setup() {
            const store = inject('store')
            const confirm = ref(false)

        return {store, confirm}
        }
    }
</script>