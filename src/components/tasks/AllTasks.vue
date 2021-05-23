<template>
    <div class="" >
        <div v-for="list in todoList" 
            :key="list.id" class="" style="border-radius: 20px">

            <SingleTasks v-if="list.categorySlug == category"  :list="list" :category="category" class="q-mb-xs ">
            </SingleTasks>
        </div>
        
    </div>
</template>

<script>
    import SingleTasks from 'src/components/tasks/SingleTasks.vue'
import { inject } from '@vue/runtime-core'
export default {
    components: {SingleTasks},
    props: ['todoList','category'],
    setup(props) {
        const store = inject('store')
        const sortedTodoList = () => {
            return props.todoList.slice().sort((a, b) => (b.date > a.date)  ? 1 : -1  )
        }

        return {
            sortedTodoList,
            store
        }
    }
    
}
</script>