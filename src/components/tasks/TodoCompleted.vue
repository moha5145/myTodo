<template>
    <div class=" bg-grey-2" v-if="completed().length">
        
        <div v-for="list in  completed()" :key="list.id" class=" bg-white" style="border-radius: 20px">
            <Tasks  :list="list" :category="category"  class="q-mb-xs"></Tasks>
        </div>
    </div>

    <div v-else>
        <h6 class="text-center q-my-xs text-grey-6">Nothing completed</h6>
    </div>
</template>

<script>
import Tasks from './Tasks.vue'
export default {
  components: { Tasks },
    props: ['todoList', 'category'],
    setup(props) {
        function completed() {
           return props.todoList.filter(task => task.done )
        }

        return {
            completed
        }
    }
}
</script>