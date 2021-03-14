<template>
    <div>
        <div v-if="incompleted().length" class=" bg-grey-2" >

            <div v-for="list in incompleted()" :key="list.id" class="bg-white" style="border-radius: 20px">
                <Tasks  :list="list" :category="category"  class="q-mb-xs ">
                </Tasks>
            </div>
            
        </div>

        <div v-else>
            <h6 class="text-center q-my-xs text-grey-6">Nothing to do</h6>
        </div>
    </div>

</template>grey

<script>
import Tasks from './Tasks.vue'
export default {
  components: { Tasks },
    props: ['todoList', 'category'],

     setup(props) {
        const incompleted = () => {
           return props.todoList.filter(task => !task.done )
        }

        return {
            incompleted
        }
    }
}
</script>