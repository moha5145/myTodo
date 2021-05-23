<template>
    <div class="" v-if="completed().length">
        
        <div v-for="list in  completed()" :key="list.id" class="" style="border-radius: 20px">
            <SingleTasks v-if="list.categorySlug == category"  :list="list" :category="category"  class="q-mb-xs"></SingleTasks>
        </div>
    </div>

    <div v-else>
        <h6 class="text-center q-my-xs text-grey-6">{{ $t('nothingCompleted')}}</h6>
    </div>
</template>

<script>
import SingleTasks from './SingleTasks.vue'
export default {
  components: { SingleTasks },
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